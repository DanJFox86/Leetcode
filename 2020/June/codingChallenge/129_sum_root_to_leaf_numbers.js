//  Time: O(logn)
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  
  const getTotal = (node, arr) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      console.log('end', node.val)
      console.log(arr)
      return Number([...arr, node.val.toString()].join(''));
    }
    let sum = 0;
    sum += getTotal(node.left, [...arr, node.val.toString()]);
    sum += getTotal(node.right, [...arr, node.val.toString()]);
    return sum;
  }
  return getTotal(root, []);
    
};