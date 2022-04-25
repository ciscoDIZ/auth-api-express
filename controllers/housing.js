"use strict";

const { Housing } = require('../models/housing');
const { Address } = require('../models/address');
const getOptions = require('../utils/pagination');
const { internalServerError, notFound, badRequest } = require('../error');

const create = async (req, res) => {
  const { body } = req;
  if (!body) {
      res.status(400).send({msg: 'error en la petición'});
      return;
  }
  const { address, price, surface } = req.body;

  try {
      const addressEntity = new Address(address);
      const savedAddress = await addressEntity.save();

      const housing = {
          price,
          surface,
          address: savedAddress._id
      }
      const housingEntity = new Housing(housing);
      const savedHousing = await housingEntity.save();
      await savedHousing.populate("address")
      res.status(201).send(savedHousing);
  }catch (err) {
      res.status(400).send(badRequest(err));
  }
}

const findById = async (req, res) => {
    const { id } = req.params;
    try{
        const responseData = await Housing
            .findOne(id)
            .populate('address', {
                    _id:0,
                    __v:0
                }
            );
        res.status(200).send(responseData);
    }catch (err) {
        res.status(404).send(notFound('Housing', id));
    }
};

const findAll = async (req, res) => {
  try {
      const { query } = req;
      const { paginate } = Housing;

      const options = getOptions({
          query,
          paginate,
          populate: [
              {
                path: 'address',
                select: {
                     _id: 0,
                    __v: 0
                },
              },
              {
                  path: 'owner',
                  select: ['name', 'surname']
              },
              {
                  path: 'images',
                  select: ['apiUri', 'title'],
                  options: {
                      limit: 10
                  }
              },
              {
                  path: 'comments',
                  select: ['title', 'author', 'content', 'createdAt'],
                  model: 'Comment',
                  options:{
                      limit: 10,
                      sort: {createdAt: 1}
                  },
                  populate: {
                      path: 'author'
                  }
              }
          ],
          select: {
              __v: 0
          }
      });
      const housings = await Housing.paginate({}, options)

      if(!housings) {
          res.status(404).send({});
          return;
      }
      res.status(200).send(housings);
  } catch (e) {
      res.status(500).send({msg: e});
  }
}

const update = async (req, res) => {
  try {
      const { id, data } = req.body;
      const updatedHousing = await Housing.findByIdAndUpdate(id, data, { new: true });

      if (!updatedHousing) {
          res.status(404).send(notFound('Housing', id));
          return;
      }
      res.status(200).send(updatedHousing);
  }catch (error) {
      res.status(400).send(internalServerError(error))
  }
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await Housing.findByIdAndDelete(id);

      if (user) {
          const {address} = user;
          await Address.findByIdAndDelete(address);
      }else {
          res.status(404).send(notFound("Housing", id));
          return;
      }
      res.status(200).send(user);
  }catch (error) {
      res.status(500).send(internalServerError(error))
  }
}

module.exports = {
    create,
    findById,
    findAll,
    update,
    deleteById
};
