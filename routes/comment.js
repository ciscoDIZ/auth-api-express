"use strict";

const express = require('express');
const CommentController = require('../controllers/comment');
const {login, auth} = require("../middlewares");

const api = express.Router();

api.post('/comment', login, CommentController.create);
api.get('/comment', CommentController.findAll);
api.get('/comment/:id', CommentController.findById);
api.delete('/comment/:id', login, CommentController.deleteById);
api.patch('/comment/:id', login, CommentController.update);
api.patch('/comment/like/:id', login, CommentController.addLike);
api.patch('/comment/like/remove/:id', login, CommentController.removeLike);

module.exports = api;
