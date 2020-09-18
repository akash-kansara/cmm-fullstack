const lo = require('lodash');
const { Router } = require('express');
const Joi = require('@hapi/joi');

const validate = require('../../core/validation');
const ctrl = require('../../controller/friend');

const router = Router();
const GetQuery = Joi.object().keys({
  user_id: Joi.string().uuid({ version: 'uuidv4' }).required(),
  level: Joi.number().integer().min(1).max(2).required()
});

router.get('/', async (req, res) => {
  try {
    let { error, value } = validate(
      {
        user_id: lo.get(req.query, 'user_id'),
        level: parseInt(lo.get(req.query, 'level'))
      },
      GetQuery
    );
    if (error) {
      res.status(500).send(error);
    }
    else {
      let result = await ctrl.getFriends(value.user_id, value.level);
      res.send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let result = await ctrl.createFriend(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;