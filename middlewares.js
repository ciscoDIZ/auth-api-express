"use strict";
const User = require('./models/user');
const {decode} = require('./services/jwt');

const response = (res, status, send) => {
    res.status(status).send({message: send});
}

const auth = async (req, res, next) => {
    const reqId = req.params.id;

    if (!req.headers.authorization) {
        response(res, 401, 'no authorized');
        return;
    }
    const [prefix, token] = req.headers.authorization.split(' ')
    if (prefix !== 'Bearer') {
        response(res, 400, 'prefix must be Bearer');
        return;
    }
    const {API_SECRET} = req.app.locals.config;
    const payload = decode(token, API_SECRET);
    
    const user = await User.findById(reqId);
    const { id, email, lastCacheAt, role } = user;

    if (!user) {
        response(res, 404, 'not found user');
        return;
    }
    
    if(id !== payload.id || email !== payload.email) {
        const admin = await User.findById(payload.id);
        if(admin.role !== 'admin') {
            response(res, 403, 'no autorizado');
            return;
        }
    }

    next();
};


module.exports = {
    auth
}