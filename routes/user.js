"use strict";

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: Sample API
 *   description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
 *   version: 0.1.9
 *
 */

const express = require('express');
const UserController = require('../controllers/user');
// const multipart = require('connect-multiparty');

const { login } = require('../middlewares');
const { upload } = require('../middlewares');

const api = express.Router();

api.post('/user', UserController.create);

api.get('/user/:id', UserController.findById);

api.get('/user/email/:email', UserController.findByEmail);

api.get('/user', UserController.findAll);

api.delete('/user/:id', login, UserController.deleteById);

api.put('/user/:id', login, UserController.updateById);

api.patch('/user/:id', [login, upload], UserController.uploadAvatar);
api.get('/avatar/:name', UserController.getAvatar);

module.exports = api;