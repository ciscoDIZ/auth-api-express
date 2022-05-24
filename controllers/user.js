"use strict";

const fs = require('fs');
const path = require('path');

const bcrypt = require('bcryptjs');

const {User} = require('../models/user');
const {Housing} = require('../models/housing');
const getOptions = require('../utils/pagination');
const {notFound, internalServerError, badRequest} = require('../error');
const cloudinary = require('../config/cloudinary');
const create = (req, res) => {
    const {protocol, headers} = req;
    const {SALT_ROUND, SALT_MINOR} = req.app.locals.config
    try {
        bcrypt.genSalt(parseInt(SALT_ROUND), SALT_MINOR, (err, salt) => {

            const data = req.body
            bcrypt.hash(data.password, salt, (err, hash) => {
                data.password = hash;
                const user = new User(data);
                user.save()
                    .then((data) => {
                        const activationUri = `${protocol}://${headers.host}/api/auth/${data.id}`;
                        const {name, surname, email, role, activated, createdAt, lastCacheAt, id, residence} = data;
                        const user = {
                            id,
                            name,
                            surname,
                            email,
                            role,
                            activated,
                            activationUri,
                            createdAt,
                            lastCacheAt,
                            residence
                        }
                        res.status(201).send(user);
                    })
                    .catch(err => {
                        res.status(406).send(err);
                    });
            });
        });
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const findById = async (req, res) => {
    const userId = req.params.id;
    const select = {
        password: 0,
        __v: 0,
    }
    try {
        const user = await User
            .findOne(
                {
                    _id: userId
                },
                select
            )
            .populate(
                {
                    path: 'housings',
                    select: {
                        _id: 0,
                        __v: 0
                    },
                    populate:
                        [
                            {
                                path: 'address',
                                select: {
                                    _id: 0,
                                    __v: 0
                                }
                            },
                            {
                                path: 'mainImage'
                            }
                        ]

                }
            );

        if (!user) {
            res.status(404).send(notFound('User', userId));
            return;
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(internalServerError(e))
    }
};

const findByEmail = async (req, res) => {
    const userEmail = req.params.email;
    try {
        const user = await User.findOne({email: userEmail});
        if (!user) {
            res.status(404).send(notFound('User', userEmail));
            return;
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
};

const findAll = async (req, res) => {
    const {query} = req;
    const {name, pagination} = query;
    const {paginate} = User;
    const filter = (name) ? {name} : {};
    if (!pagination) {
        const users = await User.find().populate('housings')
        res.status(200).send(users);
        return;
    }
    const options = getOptions({
        query,
        paginate,

        populate: {
            path: 'housings',
            select: {
                __v: 0
            },
            populate: [
                {
                    path: 'address',
                    select: {_id: 0, __v: 0}
                },
                {
                    path: 'images',
                    options: {
                        limit: 5
                    }
                }
            ]
        }
    });

    try {
        const users = await User.paginate(filter, options);
        if (!users) {
            res.status(404).send(notFound('Users'));
            return;
        }
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const deleteById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        const {housings} = user;
        if (housings) {
            await Housing.deleteMany(housings);
        }
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            res.status(404).send(notFound("User", userId));
            return;
        }
        res.status(204).send({});
    } catch (e) {
        res.status(500).send(e)
    }
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const {SALT_ROUND, SALT_MINOR} = req.app.locals.config;
    try {
        const {name, surname, password, email, role, residence, biography} = req.body;
        const update = {
            name,
            surname,
            password,
            email,
            residence,
            biography,
            role,
        }
        if (Object.entries(update) < 1) {
            res.status(400).send(badRequest('not empty'));
            return;
        }
        if (update.password) {
            console.log(update.password)
            const salt = bcrypt.genSaltSync(parseInt(SALT_ROUND), SALT_MINOR)
            update.password = bcrypt.hashSync(update.password, salt);
        }
        const user = await User.findByIdAndUpdate(id, update, {new: true});
        if (!user) {
            res.status(404).send(notFound('User', id));
            return;
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const uploadAvatar = async (req, res) => {
    const {id} = req.params;
    const {protocol, headers} = req;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send(notFound('User'));
            return;
        }
        if (req.files) {
            const [, fileName] = req.files.file.path.split('/');
            const [, ext] = fileName.split('.');
            if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
                res.status(400).send(badRequest('la extensión debe ser .png o .jpg'));
                return;
            }
            await cloudinary.uploader.upload(
                req.files.file.path,
                {},
                async (err, callResult) => {

                    user.avatar = callResult.secure_url;

                    const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
                    res.status(201).send(updatedUser);
            });

        }
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const getAvatar = (req, res) => {
    const {name} = req.params;
    const filePath = `./uploads/${name}`;
    fs.stat(filePath, (err, stat) => {
        if (err) {
            res.status(404).send(notFound('file'));
            return;
        }
        res.sendFile(path.resolve(filePath));
    });
};


module.exports = {
    create,
    findById,
    findByEmail,
    findAll,
    deleteById,
    updateById,
    uploadAvatar,
    getAvatar,
};