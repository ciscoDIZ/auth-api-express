"use strict";

const mongoose = require('mongoose');
const mongoosePaginate = require('../config/database');

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
    }
);

UserSchema.plugin(mongoosePaginate)

let User = new mongoose.model('User', UserSchema);

module.exports =  User;
