"use strict";

const express = require('express');
const ImageController = require('../controllers/image');
const multipart = require("connect-multiparty");

const upload = multipart({uploadDir: './uploads'})

const api = express.Router();

api.post('/image', upload, ImageController.create);
api.get('/image/:name', ImageController.findByName);
api.patch('/image/:id', ImageController.update);
api.get('/image/id/:id', ImageController.findById);
api.delete('/image/:id', ImageController.deleteById);
api.get('/image', ImageController.findAll);


module.exports = api;
