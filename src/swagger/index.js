const { Router } = require('express');
const { set } = require('lodash');
const swaggerUi = require('swagger-ui-express');

const router = Router();

const swaggerDoc = require('./swagger.json');

set(swaggerDoc, 'host', `${process.env['APP.HOST']}:${process.env['APP.PORT']}`);
set(swaggerDoc, 'schemes', [process.env['APP.SCHEME']]);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
router.use('/api-docs.json', (req, res) => { res.json(swaggerDoc).end(); });

module.exports = router;