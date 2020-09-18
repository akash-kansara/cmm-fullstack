const Knex = require('knex');

const config = {
  client: 'mysql',
  connection: {
    database: process.env['MYSQL.DATABASE'],
    user: process.env['MYSQL.USER'],
    password: process.env['MYSQL.PASSWORD']
  }
}

const db = Knex(config);

module.exports = db;