module.exports = function recursion(obj) {
  const result = [];
  let i = 0;

  function traverse(tree) {
    if (!Array.isArray(result[i])) result[i] = [];
    result[i].push(tree.value);
    i += 1;
    if (tree.left instanceof Object) {
      traverse(tree.left);
    }
    if (tree.right instanceof Object) {
      traverse(tree.right);
    }
    i -= 1;
  }

  traverse(obj);
  return result;
};
