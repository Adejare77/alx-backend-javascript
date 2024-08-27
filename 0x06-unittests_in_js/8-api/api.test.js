const { describe, it } = require('mocha');
const chai = require('chai');
const request = require('request');
const app = require('./api');
const { response } = require('express');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Check the response status code', (done) => {
    request(url, (err, response) => {
      chai.expect(response.statusCode).to.equal(200);
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
      chai.expect(resp.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('Check the Content Length', (done) => {
    request(url, (err, resp) => {
      chai.expect(resp.headers['content-length']).to.equal('29');
      done();
    });
  });

  it('Check the web Server', (done) => {
    request(url, (err, resp) => {
      chai.expect(resp.headers['x-powered-by']).to.equal('Express');
      done();
    });
  });
})
