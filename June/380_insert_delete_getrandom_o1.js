/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.storage = [];
  this.tracker = {};
};

let Node = (val, idx) => {
  obj.val = val;
  obj.idx = idx;
}


/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */

// use tracker to see if val already exists
// if not already exists, create new doubly LL node with val
// push node onto storage, add idx to indicate where in storage it is located
// set tracker[val] = node

RandomizedSet.prototype.insert = function(val) {
  if (!this.tracker[val]) {
    let node = new Node(val, this.storage.length);
    this.storage.push(node);
    this.tracker[val] = node;
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const swap = (i, j) => {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
    [this.storage[i].idx, this.storage[j].idx] = [this.storage[j].idx, this.storage[i].idx];
  }
  if (this.tracker[val]) {
    let node = this.tracker[val];
    let { idx } = node;
    swap(idx, this.storage.length - 1);
    delete this.tracker[val];
    this.storage.pop();
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  // console.log(this.tracker)
  // console.log(this.storage);
  let idx = Math.floor(this.storage.length * Math.random());
  return this.storage[idx].val;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */