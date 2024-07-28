const { describe, it } = require('mocha');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Checks if the response on success is correct', (done) => {
    const data = getPaymentTokenFromAPI(true);

    data.then((msg) => {
      assert.deepEqual(msg, {data: 'Successful response from the API'});
      done();
    });
  });
});
