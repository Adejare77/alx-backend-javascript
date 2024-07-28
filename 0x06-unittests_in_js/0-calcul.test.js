#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(1, 4), 5);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(1.5, 4.2), 6);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(1.23, 4.01), 5);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(101, 65), 166);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(0.1, 0), 0);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(-7, 4), -3);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(7, -11), -4);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(-21, 21), 0);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(74, 7.1), 81);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(1.254, 1.21), 2);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(44, 43), 87);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(44, 43), 87);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(32, 12), 44);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(34, -2), 32);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(50, 0), 50);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(99, 2), 101);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  })

  it('checkes if it is an exact datatype and value', () => {
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
  })
})
