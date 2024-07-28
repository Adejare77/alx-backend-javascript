const sinon = require('sinon');
const { describe, it } = require('mocha')
const assert = require('assert')
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils')


describe('sendPaymentRequestToApi', () => {
  it('Checks that sendPaymentRequestToApi is called', () => {
    // stub the calculateNumber method of Utils to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
    calculateNumberStub.returns(10);

    // Spy on Console.log
    const consoleSpy = sinon.spy(console, 'log')

    // Call sendPaymentRequestToApi to check if it inherits/calls the Utils.calculateNumber
    sendPaymentRequestToApi(100, 20)

    // check if Utils.calculateNumber was called once with correct args
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Verify the return value of sendPaymentRequestToApi from console
    assert(consoleSpy.calledOnceWithExactly('The total is: 10'));

    // Restore all the original function
    calculateNumberStub.restore()
    consoleSpy.restore();
  });
});



