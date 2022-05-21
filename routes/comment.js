"use strict";

const express = require('express');
const CommentController = require('../controllers/comment');
const {login, auth} = require("../middlewares");

const api = express.Router();
/**
 * @swagger
 * /api/comment:
 *   post:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.post('/comment', login, CommentController.create);
/**
 * @swagger
 * /api/comment:
 *   get:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.get('/comment', CommentController.findAll);
/**
 * @swagger
 * /api/comment/{id}:
 *   get:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.get('/comment/:id', CommentController.findById);
/**
 * @swagger
 * /api/comment/{id}:
 *   delete:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.delete('/comment/:id', login, CommentController.deleteById);
/**
 * @swagger
 * /api/comment/{id}:
 *   patch:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.patch('/comment/:id', login, CommentController.update);
/**
 * @swagger
 * /api/comment/like/{id}:
 *   patch:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.patch('/comment/like/:id', login, CommentController.addLike);
/**
 * @swagger
 * /api/comment/like/remove/{id}:
 *   patch:
 *     tags:
 *     - comment
 *     description: crea nuevo comentario
 *     parameters:
 *     - name: comment
 *       description: objeto el cual contiene los datos del nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           content:
 *             type: string
 *           title:
 *             type: string
 *           housing:
 *             type: string
 *         required:
 *           - author
 *           - content
 */
api.patch('/comment/like/remove/:id', login, CommentController.removeLike);

module.exports = api;
