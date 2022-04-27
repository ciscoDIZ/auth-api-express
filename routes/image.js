"use strict";

const express = require('express');
const ImageController = require('../controllers/image');

const { upload, auth } = require('../middlewares');

const api = express.Router();

api.post('/image', [auth, upload], ImageController.create);
api.get('/image/:name', ImageController.findByName);
api.patch('/image/:id', auth, ImageController.update);
api.get('/image/id/:id', ImageController.findById);
api.delete('/image/:id', auth, ImageController.deleteById);
api.get('/image', ImageController.findAll);

module.exports = api;
