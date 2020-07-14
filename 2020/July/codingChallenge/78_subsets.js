//  Time: O(2^n)
// Space: O(2^n)


var subsets = function(nums) {
  let result = [];
  const helper = (arr, idx) => {
    if (idx === nums.length) {
      return result.push(arr);
    }
    helper(arr, idx + 1);
    helper([...arr, nums[idx]], idx + 1)
  }
  helper([], 0);
  return result;
};