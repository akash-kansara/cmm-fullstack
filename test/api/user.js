const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../src');

const { expect } = chai;
const testData = require('../test-data');

chai.use(chaiHttp);

describe('user api tests', () => {
  it('should add a user', (done) => {
    chai.request(server)
      .post('/user')
      .send(testData.user1)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should get added user', (done) => {
    chai.request(server)
      .get('/user')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.length).to.be.gte(1);
        done();
      });
  });
});