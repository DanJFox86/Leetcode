//  Time: O(n)
// Space: O(n)
// Inverts a binary tree.

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let invertHead = new TreeNode();
  const helper = (node, reverseNode) => {
    reverseNode.val = node.val;
    if (node.left) {
      reverseNode.right = new TreeNode();
      helper(node.left, reverseNode.right);
    }
    if (node.right) {
      reverseNode.left = new TreeNode();
      helper(node.right, reverseNode.left);
    }
  }
  helper(root, invertHead);
  return invertHead;
};