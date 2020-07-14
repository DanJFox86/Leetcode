//  Time: O(logn)
// Space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
          if (nums[mid + 1] >= target) {
              return mid + 1;
          } else {
              left = mid + 1;
          }
      } else {
          right = mid - 1;
      }
  }
  return nums[mid] >= target ? mid : mid + 1;
};