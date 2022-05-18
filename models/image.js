const mongoose = require('mongoose');

const { mongoosePaginate } = require('../config/database');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        apiUri: {
            type: String,
            required: true
        },
        housing: {
            type: mongoose.Types.ObjectId,
            ref: 'Housing',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            required: true
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

ImageSchema.virtual('comments', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'image'
    }
);

ImageSchema.plugin(mongoosePaginate);

const Image = new mongoose.model('Image', ImageSchema, 'images');

module.exports = { Image };
