"use strict";

const express = require('express');
const HousingController = require('../controllers/housing');
const {auth} = require("../middlewares");

const api = express.Router();

api.post('/housing', auth, HousingController.create);
api.get("/housing/:id", HousingController.findById);
api.get('/housing', HousingController.findAll);
api.put('/housing', auth, HousingController.update);
api.delete('/housing/:id', auth, HousingController.deleteById);

module.exports = api;
