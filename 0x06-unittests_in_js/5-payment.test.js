const sinon = require('sinon');
const { describe, it, beforeEach, afterEach } = require('mocha')
const assert = require('assert')
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils')


describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let consoleSpy;
  beforeEach(() => {
    // Spy on calculateNumber method of Utils
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log')
  });

  afterEach(() => {
    // Restore all the original function
    calculateNumberSpy.restore();
    consoleSpy.restore();
  });

  it('Checks that sendPaymentRequestToApi is called', () => {
    // Call sendPaymentRequestToApi to check if it inherits/calls the Utils.calculateNumber
    sendPaymentRequestToApi(100, 20)
    // check if Utils.calculateNumber was called once with correct args
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
    // Verify the console is called onec
    assert(consoleSpy.calledOnceWithExactly('The total is: 120'));
  });

    it('Checks that sendPaymentRequestToApi is called', () => {
      // Call sendPaymentRequestToApi to check if it inherits/calls the Utils.calculateNumber
      sendPaymentRequestToApi(10, 10)
      // check if Utils.calculateNumber was called once with correct args
      assert(calculateNumberSpy.calledOnceWithExactly('SUM', 10, 10));
      // Verify the console is called onec
      assert(consoleSpy.calledOnceWithExactly('The total is: 20'));
    })
});



