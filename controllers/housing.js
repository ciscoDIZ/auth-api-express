"use strict";

const {Housing} = require('../models/housing');
const {Address} = require('../models/address');
const {persist} = require('../services/image');
const getOptions = require('../utils/pagination');
const {internalServerError, notFound, badRequest} = require('../error');
const {User} = require("../models/user");
const cloudinary = require('../config/cloudinary');

const create = async (req, res) => {
    const {body} = req;
    if (!body) {
        res.status(400).send({msg: 'error en la petición'});
        return;
    }
    const {address, price, surface, owner, description} = req.body;

    try {
        const addressEntity = new Address(address);
        const savedAddress = await addressEntity.save();

        const housing = {
            price,
            surface,
            address: savedAddress._id,
            description,
            owner
        }
        const housingEntity = new Housing(housing);
        const savedHousing = await housingEntity.save();
        await savedHousing.populate("address")
        res.status(201).send(savedHousing);
    } catch (err) {
        res.status(400).send(badRequest(err));
    }
};

const findById = async (req, res) => {
    const {id} = req.params;
    try {
        const responseData = await Housing
            .findById(id)
            .populate(
                [
                    {path: 'address', select: {_id: 1, __v: 0}},
                    {path: 'images', options: {limit: 5}},
                    {path: 'mainImage', select: ['apiUri', 'id']},
                    {path: 'comments', populate: [{path: 'author'}]},
                ]
            );
        res.status(200).send(responseData);
    } catch (err) {
        res.status(404).send(notFound('Housing', id));
    }
};

const findAll = async (req, res) => {
    try {
        const {query} = req;
        const {paginate} = Housing;

        const options = getOptions({
            query,
            paginate,
            populate: [
                {
                    path: 'address',
                    select: {
                        _id: 1,
                        __v: 0
                    },
                },
                {
                    path: 'owner',
                    select: ['name', 'surname']
                },
                {
                    path: 'images',
                    select: ['apiUri', 'title'],
                    options: {
                        limit: 10
                    }
                },
                {
                    path: 'mainImage',
                    select: ['apiUri', 'id']
                },
                {
                    path: 'comments',
                    select: ['title', 'author', 'content', 'createdAt'],
                    model: 'Comment',
                    options: {
                        limit: 10,
                        sort: {createdAt: 1}
                    },
                    populate: {
                        path: 'author'
                    }
                }
            ],
            select: {
                __v: 0
            }
        });
        console.log(query)
        const housings = await Housing.paginate(query, options)

        if (!housings) {
            res.status(404).send({});
            return;
        }
        res.status(200).send(housings);
    } catch (e) {
        res.status(500).send({msg: e});
    }
};

const update = async (req, res) => {
    try {
        const {id, address, description, surface, price} = req.body;
        const housing = {
            description,
            surface,
            price
        }
        console.log('address id: ' + address._id);

        const updateAddress = await Address.findByIdAndUpdate(address._id, address, {new: true});
        console.log(updateAddress)
        const updatedHousing = await Housing.findByIdAndUpdate(id, housing, {new: true}).populate([{path: 'address'}, {path: 'owner'}, {path: 'mainImage'}]);

        if (!updatedHousing) {
            res.status(404).send(notFound('Housing', id));
            return;
        }
        res.status(201).send(updatedHousing);
    } catch (error) {
        res.status(400).send(internalServerError(error))
    }
};

const deleteById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await Housing.findByIdAndDelete(id);

        if (user) {
            const {address} = user;
            await Address.findByIdAndDelete(address);
        } else {
            res.status(404).send(notFound("Housing", id));
            return;
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(internalServerError(error))
    }
};

const uploadMainImage = async (req, res) => {
    const {id} = req.params;
    const {protocol, headers, body} = req;
    console.log(req.files.file)
    if (req.files.file) {
        await cloudinary.uploader.upload(
            req.files.file.path,
            {},
            async (err, callResult) => {
                try {
                    const [, fileName] = req.files.file.path.split('/');
                    const [, ext] = fileName.split('.');
                    if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
                        res.status(400).send(badRequest('la extensión debe ser .png o .jpg'));
                        return;
                    }

                    if (err) {
                        res.status(400).send(err);
                        return;
                    }
                    const imageData = {
                        title: body.title,
                        apiUri: callResult.secure_url,
                        housing: id,
                    }

                    const savedImage = await persist(imageData);
                    const updatedHousing = await Housing.findByIdAndUpdate(id, {mainImage: savedImage.id}, {new: true})
                        .populate({path: 'mainImage', select: 'apiUri'});
                    if (!updatedHousing) {
                        res.status(404).send(notFound('Housing', id));
                        return;
                    }
                    res.status(200).send(updatedHousing);


                } catch (e) {
                    res.status(500).send(internalServerError(e));
                }
            }
        )
    }
};

const findByOwner = async (req, res) => {
    const {owner} = req.params;
    const {paginate} = Housing;
    const {limit} = req.query;
    const query = {
        limit
    }
    const options = getOptions({
        query: query,
        paginate, populate: [
            {
                path: 'address',
                select: {
                    _id: 0,
                    __v: 0
                },
            },
            {
                path: 'owner',
                select: ['name', 'surname']
            },
            {
                path: 'images',
                select: ['apiUri', 'title'],
                options: {
                    limit: 10
                }
            },
            {
                path: 'mainImage',
                select: ['apiUri', 'id']
            },
            {
                path: 'comments',
                select: ['title', 'author', 'content', 'createdAt'],
                model: 'Comment',
                options: {
                    limit: 10,
                    sort: {createdAt: 1}
                },
                populate: {
                    path: 'author'
                }
            }
        ],
        select: {
            __v: 0
        }
    })
    const filter = {owner};
    try {
        const housings = await Housing.paginate(filter, options);
        if (!housings) {
            res.status(404).send(notFound('Housing'))
            return;
        }
        res.status(200).send(housings);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const addLike = async (req, res) => {
    const {id} = req.params;
    const {userId} = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).send(notFound('User', userId));
            return;
        }
        const housing = await Housing.findById(id).populate([{path: 'address'}, {path: 'mainImage'}, {
            path: 'images',
            options: {limit: 5}
        }]);
        if (!housing) {
            res.status(404).send(notFound('Housing', userId));
            return;
        }
        housing.likes.push(user.id);
        await housing.save();
        res.status(201).send(housing);
    } catch (e) {
        res.status(404).send(internalServerError(e));
    }

};

const removeLike = async (req, res) => {
    const {id} = req.params;
    const {userId} = req.body;
    try {
        const user = await User.findById(userId);
        const housing = await Housing.findById(id).populate([{path: 'address'}, {path: 'mainImage'}, {
            path: 'images',
            options: {limit: 5}
        }]);
        if (!housing) {
            res.status(404).send(notFound('Housing', userId));
            return;
        }
        if (!user) {
            res.status(404).send(notFound('User', userId));
            return;
        }

        const like = housing.likes
            .map((value) => value.toString())
            .find((id) => id === user.id);
        if (like) {
            housing.likes = housing.likes.map(m => m.toString()).filter(f => f !== user.id)

            await housing.save();
            console.log(housing)
            res.status(200).send(housing);
        }
    } catch (e) {
        res.status(404).send(internalServerError(e));
    }

};

module.exports = {
    create,
    findById,
    findAll,
    update,
    deleteById,
    uploadMainImage,
    findByOwner,
    addLike,
    removeLike
};
