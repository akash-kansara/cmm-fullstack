const DotEnvWebpack = require('dotenv-webpack');
const join = require('path').join;

module.exports = new DotEnvWebpack({
  path: join(__dirname, '..', '..', `.env`)
});