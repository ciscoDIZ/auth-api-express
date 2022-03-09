"use strict";

const fs = require('fs');
const path = require('path'); 

const User = require('../models/user');
const {notFound, internalServerError, badRequest} = require('../error');
const bcrypt = require('bcryptjs');

const create = async (req, res) => {
    const {SALT_ROUND, SALT_MINOR} = req.app.locals.config
    try {
        await bcrypt.genSalt(parseInt(SALT_ROUND), SALT_MINOR, (err, salt) => {
            const data = req.body
            bcrypt.hash(data.password, salt, (err, hash) => {
                data.password = hash;
                const user = new User(data);
                user.save()
                    .then((data) => {
                        res.status(201).send(data);
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
    console.log(req.app.locals.config)
    try {
        const user = await User.findById(userId);
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

    const {name,limit,page} = req.query;
    const filter = (name) ? {name} : {};
    const {options} = User.paginate;

    options.page = (page) ? page : options.page;
    options.limit = (limit) ? limit : options.limit;
    
    try {
        const users = await User.paginate(filter,options);
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
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
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
        const {name, surname, password, role} = req.body;
        const update = {
            name,
            surname,
            password,
            role,
        }
        if (Object.entries(update) < 1) {
            res.status(400).send(badRequest('not empty'));
            return;
        }
        if (update.password) {
            const salt = bcrypt.genSaltSync(parseInt(SALT_ROUND), SALT_MINOR)
            update.password = bcrypt.hashSync(update.password, salt);
        }
        console.log(update);
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
    const { id } = req.params;
    const { protocol, headers } = req;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send(notFound('User'));
            return;
        }
        if (req.files) {
            const [, fileName] = req.files.file.path.split('/');
            const [, ext] = fileName.split('.');
            if (ext !== 'png' && ext !== 'jpg') {
                res.status(400).send(badRequest('la extensión debe ser .png o .jpg'));
                return;
            }

            user.avatar = `${protocol}://${headers.host}/api/avatar/${fileName}`;

            const updatedUser = await User.findByIdAndUpdate(id, user, {new: true}); 
            res.status(201).send(updatedUser);
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
    getAvatar
};