//  Time: O(n)
// Space: O(n)

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