"use strict";

const mongoose = require('mongoose');
const { mongoosePaginate } = require('../config/database');


const Schema = mongoose.Schema;

const HousingSchema = new Schema(
    {
        address: {
            type: mongoose.Types.ObjectId,
            ref: "Address",
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        surface: {
            type: Number,
            required: true
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

HousingSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'housing'
});
HousingSchema.virtual("comments", {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'housing'
});
HousingSchema.plugin(mongoosePaginate);

const Housing = new mongoose.model("Housing", HousingSchema);

module.exports = { Housing };
