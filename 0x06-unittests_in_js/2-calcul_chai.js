#!/usr/bin/node

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return new Error('Error').message
    }
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber
