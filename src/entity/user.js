const Joi = require('@hapi/joi');

const User = Joi.object().keys({
  id: Joi.string().uuid({ version:'uuidv4' }).required(),
  firstname: Joi.string().required().min(2).max(50),
  lastname: Joi.string().required().min(2).max(50),
  avatar: Joi.string().uri().max(200).allow(null).optional()
});

module.exports = User;