require('../../src/env');

const ctrl = require('../../src/controller/user');

const testData = require('../test-data');

describe('user controller tests', () => {
  before((done) => {
    // Delay for MySQL connection
    setTimeout(done, 2000);
  });
  it('should add a user', (done) => {
    ctrl.createUser(testData.user2)
      .then((result) => done())
      .catch((err) => done(err))
  });
});