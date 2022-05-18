const mongoose = require("mongoose");

const {mongoosePaginate} = require('../config/database');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
        title: {type: String, default: 'no title'},
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        housing: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Housing'
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
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

CommentSchema.plugin(mongoosePaginate);

const Comment = new mongoose.model('Comment', CommentSchema, 'comments');

module.exports = { Comment };
