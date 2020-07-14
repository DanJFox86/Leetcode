//  Time: O(logn)
// Space: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  
  while (n > 1) {
    if (Math.floor(n) !== n) {
      return false;
    }
    n = n / 2;
  }
  return true;
};