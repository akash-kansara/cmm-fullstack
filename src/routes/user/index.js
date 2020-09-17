const lo = require('lodash');
const { Router } = require('express');

const router = Router();

const ctrl = require('../../controller/user');

router.get('/', async (req, res) => {
  try {
    let result = await ctrl.getUsers(lo.get(req.query, 'limit'), lo.get(req.query, 'offset'));
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let result = await ctrl.createUser(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/', async (req, res) => {
  try {
    let result = await ctrl.updateUser(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;