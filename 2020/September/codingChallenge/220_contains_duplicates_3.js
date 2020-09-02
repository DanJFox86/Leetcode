/*
  1. Map values to new array with index.
  2. Sort asc by value.
  3. Working with 2 pointers (i and j, i < j) in new sorted array, calculate diff between 
     values and indexes.
  4. If distance between values is > max allowable distance (k), move j index forward.
  5. If difference between values is > max allowable diff (t), move i index forward.
  6. If i === j, move j forward.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let _nums = [...nums].map((val, idx) => {
    return { val, idx };
  })
  .sort((a, b) => a.val - b.val);
  // console.log(_nums)
  
  let i = 0;
  let j = 1;
  while (j < _nums.length) {
    let dist = Math.abs(_nums[i].idx - _nums[j].idx);
    let diff = Math.abs(_nums[i].val - _nums[j].val);
    if (dist <= k && diff <= t) {
      return true;
    }
    if (dist > k) {
      j++;
    }
    if (diff > t) {
      i++;
    }
    if (i === j) {
      j++;
    }
  }
  return false;
};