const db = require('../../db');

const table = 'friends', user_table = 'user_mst';

async function checkCreated(user_id, friend_id) {
  try {
    let result = await db.table(table)
      .where(function() {
        this.where(`user_id`, user_id).andWhere(`friend_id`, friend_id)
      })
      .orWhere(function() {
        this.where(`friend_id`, friend_id).andWhere(`friend_id`, user_id)
      })
      .select();
    if(result.length > 0)
      return Promise.reject('Users are already friends')
    else
      return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't check`);
  }
}

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
    let query = db.table(user_table), result = [];
    if (level === 2) {
      query
        .join(table, `${user_table}.id`, `=`, `${table}.friend_id`)
        .whereIn(`${table}.user_id`, function () {
          this.table(table).select(`friend_id`).where(`user_id`, user_id);
        });
      result = await query.select(
        db.ref(`${user_table}.id`, 'id'),
        db.ref(`${user_table}.firstname`, 'firstname'),
        db.ref(`${user_table}.lastname`, 'lastname'),
        db.ref(`${user_table}.avatar`, 'avatar'),
      );
    }
    else if (level === 1) {
      query
        .join(table, `${user_table}.id`, `=`, `${table}.friend_id`)
        .where(`${table}.user_id`, user_id);
      result = await query.select(
        db.ref(`${user_table}.id`, 'id'),
        db.ref(`${user_table}.firstname`, 'firstname'),
        db.ref(`${user_table}.lastname`, 'lastname'),
        db.ref(`${user_table}.avatar`, 'avatar'),
      )
    }
    return Promise.resolve(result);
  } catch (err) {
    console.error(err);
    return Promise.reject(`Couldn't get users`);
  }
}

module.exports = { checkCreated, createFriend, getFriends };