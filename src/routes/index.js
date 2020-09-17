const { Router } = require('express');

const user = require('./user');
const friends = require('./friends');

const router = Router();

router.use('/user', user);
router.use('/friends', friends);

module.exports = router;