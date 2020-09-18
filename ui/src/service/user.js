import superagent from 'superagent';

const serverUrl = process.env['APP.FULL_URL'];

function createUser(user) {
  return new Promise((resolve, reject) => {
    superagent
      .post(serverUrl + `/user`)
      .send(user)
      .end((err, res) => {
        if (err)
          return reject(`Couldn't create user`)
        else
          return resolve(res.text);
      })
  });
}

function getUser(limit, offset, name) {
  return new Promise((resolve, reject) => {
    superagent.get(serverUrl + `/user`)
      .query({ limit, offset, name })
      .end((err, res) => {
        if (err)
          return reject(`Couldn't get users`)
        else
          return resolve(res.body);
      })
  });
}

function updateUser(user) {
  return new Promise((resolve, reject) => {
    superagent
      .put(serverUrl + `/user`)
      .send(user)
      .end((err, res) => {
        if (err)
          return reject(`Couldn't update user`)
        else
          return resolve(res.text);
      })
  });
}

export { createUser, getUser, updateUser };