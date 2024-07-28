#!/usr/bin/node

const chai = require('chai') // Using Chai expect library);
const calculateNumber = require('./2-calcul_chai')
const expect = chai.expect

describe('calculateNumber', () => {
  describe('SUM two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',1, 4)).to.equal(5);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM', 1.5, 4.2)).to.equal(6);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM', 1.23, 4.01)).to.equal(5);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM', 101, 65)).to.equal(166);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM', 0.1, 0)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',-7, 4)).to.equal(-3);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',7, -11)).to.equal(-4);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',-21, 21)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM', 74, 7.1)).to.equal(81);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',1.254, 1.21)).to.equal(2);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',44, 43)).to.equal(87);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',32, 12)).to.equal(44);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',34, -2)).to.equal(32);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',50, 0)).to.equal(50);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',99, 2)).to.equal(101);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',1.4, 4.5)).to.equal(6);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUM',2.4, 2.4)).to.equal(4);
    })
  })


  describe('SUBTRACT two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 4.2)).to.equal(-2);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 1.23, 4.01)).to.equal(-3);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 101, 65)).to.equal(36);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', -7, 4)).to.equal(-11);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 7, -11)).to.equal(18);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', -21, 21)).to.equal(-42);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 74, 7.1)).to.equal(67);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 1.254, 1.21)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 44, 43)).to.equal(1);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 4, -43)).to.equal(47);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 32, 12)).to.equal(20);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 34, -2)).to.equal(36);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 50, 0)).to.equal(50);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 99, 2)).to.equal(97);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 2.4)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 3.7)).to.equal(-2);
    })
  })

  describe('DIVIDE two integers', () => {
    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 1.5, 4.2)).to.equal(0.5);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 1.23, 4.01)).to.equal(0.25);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 100, 80)).to.equal(1.25);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', -7, 4)).to.equal(-1.75);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 7, -10)).to.equal(-0.7);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', -21, 21)).to.equal(-1);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 80, 7.6)).to.equal(10);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 1.254, 1.21)).to.equal(1);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 44, 50)).to.equal(0.88);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 4, -40)).to.equal(-0.1);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 32, 10)).to.equal(3.2);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 34, -2)).to.equal(-17);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 50, 0)).to.equal('Error');
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 99, 2)).to.equal(49.5);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.4)).to.equal(1);
    })

    it('checks if it is an exact datatype and value', () => {
      expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
    })
  })
})
