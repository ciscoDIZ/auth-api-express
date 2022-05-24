"use strict";

const express = require('express');
const ImageController = require('../controllers/image');

const { upload, login, processFileMiddleware } = require('../middlewares');

const api = express.Router();

api.post('/image', [login, upload], ImageController.create);
api.get('/image/:name', ImageController.findByName);
api.patch('/image/:id', [login, upload], ImageController.update);
api.get('/image/id/:id', ImageController.findById);
api.delete('/image/:id', login, ImageController.deleteById);
api.get('/image', ImageController.findAll);
api.post('/image/store', upload, ImageController.fileStorage)

module.exports = api;
