"use strict";

const express = require('express');
const CommentController = require('../controllers/comment');

const api = express.Router();

api.post('/comment', CommentController.create);
api.get('/comment', CommentController.findAll);

module.exports = api;
