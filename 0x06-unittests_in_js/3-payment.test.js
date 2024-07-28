const sinon = require('sinon');
const { describe, it } = require('mocha')
const assert = require('assert')
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')


describe('sendPaymentRequestToApi', () => {
  it('Checks that sendPaymentRequestToApi is called', () => {
    // create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber')

    // Call sendPaymentRequestToApi to check if it inherits/calls the Utils.calculateNumber
    sendPaymentRequestToApi(100, 20);

    // check if Utils.calculateNumber was called once with correct args
    assert(spy.calledOnceWithExactly('SUM', 100, 20));

    // Restore the original function
    spy.restore();
  });
});



