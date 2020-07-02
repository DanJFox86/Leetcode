//  Time: O(logn)
// Space: O(1)
// Given a complete binary tree (all levels except possibly last are full, all nodes on last level are 
// as far to the left as possible), count the number of nodes in the tree.


var countNodes = function(root) {
  // left most traversal, gives depth of tree
  // perform binary search of last level:
  // -- Given depth, binary search will traverse 2nd to last level.
  // -- # of nodes on depth - 1 level is 2 ^ (depth - 1)
  // -- node # on depth - 1 level can be used to calculate which turns to take, left or right, on 
  // -- the way down.
  // -- Once at depth - 1 level, can check if left or right exist:
  // ---- If left exists but not right, found number of nodes on last level, can return value
  // ---- If both exists, need to search to the right
  // ---- If neither, need to search to the left
  
  
  // Edge case: empty tree
  if (!root) {
    return 0;
  }
  // Edge case: max depth of tree = 1
  if (root && !root.right) {
    return root.left ? 2 : 1;
  }
  // Max depth is >= 2, find depth
  const getDepth = (node, depth) => {
    if (!node) {
      return depth - 1;
    }
    return getDepth(node.left, depth + 1);
  }
  const maxDepth = getDepth(root, 0);
  let left = 0;
  const maxSearchNodes = Math.pow(2, maxDepth - 1);
  let right = maxSearchNodes - 1;
  let mid, lastMid;
  let node;
  let wasEmpty;
  //          1
  //        /   \
  //     2         3
  //    / \       / \
  //   4   5     6   7
  //  / \ / \   /
  // 8  910 11 12
  //   0   1     2   3
  // Getting to 0 would be L L. Getting to 1 would be L R. 2 would be R L. 3 would be R R
  // Binary representation of number determines L and R turns.
  // 0 = 00 => LL
  // 1 = 01 => LR
  // 2 = 10 => RL
  // 3 = 11 => RR
  
  const traverse = (node, turns, currDepth) => {
    if (currDepth === maxDepth - 1) {
      return node;
    }
    if (!turns.length || turns[0] === '0') {
      return traverse(node.left, turns.slice(1), currDepth + 1);
    } else {
      return traverse(node.right, turns.slice(1), currDepth + 1);
    }
  }
  
  const calcNodes = (mid, haveRight) => {
    let total = 0;
    for (let i = 0; i < maxDepth; i++) {
      total += Math.pow(2, i);
    }
    total += 2 * (mid + 1);
    return haveRight ? total : total - 1;
  }
  
  // Finding odd number of nodes on last level is easy, there will be an L and !R.
  // Finding even number of nodes is harder, won't be able to find it just by looking at 1 search node.
  // During search, keep track of whether or not the last node searched had both L and R.
  // -- If last mid and curr Mid differ by 1 and both are full/empty or empty/full, found # of nodes
  // -- on last level.
  // ---- Say lastMid = 1, currMid = 2
  // ---- lastMid was full, currMid is empty, then there are 2 * (lastMid + 1) nodes on last level
  // ---- Say lastMid = 2, currMid = 1
  // ---- lastMid was empty, currMid is full, then there are 2 * (currMid + 1) nodes on last level
  
  while (left <= right) {
    lastMid = mid;
    mid = Math.floor((left + right) / 2);
    let currTurns = mid.toString(2);
    while (currTurns.length < maxDepth - 1) {
      currTurns  = '0' + currTurns;
    }
    node = traverse(root, currTurns, 0);
    if (node.left && !node.right) {
      // calculate # of nodes and return it
      return calcNodes(mid, !!node.right);
    } else if (node.left && node.right) {
      if (mid === maxSearchNodes - 1) {
        // last row is full, calculate # of nodes and return it
        return calcNodes(mid, !!node.right);
      }
      if (lastMid - mid === 1 && wasEmpty) {
        // Last mid node was immediate after this node and empty, current node is full.
        return calcNodes(mid, !!node.right);
      }
      left = mid + 1;
      wasEmpty = false;
    } else {
      if (mid === 0) {
        // last row is empty, calculate # of nodes and return it
        return calcNodes(mid, !!node.right) - 1;
      }
      if (mid - lastMid === 1 && !wasEmpty) {
        // Last mid node was immediate before this node and full, current node is empty.
        console.log('here')
        return calcNodes(mid, !!node.right) - 1;
      }
      right = mid - 1;
      wasEmpty = true;
    }
  }
};