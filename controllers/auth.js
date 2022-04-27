"use strict";

const { User } = require('../models/user');
const { badRequest, internalServerError, notFound, forbiddenRequest } = require('../error');
const bcrypt = require('bcryptjs');
const {encode} = require('../services/jwt');

const login = async (req, res) => {

    const {payload} = req.body;

    try {
        if(!payload) {
            res.status(400).send(badRequest('falta payload'));
            return;
        }
        let user = await User.findOne({email: payload.email});
        if (!user) {
            res.status(404).send(notFound('User'));
            return;
        }
        const {lastCacheAt, id} = user;

        const lastCache = new Date(lastCacheAt);
        const localDate = new Date();
        if(localDate.getMonth() - lastCache.getMonth() >= 3) {
           user = await User.findByIdAndUpdate(id, {activated: false});
        }
        const { activated } = user;
        if (!activated) {
            res.status(401).send(badRequest('falta activación de cuenta'));
            return;
        }
        if (!user) {
            res.status(400).send(badRequest('email o contraseña incorrectos'));
            return;
        }
        const { password } = user;
        const match = await bcrypt.compare(payload.password, password);
        if (!match) {
            res.status(400).send(badRequest('email o contraseña incorrectos'));
            return;
        }
        const authenticatedUser = await User
            .findByIdAndUpdate(
                id,
                { lastCacheAt: Date.now() },
                { new: true }
            );
        const token = encode(authenticatedUser, '12h')
        res.status(200).send({ token, authenticatedUser });
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const activate = async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = await User.findById(id);
        if (user.activated) {
            res.status(403)
            .send(forbiddenRequest(`usuario con id ${user.id} ya dispone de cuenta activada`));
            return;
        }
        user.activated = true;
        user.lastCacheAt = Date.now();
        const updatedUser = await User.findByIdAndUpdate(
            id,
            user,
            {
                new: true
            }
        );
        if (!updatedUser) {
            res.status(404).send(notFound("User", id));
            return;
        }
        res.status(200).send({token: encode(updatedUser, '12h'), activatedUser: user});
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
}

module.exports = {
    login,
    activate
};