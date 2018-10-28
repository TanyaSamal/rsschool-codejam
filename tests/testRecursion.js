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
  it('Test2: one value', () => {
    const tree = {
      value: 100,
    };
    const res = getRec(tree);
    assert.deepEqual(res, [[100]]);
  });
  it('Test3: empty object', () => {
    const tree = {};
    const res = getRec(tree);
    assert.deepEqual(res, 'null');
  });
  it('Test4: not object', () => {
    const tree = [];
    const res = getRec(tree);
    assert.deepEqual(res, 'null');
  });
  it('Test5: just left branch', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
      },
    };
    const res = getRec(tree);
    assert.deepEqual(res, [[100], [90], [70]]);
  });
  it('Test6: just right branch', () => {
    const tree = {
      value: 100,
      right: {
        value: 120,
        right: {
          value: 130,
          right: {
            value: 140,
            right: {
              value: 150,
              right: {
                value: 160,
                right: {
                  value: 170,
                  right: {
                    value: 180,
                  },
                },
              },
            },
          },
        },
      },
    };
    const res = getRec(tree);
    assert.deepEqual(res, [[100], [120], [130], [140], [150], [160], [170], [180]]);
  });
});
