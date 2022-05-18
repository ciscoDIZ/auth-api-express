"use strict";

const multipart = require('connect-multiparty');

const { User } = require('./models/user');
const { decode } = require('./services/jwt');


const upload = multipart({uploadDir: './uploads'});

const response = (res, status, send) => {
    res.status(status).send({message: send});
};

const login = async (req, res, next) => {
    const reqId = req.query.id;
    if (!req.headers.authorization) {
        response(res, 401, 'no authorized');
        return;
    }
    const [prefix, token] = req.headers.authorization.split(' ')
    if (prefix !== 'Bearer') {
        response(res, 400, 'prefix must be Bearer');
        return;
    }
    const { API_SECRET } = req.app.locals.config;
    try {
        const payload = decode(token, API_SECRET);
        console.log(payload)
        const user = await User.findById(payload.id);
        const { id } = user;

        if (!user) {
            response(res, 404, 'not found user');
            return;
        }

        if (id !== payload.id) {
            const admin = await User.findById(payload.id);
            if (admin.role !== 'admin') {
                response(res, 409, 'conflict on payload');
                return;
            }
        }
        next();
    } catch (e) {
        res.status(409).send({error: e});
    }
};

const auth = async (req, res, next) => {
    const { id } = req.query;
    const { resource } = req.headers;
    const user = await User.findOne({id}).populate('housings');
    const {housings} = user;

    if (!housings.find(h => h.id === resource)) {
        res.status(401).send({msn: 'unauthorized'})
        return;
    }

    next();
}

module.exports = {
    login,
    upload,
    auth
};