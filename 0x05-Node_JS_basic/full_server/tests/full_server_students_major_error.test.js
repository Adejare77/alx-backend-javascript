import app from './server';

const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './blabla.csv';

chai.use(chaiHttp);
chai.should();

describe('full HTTP server using Express', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () => new Promise((done) => {
      chai.request(app)
        .get('/students/SWE')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Cannot load the database');
          done();
        });
    }));
  });
});
