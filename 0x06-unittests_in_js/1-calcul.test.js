#!/usr/bin/node

const assert = require('assert'); // Node assert library
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  describe('SUM two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',1, 4), 5);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',1.5, 4.2), 6);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',1.23, 4.01), 5);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',101, 65), 166);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',0.1, 0), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',-7, 4), -3);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',7, -11), -4);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',-21, 21), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM', 74, 7.1), 81);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',1.254, 1.21), 2);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',44, 43), 87);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',44, 43), 87);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',32, 12), 44);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',34, -2), 32);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',50, 0), 50);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',99, 2), 101);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',1.4, 4.5), 6);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUM',2.4, 2.4), 4);
    })
  })


  describe('SUBTRACT two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 4), -3);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 4.2), -2);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.23, 4.01), -3);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 101, 65), 36);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 0), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', -7, 4), -11);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7, -11), 18);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -21, 21), -42);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 74, 7.1), 67);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.254, 1.21), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 44, 43), 1);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, -43), 47);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 32, 12), 20);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 34, -2), 36);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 50, 0), 50);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 99, 2), 97);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.4, 2.4), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.4, 3.7), -2);
    })
  })

  describe('DIVIDE two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, 4.2), 0.5);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 1.23, 4.01), 0.25);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 100, 80), 1.25);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 0.1, 0), 'Error');
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', -7, 4), -1.75);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7, -10), -0.7);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -21, 21), -1);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 80, 7.6), 10);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 1.254, 1.21), 1);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 44, 50), 0.88);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, -40), -0.1);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 32, 10), 3.2);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 34, -2), -17);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 50, 0), 'Error');
    })

    it('checks if it is an exact datatype and value', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 99, 2), 49.5);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 4.5), 0);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 2.4, 2.4), 1);
    })

    it('checks if it is an exact datatype and value', () => {
      assert.equal(calculateNumber('DIVIDE', 2.4, 0), 'Error');
    })
  })
})
