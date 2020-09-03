//  Time: O(2^n)
// Space: O(n) only aux space, not considering result to be returned.

/**
 * @param {string} s
 * @return {string[]}
 */

/*
  1. Iterate thru string.
  2. Start with two variables, invalidLeft and invalidRight.
  2. Keep a count going with invalidLeft (this will make sense later). +1 for a '('
     and -1 for a ')'.
  3. If a ')' is encountered and invalidLeft is already 0, +1 to invalidRight.
  4. After string is iterated thru, will have the minimum number of '(' and ')' to
     remove, the two variables mentioned earlier.
  5. The rest is trying every permutation of that string that removes the number of 
     invalid lefts and invalid rights. When iterating thru keep a count going, +1 for
     left paren, -1 for right paren.
     *note: if this count ever drops below 0, then the current string being made
     will be invalid no matter what comes after it. Stop progressing down that path.
  6. If the entire string has been gone thru and the min number of parens has been
     removed and the count is 0, then a valid string has been produced, add it as a 
     property of the result object (not push to array as this will produce duplicates).
  7. Return keys of the result object.
*/
var removeInvalidParentheses = function(s) {
  let invalidLeft = 0;
  let invalidRight = 0;
  for (let char of s) {
    if (char === '(') {
      invalidLeft += 1;
    } else if (char === ')') {
      if (invalidLeft === 0) {
        invalidRight += 1;
      } else {
        invalidLeft -= 1;
      }
    }
  }
  
  let output = {};
  
  const go = (idx, str, count, left, right) => {
    if (idx === s.length) {
      if (count === 0 && left === 0 && right === 0) {
        output[str] = true;
      }
      return;
    }
    if (count < 0) {
      return;
    }
    if (s[idx] === '(') {
      if (left > 0) {
        // can remove this paren
        go(idx + 1, str, count, left - 1, right);  
      }
      // or don't remove it
      go(idx + 1, str + '(', count + 1, left, right);
    } else if (s[idx] === ')') {
      // same with right
      if (right > 0) {
        // can remove this paren
        go(idx + 1, str, count, left, right - 1);  
      }
      // or don't remove it
      go(idx + 1, str + ')', count - 1, left, right);
    } else {
      // not a paren
      go(idx + 1, str + s[idx], count, left, right);
    }
  }
  
  go(0, '', 0, invalidLeft, invalidRight);
  return Object.keys(output);
};