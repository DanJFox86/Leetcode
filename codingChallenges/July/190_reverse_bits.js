//  Time: O(1)
// Space: O(1)
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  for (let i = 31; i >= 0; i--) {
    if ((1 << i) & n) {
      result += Math.pow(2, 31 - i);
    }
  }
  return result;
};