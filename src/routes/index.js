const { Router } = require('express');

const user = require('./user');
const friend = require('./friend');

const router = Router();

router.use('/user', user);
router.use('/friend', friend);

module.exports = router;