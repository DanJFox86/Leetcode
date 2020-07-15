//  Time: O(n)
// Space: O(n), could be O(1) if I mutated original 
//        string instead of a copy.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.slice()
          .trim()
          .split(' ')
          .filter((word) => word !== '')
          .reverse()
          .join(' ');
};