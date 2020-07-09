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
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) {
    return 0;
  }
  let globalMax = -Infinity;
  let queue = [];
  let newQueue;
  queue.push({ node: root, idx: 0, depth: 0});
  
  while (queue.length) {
    globalMax = Math.max(globalMax, queue[queue.length - 1].idx - queue[0].idx + 1);
    newQueue = [];
    let offset = queue[0].idx;
    for (let i = 0; i < queue.length; i++ ) {
      if (queue[i].node.left) {
        newQueue.push({node: queue[i].node.left, idx: 2 * queue[i].idx - offset, depth: queue[i].depth + 1});
      }
      if (queue[i].node.right) {
        newQueue.push({node: queue[i].node.right, idx: (2 * queue[i].idx) + 1 - offset, depth: queue[i].depth + 1});
      }
    }
    queue = newQueue;
  }
  return globalMax;
};