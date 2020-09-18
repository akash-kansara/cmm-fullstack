const Joi = require('@hapi/joi');

const Friend = Joi.object().keys({
  id: Joi.string().uuid({ version:'uuidv4' }).required(),
  user_id: Joi.string().uuid({ version:'uuidv4' }).required(),
  friend_id: Joi.string().uuid({ version:'uuidv4' }).required()
});

module.exports = Friend;