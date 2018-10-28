module.exports = function sumOfOther(arr) {
  const res = [];
  if (arr.length <= 1) return arr;
  arr.map((curr, i, array) => {
    res[i] = arr.reduce((acc, current) => acc + current) - array[i];
    return res[i];
  });
  return res;
};
