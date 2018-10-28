const assert = require('assert');

Object.freeze(assert);

const getRec = require('../src/recursion');

describe('Recursion in work', () => {
  it('Test1', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    const res = getRec(tree);
    assert.deepEqual(res, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
