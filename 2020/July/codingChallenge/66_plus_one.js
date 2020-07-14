//  Time: O(n)
// Space: O(1)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let remainder = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
      if (digits[i] === 10) {
        digits[i] = 0;
        remainder = 1;
      }
    } else {
      if (remainder === 0) {
        break;
      }
      digits[i] += remainder;
      if (digits[i] === 10) {
        digits[i] = 0;
        remainder = 1;
      } else {
        remainder = 0;
      }
    }
  }
  if (remainder) {
    digits.unshift(remainder);
  }
  return digits;
};