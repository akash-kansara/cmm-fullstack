const dotenv = require('dotenv');
const { join } = require('path');

const result = dotenv.config({
  path: join(__dirname, '..', '..', `.env`)
});

if (result.error) { throw result.error; }