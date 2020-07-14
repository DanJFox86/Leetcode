
//  Time: O(n)
// Space: O(1)
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let minCounter = 0;
  let counter = 0;
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (char === '(') {
      counter++;
    } else {
      if (counter === 0) {
        minCounter++;
      } else {
        counter--;
      }
    }
  }
  minCounter += counter;
  return minCounter;
};