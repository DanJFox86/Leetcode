//  Time Complexity: O(n)
// Space complexity: O(n)

// 1. Levels will be descended thru iteratively with a queue.
// 2. A variable 'zig' will be used to reverse the order of the nodes on
//    alternating levels.
// 3. As the levels of the tree are iterated thru, values will be pushed to an 
//    array which, after the level has been fully interated thru, will be 
//    pushed onto the result array that will be returned at the end.

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
var zigzagLevelOrder = function(root) {
  let zig = true;
  if (!root) {
    return [];
  }
  let result = [];
  let level;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    level = [];
    let newQueue = [];
    for (let node of queue) {
      level.push(node.val);
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    if (zig) {
      zig = false;
    } else {
      level.reverse();
      zig = true;
    }
    result.push(level);
    queue = newQueue;
  }
  return result;
};