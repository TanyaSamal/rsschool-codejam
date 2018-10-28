module.exports = function make(...args) {
  if (typeof args[0] === 'function') return 'null';

  let arr = [].concat(args);
  function calc(...arg) {
    if (typeof arg[0] !== 'function') {
      arr = arr.concat(arg);
    } else {
      const func = arg[0];
      return arr.reduce(func, 0);
    }
    return calc;
  }

  return calc;
};
