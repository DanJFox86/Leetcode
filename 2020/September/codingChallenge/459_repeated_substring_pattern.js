//  Time: O(n^2)
// Space: O(n)

/*
  1. If string is only 1 character then a substring can't be
     repeated to make the original string.
  2. A substring must have a length that the original length
     is divisible by, which reduces the possibilities.
  3. Only need to consider substrings from index 0 onwards. If
     it's possible to construct the original string from a 
     substring, this should work.
  4. Consider substrings of a length that evenly divides 
     the original string's length.
  5. Build a string out of each substring until it's length
     is the same as the original.
  6. Compare strings to see if they are the same, return true
     if they are the same.
  7. Return false if no solution is found.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length === 1) {
    return false;
  }
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (len % (i + 1) === 0) {
      let sub = s.slice(0, i + 1);
      let str = ''
      while (str.length < len) {
        str += sub
      }
      if (str === s) {
        return true;
      }
    }
  }
  return false;
};