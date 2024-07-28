const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
const app = require('./api')

chai.use(chaiHttp);

describe('Index page', () => {
  it('Check the response status code', (done) => {
    chai.request(app)
    .get('/')
    .end((err, resp) => {
      chai.expect(resp.statusCode).to.equal(200);
      done();
    });
  });

  it('Check the response content', (done) => {
    chai.request(app)
    .get('/')
    .end((err, resp) => {
      chai.expect(resp.text).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Check the Content Type', (done) => {
    chai.request(app)
    .get('/')
    .end((err, resp) => {
      assert.equal(resp.header['content-type'], 'text/html; charset=utf-8');
      done();
    });
  });

  it('Check the Content Length', (done) => {
    chai.request(app)
    .get('/')
    .end((err, resp) => {
      assert.equal(resp.header['content-length'], '29');
      done();
    });
  });

  it('Check the web Server', (done) => {
    chai.request(app)
    .get('/')
    .end((err, resp) => {
      assert.equal(resp.header['x-powered-by'], 'Express');
      done();
    });
  });
})
