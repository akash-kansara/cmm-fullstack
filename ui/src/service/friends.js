import superagent from 'superagent';

const serverUrl = process.env['APP.FULL_URL'];

function createFriend(friend) {
  return new Promise((resolve, reject) => {
    superagent
      .post(serverUrl + `/friend`)
      .send(friend)
      .end((err, res) => {
        if (err)
          return reject(`Couldn't create friend`)
        else
          return resolve(res.text);
      })
  });
}

function getFriends(user_id, level) {
  return new Promise((resolve, reject) => {
    superagent.get(serverUrl + `/friend`)
      .query({ user_id, level })
      .end((err, res) => {
        if (err)
          return reject(`Couldn't get friends`)
        else
          return resolve(res.body);
      })
  });
}

export { createFriend, getFriends };