"use strict";

const express = require('express');
const UserController = require('../controllers/user');
const multipart = require('connect-multiparty');

const {auth} = require('../middlewares');
const upload = multipart({uploadDir: './uploads'})
const api = express.Router();

api.post('/user', UserController.create);
api.get('/user/:id', UserController.findById);
api.get('/user/email/:email', UserController.findByEmail);
api.get('/user', UserController.findAll);
api.delete('/user/:id', auth, UserController.deleteById);
api.put('/user/:id', auth, UserController.updateById);
api.put('/user/update-avatar/:id',[auth, upload], UserController.updateAvatar)
module.exports = api;