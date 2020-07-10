//  Time: O(n)
// Space: O(n)

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return null;
  }
  let newNode = head;
  let newHead = head;
  let prevNode;
  while (newNode) {
    prevNode = newNode;
    if (newNode.child) {
      let next = newNode.next;
      newNode.next = flatten(newNode.child);
      newNode.next.prev = newNode;
      newNode.child = null;
      while (newNode.next) {
        prevNode = newNode;
        newNode = newNode.next;
        newNode.prev = prevNode;
      }
      newNode.next = next;
      if (next) next.prev = newNode;
      prevNode = newNode;
      newNode = newNode.next;
    } else {
      newNode = newNode.next;
      if (newNode) newNode.prev = prevNode;
    }
  }
  return newHead;
};