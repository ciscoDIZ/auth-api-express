"use strict";

const fs = require('fs');
const {unlink} = require('fs/promises');
const path = require('path');

const { Image } = require('../models/image');
const { persist } = require('../services/image');
const getOptions = require('../utils/pagination');
const {badRequest, internalServerError, notFound} = require('../error');


async function getFileName(file, res) {
    const [, fileName] = file.path.split('/');
    const [, extension] = fileName.split('.');
    if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
        await unlink(file.path);
        res.status(400).send(badRequest('la extensión debe ser .png o .jpg'));
        return undefined;
    }
    return fileName;
}

const create = async (req, res) => {
    const { file } = req.files;
    const { title, housing } = req.body;
    const { protocol, headers } = req;

    if(!file) {
        res.status(400).send(badRequest('obligatorio subir ficehero'));
        return;
    }
    if (!title) {
        res.status(400).send(badRequest('obligatorio título'));
        return;
    }
    if (!housing) {
        res.status(400).send(badRequest('obligatorio relacionar con vivienda'));
        return;
    }
    const fileName = await getFileName(file, res);
    if (!fileName) {
        return;
    }
    const apiUri = `${protocol}://${headers.host}/api/image/${fileName}`;
    const imageData = {
        title,
        housing,
        apiUri
    }
    try {
        const image = await persist(imageData);
        res.status(200).send(image);
    }catch (e) {
        res.status(500).send(internalServerError(e));
    }

};

const findByName = async (req, res) => {
  const { name } = req.params;
  const filePath = `./uploads/${name}`;
  fs.stat(filePath, (err) => {
      if (err) {
          res.status(404).send(notFound('Image'));
          return;
      }
      res.sendFile(path.resolve(filePath));
  })
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { file } = req.files;
  const { protocol, headers } = req;
  try {
      if (!file) {
          res.status(400).send(badRequest('se debe subir fichero'));
          return;
      }
      const fileName = getFileName(file, res);
      const apiUri = `${protocol}://${headers.host}/api/image/${fileName}`;
      const imageData = {
          title,
          apiUri
      }
      const updatedImage = await Image.findByIdAndUpdate(id, imageData, {new: true});
      if (!updatedImage) {
          res.status(404).send(notFound("Image", id));
          return;
      }
      res.status(200).send(updatedImage);
  }catch (e) {
      if (e.name === 'CastError') {
          res.status(400).send(badRequest(e))
          return;
      }
      res.status(500).send(internalServerError(e));
  }
};

const findById = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await Image.findById(id);
        if (!image) {
            res.status(404).send(notFound('Image', id));
            return;
        }
        res.status(200).send(image);
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await Image.findByIdAndDelete(id);
        const [ , , , , , fileName ] = image.apiUri.split('/');
        const absoluteFilePath = path.resolve(`./uploads/${fileName}`);
        await unlink(absoluteFilePath);
        if (!image) {
            res.status(404).send(notFound('Image', id));
            return;
        }

        res.status(200).send(image);
    }catch (e) {
        res.status(500).send(internalServerError(e))
    }
};

const findAll = async (req, res) => {
    const {housing, page, limit} = req.query;
    const filter = (housing) ? {housing} : {};
    const { paginate } = Image;
    const query = {
        page,
        limit,
        order: {
            createdAd: -1
        }
    }
    const options = getOptions({query, paginate});
    console.log(req.query)
    try {
        const images = await Image.paginate(filter,options);
        if (!images) {
            res.status(404).send(notFound('Image'));
            return;
        }
        res.status(200).send(images);
    }catch (e) {
        res.status(500).send(internalServerError(e))
    }
}

module.exports = {
    create,
    findByName,
    update,
    findById,
    deleteById,
    findAll
};
