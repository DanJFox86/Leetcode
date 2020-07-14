//  Time: O(n)
// Space: O(n)
// Given a binary tree, return the bottom-up level order traversal 
// of its nodes' values. (ie, from left to right, level by level from leaf to root).


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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [];
  let newQueue;
  let level;
  queue.push(root);
  while (queue.length > 0) {
    level = [];
    newQueue = [];
    for (let node of queue) {
      level.push(node.val);
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
    result.push(level);
  }
  return result.reverse();
};