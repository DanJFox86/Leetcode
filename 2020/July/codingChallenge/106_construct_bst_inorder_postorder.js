//  Time Complexity: O(n)
// Space Complexity: O(n)

// 1. The approach here is fairly similar to how it is done with an inorder and preorder,
//    just a little bit in reverse.
// 2. The last value in the postorder traversal is the root of the tree.
// 3. The position of this value in the inorder traversal divides the inorder
//    array into the left and right sub-arrays. These will be the values in the
//    left and right subtrees from the root.
// 4. The next value in the postorder (starting from the right) will be the root
//    of one of the subtrees under the intial root. If there are values to the right
//    of the root value in the inorder array, the next value in the postorder array
//    is the root of the right subtree. If not and there are values to the left
//    of the root value, then it's the root of the left subtree.
// 5. Performing the same sort of logic on the left and right sub-arrays will
//    further subdivide them into sub-sub-arrays until there is only 1 value being
//    considered (no values to consider to the left or right of the current subtree's
//    root value). This value just becomes a node and is set as either the left or right
//    node of it's parents node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) {
    return null;
  }
  let i = 1;
  let helper = (node, min, max) => {
    // console.log('going down down baby')
    let mid = inorder.indexOf(node.val);
    if (mid < max) {
      node.right = new TreeNode(postorder[postorder.length - i]);
      i++;
      helper(node.right, mid + 1, max);
    }
    if (mid > min) {
      node.left = new TreeNode(postorder[postorder.length - i]);
      i++;
      helper(node.left, min, mid - 1);
    }
  }
  let root = new TreeNode(postorder[postorder.length - i]);
  i++;
  helper(root, 0, inorder.length - 1);
  return root;
    
};