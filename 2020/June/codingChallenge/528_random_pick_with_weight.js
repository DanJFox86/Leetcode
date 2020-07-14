//  Time: 
// -- Creating Solution: O(n)
// -- Find Index: O(logn)
// Space:
// -- Creating Solution: O(n)
// -- Find Index: O(1)

// Given an array w with values representing weights for the corresponding index, create a function that returns a random 
// index based on the given weights.

/**
 * @param {number[]} w
 */

var Solution = function(w) {
  let count = -1;
  let storage = [];
  for (const weight of w) {
    count += weight;
    storage.push(count);
  }
  this.storage = storage;
  this.totalWeight = count + 1;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  if (this.storage.length === 1) {
    return 0;
  }
  let num = Math.floor(Math.random() * this.totalWeight);
  let left = 0 ;
  let right = this.storage.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (this.storage[mid] === num) {
      return mid;
    } else if (this.storage[mid] < num) {
      left = mid + 1;
    } else {
      if (mid === 0 || this.storage[mid - 1] < num) {
        return mid;
      }
      right = mid;
    }
  }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */