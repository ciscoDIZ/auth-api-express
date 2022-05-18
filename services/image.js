"use strict";

const {Image} = require("../models/image");

const persist = async (imageData) => {
    const image = new Image(imageData);
    await image.save();
    return image;
};


module.exports = { persist }
