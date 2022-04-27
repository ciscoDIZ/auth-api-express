"use strict";

const express = require('express');
const CommentController = require('../controllers/comment');
const {auth} = require("../middlewares");

const api = express.Router();

api.post('/comment', auth, CommentController.create);
api.get('/comment', CommentController.findAll);
api.get('/comment/:id', CommentController.findById);
api.delete('/comment/:id', auth, CommentController.deleteById);
api.patch('/comment/:id', auth, CommentController.update);

module.exports = api;
