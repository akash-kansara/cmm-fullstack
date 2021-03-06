const lo = require('lodash');
const { off } = require('superagent');

const db = require('../../db');

const table = 'user_mst';

async function createUser(user) {
  try {
    let result = await db.table(table)
      .insert(user);
    return Promise.resolve('User created');
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't create user`);
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
    return Promise.reject(`Couldn't update user`);
  }
}

async function getUsers(limit, offset, name) {
  try {
    let query = db.table(table);
    if (typeof name === 'string' && name.length > 0)
      query
        .where(function () {
          this.where('firstname', 'like', `%${name}%`)
            .orWhere('lastname', 'like', `%${name}%`)
        });
    if (!isNaN(limit))
      query.limit(limit);
    if (!isNaN(offset))
      query.offset(offset);
    let result = await query.select();
    return Promise.resolve(result);
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't get users`);
  }
}

module.exports = { createUser, updateUser, getUsers };