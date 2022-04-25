"use strict";

const { Comment } = require('../models/comment');
const { internalServerError, notFound } = require('../error');
const getOptions  = require('../utils/pagination');

const create = async (req, res) => {
    const { body } = req;
    const comment = new Comment(body);
    try {
        const createdComment = await comment.save();
        res.status(201).send(createdComment);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const findAll = async (req, res) => {
    const { query } = req;
    const { paginate } = Comment;
    const options = getOptions({query, paginate});
    try {
        const comments = await Comment.paginate({}, options);
        if (!comments) {
            res.status(404).send(notFound('Comment'));
            return;
        }
        res.status(200).send(comments);
    }catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const findById = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findOne({ id });

        if (!comment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }

        res.status(200).send(comment)
    }catch (e) {
        res.status(500).send(internalServerError(e))
    }
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            res.status(404).send(notFound('Comment', id));
            return;
        }
        res.status(200).send(deletedComment);
    }catch (e) {
        res.status(500).send(internalServerError(e))
    }
}

module.exports = {
    create,
    findAll,
    findById,
    deleteById
};
