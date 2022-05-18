"use strict";

const express = require('express');
const HousingController = require('../controllers/housing');
const {login, upload} = require("../middlewares");

const api = express.Router();

api.post('/housing', login, HousingController.create);
api.get("/housing/:id", HousingController.findById);
api.get('/housing', HousingController.findAll);
api.put('/housing', login, HousingController.update);
api.delete('/housing/:id', login, HousingController.deleteById);
api.patch('/housing/:id', [login, upload], HousingController.uploadMainImage);
api.get('/housing/owner/:owner', HousingController.findByOwner);
api.patch('/housing/like/:id', login,HousingController.addLike);
api.patch('/housing/like/remove/:id', login, HousingController.removeLike)

module.exports = api;
