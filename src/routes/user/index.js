const lo = require('lodash');
const { Router } = require('express');

const ctrl = require('../../controller/user');

const router = Router();

router.get('/', async (req, res) => {
  try {
    let result = await ctrl.getUsers(
      parseInt(lo.get(req.query, 'limit')),
      parseInt(lo.get(req.query, 'offset')),
      parseInt(lo.get(req.query, 'name'))
    );
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