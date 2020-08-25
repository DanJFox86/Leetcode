//  Time Complexity: O(n)
// Space Complexity: O(1)

/*
  1. Iterate thru LL, keeping track of previous node.
  2. If current node's val is equal to target val, remove from list:
  -- a) To remove head: Set head to curr.next. Then set curr.next to null. Then set
  --    curr to head.
  -- b) to remove other nodes: Set prev.next to current node's next node.
  3. If not the target value, just iterate to the next node.
  4. Return the head of the modified list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return head;
  }
  let prev;
  let curr = head;
  while (curr) {
    if (curr.val === val) {
      if (head === curr) {
        head = curr.next;
        curr.next = null;
        curr = head;
        continue;
      }
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
    
};