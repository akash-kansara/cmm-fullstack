require('./env');

const express = require('express');
const bodyParser = require('body-parser');

const swagger = require('./swagger');
const routes = require('./routes');

const app = express();

const PORT = process.env['APP.PORT'] || 3000;

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/swagger', swagger);
app.use(routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));