const uuid = require('uuid').v4;
const lo = require('lodash');

const model = require('../../entity/user');
const validate = require('../../core/validation');
const repo = require('../../repository/user');

async function createUser(user) {
  try {
    lo.set(user, 'id', uuid());
    let { error, value } = validate(user, model);
    if (error)
      return Promise.reject(error);
    else {
      return await repo.createUser(value);
    }
  } catch (err) {
    console.error(err);return Promise.reject(
      typeof err === 'string'
      ? err
      : `Couldn't create user`
    );
  }
}

async function getUsers(limit, offset, name) {
  try {
      return await repo.getUsers(limit, offset, name);
  } catch (err) {
    console.error(err);return Promise.reject(
      typeof err === 'string'
      ? err
      : `Couldn't get users`
    );
  }
}

async function updateUser(user) {
  try {
    let { error, value } = validate(user, model);
    if (error)
      return Promise.reject(error);
    else {
      return await repo.updateUser(value);
    }
  } catch (err) {
    console.error(err);return Promise.reject(
      typeof err === 'string'
      ? err
      : `Couldn't update user`
    );
  }
}

module.exports = { createUser, getUsers, updateUser };