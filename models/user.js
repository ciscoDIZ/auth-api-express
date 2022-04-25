"use strict";

const mongoose = require('mongoose');
const { mongoosePaginate } = require('../config/database');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {unique: true}
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
          type: String,
          required: false
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        lastCacheAt: {
            type: Date,
            required:true,
            default: Date.now
        },
        activated: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

UserSchema.plugin(mongoosePaginate);

UserSchema.virtual('housings',{
    ref: 'Housing',
    localField: '_id',
    foreignField: 'owner'
});

UserSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'author'
});

const User = new mongoose.model('User', UserSchema);

module.exports = { User };
