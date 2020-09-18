const uuid = require('uuid').v4;
const lo = require('lodash');

const model = require('../../entity/friend');
const validate = require('../../core/validation');
const repo = require('../../repository/friend');

async function createFriend(friend) {
  try {
    lo.set(friend, 'id', uuid());
    let { error, value } = validate(friend, model);
    if (error)
      return Promise.reject(error);
    else {
      await repo.checkCreated(friend.user_id, friend.friend_id);
      let _user = { ...value };
      let _friend = { ...value, id: uuid() };
      _friend.user_id = _user.friend_id;
      _friend.friend_id = _user.user_id;
      return await repo.createFriend([
        _user,
        _friend
      ]);
    }
  } catch (err) {
    console.error(err);
    return Promise.reject(
      typeof err === 'string'
      ? err
      : `Couldn't create friend`
    );
  }
}

async function getFriends(user_id, level) {
  try {
    return await repo.getFriends(user_id, level);
  } catch (err) {
    console.error(err);
    return Promise.reject(
      typeof err === 'string'
      ? err
      : `Couldn't get friends`
    );
  }
}

module.exports = { createFriend, getFriends };