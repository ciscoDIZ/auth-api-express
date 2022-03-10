const mongoose = require('mongoose');
const mongoosePaginate = require('../config/database');
const User = require('./user');

const Schema = mongoose.Schema;

const HousingSchema = new Schema(
    {
        address: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        owner: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: User
        },
        tenant: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: User
        }
    }
);

HousingSchema.plugin(mongoosePaginate);

const Housing = new HousingSchema('Housing', HousingSchema);

module.exports = Housing;
