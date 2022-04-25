"use strict";

const mongoose = require('mongoose');
const { mongoosePaginate } = require('../config/database');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    road: {
        type: String,
        enum: ['street', 'avenue', 'road', 'square'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    floor: {
        type: String
    },
    ladder: {
        type: String
    },
});

AddressSchema.plugin(mongoosePaginate);

const Address = new mongoose.model('Address', AddressSchema);

module.exports = { Address };
