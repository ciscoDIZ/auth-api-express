"use strict";

const express = require('express');
const UserController = require('../controllers/user');
// const multipart = require('connect-multiparty');

const { auth } = require('../middlewares');
const { upload } = require('../middlewares');

const api = express.Router();

api.post('/user', UserController.create);
api.get('/user/:id', UserController.findById);
api.get('/user/email/:email', UserController.findByEmail);
api.get('/user', UserController.findAll);
api.delete('/user/:id', auth, UserController.deleteById);
api.put('/user/:id', auth, UserController.updateById);
api.patch('/user/:id', [auth, upload], UserController.uploadAvatar);
api.get('/avatar/:name', UserController.getAvatar)
api.patch('/owner/:id', UserController.updateOwnerHousing);

module.exports = api;