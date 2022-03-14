const mongoose = require('mongoose');
const mongoosePaginate = require('../config/database');


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
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }
);

HousingSchema.plugin(mongoosePaginate);

const Housing = new mongoose.model("Housing", HousingSchema);

module.exports = Housing;
