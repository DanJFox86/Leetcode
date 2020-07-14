//  Time: O(1)
// Space: O(1)

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.max = maxSize;
  this.storage = [];
};

//  Time: O(1)
// Space: O(n)

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.storage.length < this.max) {
    this.storage.push(x);
  }
};

//  Time: O(1)
// Space: O(1)

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.storage.length) {
    return this.storage.pop();
  }
  return -1;
};

//  Time: O(n)
// Space: O(1)

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  let len = Math.min(k, this.storage.length);
  for (let i = 0; i < len; i++) {
    this.storage[i] += val;
  }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */