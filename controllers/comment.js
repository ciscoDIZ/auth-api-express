"use strict";

const {Comment} = require('../models/comment');
const {internalServerError, notFound, badRequest} = require('../error');
const getOptions = require('../utils/pagination');
const mongoose = require("mongoose");
const {User} = require("../models/user");
const {auth} = require("../middlewares");

const create = async (req, res) => {
    const {body} = req;
    const comment = new Comment(body);
    try {
        const createdComment = await comment.save();
        const populatedComment = await Comment.findById(createdComment.id).populate({path: 'author'});
        res.status(201).send(populatedComment);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const findAll = async (req, res) => {
    const {housing, image, author, page} = req.query;
    const query = {};
    if (housing) {
        query.housing =housing;
    }
    if (image) {
        query.image = image;
    }
    if (author) {
        query.author = author;
    }
    if (page) {
        query.page = page;
    }
    const {paginate} = Comment;
    const options = getOptions({
        query, paginate, populate: {
            path: 'author'
        }
    });
    try {
        const comments = await Comment.paginate(query, options);
        if (!comments) {
            res.status(404).send(notFound('Comment'));
            return;
        }
        res.status(200).send(comments);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const findById = async (req, res) => {
    const {id} = req.params;

    try {
        const comment = await Comment.findById(id).populate({path: 'author'});

        if (!comment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }

        res.status(200).send(comment)
    } catch (e) {
        res.status(500).send(internalServerError(e))
    }
};

const deleteById = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }
        res.status(200).send(deletedComment);
    } catch (e) {
        res.status(500).send(internalServerError(e))
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    const updatedData = {title, content};
    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, updatedData, {new: true});
        if (!updatedComment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }
        res.status(201).send(updatedComment);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
}

const addLike = async (req, res) => {
    const {id} = req.params;
    const {like} = req.body;
    try {
        const comment = await Comment.findById(id).populate({path: 'author'});

        if (!comment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }

        const user = await User.findById(like);
        const isLiked = comment.likes
            .map(like => like.toString())
            .find((value) => value === user.id);
        if (isLiked) {
            res.status(400).send(badRequest(''))
            return;
        }
        comment.likes.push(user.id);
        await comment.save();
        res.status(201).send(comment);
    } catch (e) {
        res.status(500).send(internalServerError(e))
    }
};

const removeLike = async (req, res) => {
    const {id} = req.params;
    const {author} = req.body;
    try {
        const user = await User.findById(author);
        const comment = await Comment.findById(id).populate({path: 'author'});
        if (!user) {
            res.status(404).send(notFound('User', author));
            return;
        }
        if (!comment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }
        const like = comment.likes
            .map((value) => value.toString())
            .find((id) => id === author);
        if (like) {
            comment.likes = comment.likes.map(m => m.toString()).filter(f => f !== user.id)
            await comment.save();
            console.log(comment.likes)
            res.status(200).send(comment);
        }
    } catch (e) {
        res.status(500).send(internalServerError(e))
    }

};

module.exports = {
    create,
    findAll,
    findById,
    deleteById,
    update,
    addLike,
    removeLike
};
