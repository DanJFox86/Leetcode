//  Time Complexity: O(n)
// Space Complexity: O(n)

/*
  1. Every number appears once or twice.
  2. Make a tracker object.
  3. Iterate thru the array:
  -- a) If the tracker variable does not have a property of the number,
     set tracker[number] to true
     b) If it does have it, delete tracker[number]
  4. Return the remaining keys of the tracker object, these will be the numbers
     that appear only once.


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  // linear time, linear space
  let tracker = {};
  for (let i = 0 ; i < nums.length; i++) {
    if (!tracker[nums[i]]) {
      tracker[nums[i]] = true;
    } else {
      delete tracker[nums[i]];
    }
  }
  return Object.keys(tracker);
};