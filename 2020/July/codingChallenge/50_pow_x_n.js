//  Time: O(logn)
// Space: O(1)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  
  const getNum = (val, pow) => {
    if (pow === 1) {
      return val;
    }
    if (pow === 0) {
      return 1;
    }
    let result = val * val;
    let currPow = 2;
    while (currPow < pow) {
      result *= result;
      currPow *= 2;
    }
    while (currPow > pow) {
      result = result / val;
      currPow -= 1;
    }
    return result;

/*

    let result = 1;
    let lastResult;
    while(pow > 0) {
      lastResult = result;
      result *= val;
      if (result === lastResult) {
        return result;
      } else if (result === 1) {
        return result;
      }
      pow -= 1;
    }
    return result;
*/
  }
  // If x is negative
  if (x < 0) {
    // n is also negative
    if (n < 0) {
      return -1 * (n % 2 === 0 ? -1 : 1) / getNum(x * - 1, n * -1);
    }
    // n is not negative
    return -1 * (n % 2 === 0 ? -1 : 1) * getNum(x * -1, n); 
  }
  // n is negative, x is positive
  if (n < 0) {
    return 1 / getNum(x, n * -1);
  }
  // Both positive
  return getNum(x, n);
};