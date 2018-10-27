const assert = require('assert');

Object.freeze(assert);
const getNewArr = require('./src/sumOfOther');

describe('Sum Of Other elements in Array', () => {
  it('1', () => {
    const res = getNewArr([2, 3, 1]);
    assert.deepEqual(res, [4, 3, 5]);
  });
  it('2', () => {
    const res = getNewArr([2, 3, 1, 5, 6, 4]);
    assert.deepEqual(res, [19, 18, 20, 16, 15, 17]);
  });
  it('3', () => {
    const res = getNewArr([1]);
    assert.deepEqual(res, [1]);
  });
  it('4', () => {
    const res = getNewArr([]);
    assert.deepEqual(res, []);
  });
  it('5', () => {
    const res = getNewArr([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]);
    assert.deepEqual(res, [945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955]);
  });
});
