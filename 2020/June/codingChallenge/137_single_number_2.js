//  Time: O(n)
// Space: O(n)

// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let tracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (!tracker[nums[i]]) {
      tracker[nums[i]] = 1;
    } else {
      if (tracker[nums[i]] === 2) {
        delete tracker[nums[i]];
      } else {
        tracker[nums[i]] += 1;
      }
    }
  }
  return Object.keys(tracker)[0];
};