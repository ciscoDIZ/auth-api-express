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
/**
 * @swagger
 * /api/user:
 *   post:
 *     tags:
 *     - user
 *     description: crea un nuevo usuario
 *     parameters:
 *     - name: user
 *       description: datos que representan al nuevo usuario
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           surname:
 *             type: string
 *           email:
 *             type: string
 *           residence:
 *             type: string
 *           password:
 *             type: string
 *           avatar:
 *             type: string
 *           role:
 *             type: string
 *             enum: [user, admin]
 *         required:
 *           - name
 *           - surname
 *           - email
 *           - password
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *
 */
api.post('/user', UserController.create);
/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     tags:
 *     - user
 *     description: Get all Employee
 *     parameters:
 *     - name: id
 *       description: Create an new employee
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.get('/user/:id', UserController.findById);
/**
 * @swagger
 * /api/email/{email}:
 *   get:
 *     tags:
 *     - user
 *     description: busca un usuario cuyo email coincide con el pasado por parámetro
 *     parameters:
 *     - name: email
 *       description: email del usuario que buscar
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.get('/user/email/:email', UserController.findByEmail);
/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *     - user
 *     description: devuelve un único usuario
 *     parameters:
 *     - name: page
 *       description: página a la que accede la petición
 *       in: query
 *       required: false
 *       schema:
 *         type: String
 *     - name: limit
 *       description: cantidad de recursos máximos devueltos
 *       in: query
 *       required: false
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.get('/user', UserController.findAll);
/**
 * @swagger
 * /api/user{id}:
 *   delete:
 *     tags:
 *     - user
 *     description: Borra un usuario cuya id coincide con la pasada po parámetro
 *     parameters:
 *     - name: id
 *       description: ObjectID del usuario a borrar
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.delete('/user/:id', login, UserController.deleteById);
/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     tags:
 *     - user
 *     description: Borra un usuario cuya id coincide con la pasada po parámetro
 *     parameters:
 *     - name: id
 *       description: ObjectID del usuario a borrar
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.put('/user/:id', login, UserController.updateById);
/**
 * @swagger
 * /api/user/{id}:
 *   patch:
 *     tags:
 *     - user
 *     description: actualiza el avatar del usuario cuya id coincide con la pasada po parámetro
 *     parameters:
 *     - name: id
 *       description: ObjectID del usuario a borrar
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     - name: token
 *       description: token que autentica al usuario que realiza la petición
 *       in: headers
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.patch('/user/:id', [login, upload], UserController.uploadAvatar);
api.get('/avatar/:name', UserController.getAvatar);
/**
 * @swagger
 * /api/user/{id}:
 *   patch:
 *     tags:
 *     - user
 *     description: Borra un usuario cuya id coincide con la pasada po parámetro
 *     parameters:
 *     - name: id
 *       description: ObjectID del usuario a borrar
 *       in: path
 *       required: true
 *       schema:
 *         type: String
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *
 */
api.patch('/owner/:id', UserController.updateOwnerHousing);

module.exports = api;