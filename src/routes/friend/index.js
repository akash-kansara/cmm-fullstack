const lo = require('lodash');
const { Router } = require('express');
const Joi = require('@hapi/joi');

// const ctrl = require('../../controller/friend');

const router = Router();
const GetQuery = Joi.object().keys({
  user_id: Joi.string().uuid({ version: 'uuidv4' }).required(),
  level: Joi.number().min(1).max(2).required()
});

// router.get('/', async (req, res) => {
//   try {
//     let result = await ctrl.getUsers(
//       lo.get(req.query, 'limit'),
//       lo.get(req.query, 'offset'),
//       lo.get(req.query, 'name')
//     );
//     res.send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     let result = await ctrl.createUser(req.body);
//     res.send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;