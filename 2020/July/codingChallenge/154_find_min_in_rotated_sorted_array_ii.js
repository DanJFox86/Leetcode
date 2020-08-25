//  Time Complexity: O(logn)
// Space Complexity: O(1)

/*
  1. Start off with a binary search of a non-sorted array.
  2. Compare the number at the mid index with the number at the right index,
     got 3 situations to consider:
  -- a) nums[mid] > nums[right]: minimum must be to the right of mid, set left to mid + 1
  -- b) nums[mid] < nums[right]: minimum must be to the left of mid, set right to mid
  -- c) nums[mid] === nums[right]: can't make a determination but can safely remove
  --    nums[right] from consideration. Decrement right by 1.
  3. Eventually, nums[left] will be the minimum, return this value.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while(left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    else if (nums[mid] < nums[right]) {
      right = mid;
    }
    else {
      right--;
    }
  }
  return nums[left];
};