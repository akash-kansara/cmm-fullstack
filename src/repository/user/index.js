const lo = require('lodash');

const db = require('../../db/mysql');

const table = 'user_mst';

async function createUser(user) {
  try {
    let result = await db.table(table)
      .insert(user);
    return Promise.resolve('User created');
  } catch (err) {
    console.error(err);
    return Promise.reject(`Could'nt create user`);
  }
}

async function updateUser(user) {
  try {
    let result = await db.table(table)
      .where({ id: lo.get(user, 'id') })
      .update(user);
    return Promise.resolve('User updated');
  } catch (err) {
    console.error(err);
    return Promise.reject(`Could'nt update user`);
  }
}

async function getUsers(limit = 1000, offset = 0) {
  try {
    let result = await db.table(table)
      .limit(limit)
      .offset(offset)
      .select();
    return Promise.resolve(result);
  } catch (err) {
    console.error(err);
    return Promise.reject(`Could'nt get users`);
  }
}

module.exports = { createUser, updateUser, getUsers };