const lo = require('lodash');

const db = require('../../db');

const table = 'friends';

async function createFriend(friend) {
  try {
    let result = await db.table(table)
      .insert(friend);
    return Promise.resolve('Friend created');
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't create friend`);
  }
}

async function getFriends(user_id, level) {
  try {
    let query = db.table(table);
    if (level === 2)
      query = query
        .where(`${table}.${user_id}`, user_id);
    else
        query = query.where({ user_id })
    if (typeof limit === 'number')
      query = query.limit(limit);
    if (typeof offset === 'number')
      query = query.offset(offset)
    let result = await query.select();
    return Promise.resolve(result);
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't get users`);
  }
}

module.exports = { createFriend, getFriends };