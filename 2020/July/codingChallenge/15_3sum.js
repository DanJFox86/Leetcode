//  Time: O(n^2)
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = [];
  const sortedArr = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 2; i++) {
      if (sortedArr[i] > 0) {
          break;
      }
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
          continue;
      }
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
          let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
          if (sum < 0) {
              left++;
          } else if (sum > 0) {
              right--;
          } else {
              results.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
              while (left < right && sortedArr[left] === sortedArr[left + 1]) {
                  left++;
              }
              while (left < right && sortedArr[right] === sortedArr[right - 1]) {
                  right--;
              }
              left++;
              right--;
          }
      }
  }
  return results;
};
