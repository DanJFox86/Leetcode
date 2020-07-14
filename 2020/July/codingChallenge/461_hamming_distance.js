//  Time: O(1)
// Space: O(1)

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let total = 0;
  let bitX, bitY;
  for (let i = 31; i >= 0; i--) {
    bitX = ((1 << i) & x);
    bitY = ((1 << i) & y);
    if ((bitX || bitY) && !(bitX && bitY)) {
      total++;
    }
  }
  return total;
};