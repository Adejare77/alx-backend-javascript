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


  it('should include the correct parameter', (done) => {
    const param = 124
    request(`http://localhost:7865/cart/${124}`, (err, resp, body) => {
      chai.expect(body).to.contain(`Payment methods for cart 124`)
      done()
    })
  })
})
