"use strict";

const express = require('express');
const AuthController = require('../controllers/auth');
const {auth, login} = require("../middlewares");

const api = express.Router();
/**
 * @swagger
 * /api/auth:
 *   patch:
 *     tags:
 *     - auth
 *     description: autentica usuario ya registrado
 *     parameters:
 *     - name: payload
 *       description: objeto el cual contiene los credenciales del usuario a autenticar
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           payload:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *
 */
api.patch('/auth', AuthController.login);
/**
 * @swagger
 * /api/auth/{id}:
 *   patch:
 *     tags:
 *     - auth
 *     description: activa cuenta de usuario ya registrado
 *     parameters:
 *     - name: id
 *       in: param
 *       description: id del usuario el cual se pretende activar
 */
api.patch('/auth/:id', AuthController.activate);
/**
 * @swagger
 * /api/auth:
 *   put:
 *     tags:
 *     - auth
 *     description: autentica usuario ya registrado
 *     parameters:
 *     - name: credentials
 *       description: objeto el cual contiene los credenciales del usuario a autenticar
 *       in: body
 *       schema:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           password:
 *             type: string
 *
 *
 *
 *
 */
api.put('/auth', login, AuthController.verifyPassword);

module.exports = api;