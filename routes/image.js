"use strict";

const express = require('express');
const ImageController = require('../controllers/image');

const { upload, login, auth } = require('../middlewares');

const api = express.Router();

api.post('/image', [login, upload], ImageController.create);
api.get('/image/:name', ImageController.findByName);
api.patch('/image/:id', login, ImageController.update);
api.get('/image/id/:id', ImageController.findById);
api.delete('/image/:id', login, ImageController.deleteById);
api.get('/image', ImageController.findAll);

module.exports = api;
