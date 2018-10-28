const assert = require('assert');

Object.freeze(assert);

const getMake = require('../src/make');

function sum(a, b) {
  return a + b;
}

function sumSquare(a, b) {
  return a + b * b;
}

describe('Make reduce arguments', () => {
  it('Sum1', () => {
    const res = getMake(15)(34, 21, 666)(41)(sum);
    assert.equal(res, 777);
  });
  it('Sum 0 element', () => {
    const res = getMake(sum);
    assert.equal(res, 'null');
  });
  it('Sum 1 element', () => {
    const res = getMake(15)(sum);
    assert.equal(res, 15);
  });
  it('Sum4', () => {
    const res = getMake(15, 21)(666)(41, 0, 34)(sum);
    assert.equal(res, 777);
  });
  it('Sum5', () => {
    const res = getMake(15, 21)(666)(41, 0, 34)(11, 11, 1)(sum);
    assert.equal(res, 800);
  });
  it('SumSquare', () => {
    const res = getMake(2, 2)(1, 0)(5)(sumSquare);
    assert.deepEqual(res, 34);
  });
});
