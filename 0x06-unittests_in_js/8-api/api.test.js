const { describe, it } = require('mocha');
const chai = require('chai');
const request = require('request');
const assert = require('assert');
const app = require('./api');
const { response } = require('express');

// chai.use(chaiHttp);

// describe('Index page', () => {
//   it('Check the response status code', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, resp) => {
//       chai.expect(resp.statusCode).to.equal(200);
//       done();
//     });
//   });

//   it('Check the response content', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, resp) => {
//       chai.expect(resp.text).to.equal('Welcome to the payment system');
//       done();
//     });
//   });

//   it('Check the Content Type', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, resp) => {
//       assert.equal(resp.header['content-type'], 'text/html; charset=utf-8');
//       done();
//     });
//   });

//   it('Check the Content Length', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, resp) => {
//       assert.equal(resp.header['content-length'], '29');
//       done();
//     });
//   });

//   it('Check the web Server', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, resp) => {
//       assert.equal(resp.header['x-powered-by'], 'Express');
//       done();
//     });
//   });
// })


describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Check the response status code', (done) => {
    request(url, (err, response) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it('Check the response content', (done) => {
    request(url, (err, response) => {
      chai.expect(response.body).to.contain('Welcome to the payment system');
      done();
    })
  });

  it('Check the Content Type', (done) => {
    request(url, (err, resp) => {
      assert.equal(resp.headers['content-type'], 'text/html; charset=utf-8');
      done();
    });
  });

  it('Check the Content Length', (done) => {
    request(url, (err, resp) => {
      assert.equal(resp.headers['content-length'], '29');
      done();
    });
  });

  it('Check the web Server', (done) => {
    request(url, (err, resp) => {
      assert.equal(resp.headers['x-powered-by'], 'Express');
      done();
    });
  });
})
