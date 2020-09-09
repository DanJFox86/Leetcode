//  Time: O(n)
// Space: O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  if (!root1 && !root2) {
    return [];
  }
  
  const traverse = (node) => {
    if (!node) {
      return [];
    }
    let left = traverse(node.left);
    let right = traverse(node.right);
    return [...left, node.val, ...right];
  }
  let l1 = traverse(root1);
  let l2 = traverse(root2);
  let i1 = 0;
  let i2 = 0;
  let result = [];
  while (i1 < l1.length && i2 < l2.length) {
    if (l1[i1] < l2[i2]) {
      result.push(l1[i1]);
      i1++;
    } else {
      result.push(l2[i2]);
      i2++;
    }
  }
  result = result.concat(l1.slice(i1));
  result = result.concat(l2.slice(i2));
  return result;
};