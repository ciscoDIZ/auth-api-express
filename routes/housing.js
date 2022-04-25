"use strict";

const express = require('express');
const HousingController = require('../controllers/housing');

const api = express.Router();

api.post('/housing', HousingController.create);
api.get("/housing/:id", HousingController.findById);
api.get('/housing', HousingController.findAll);
api.put('/housing', HousingController.update);
api.delete('/housing/:id', HousingController.deleteById);

module.exports = api;
