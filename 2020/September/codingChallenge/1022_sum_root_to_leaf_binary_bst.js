//  Time: O(n)
// Space: O(h), h is height of tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  
  const addNumber = (s) => {
    let len = s.length;
    let num = 0;
    for (let i = 0; i < len; i++) {
      if (s[i] === '1') {
        num += Math.pow(2, len - i - 1);
      }
    }
    return num;
  }
  
  const go = (node, str) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return addNumber(str + `${node.val}`);
    }
    const left = go(node.left, str + `${node.val}`);
    const right = go(node.right, str + `${node.val}`);
    return left + right;
  }
  return go(root, '');
};