//  Time: O(t.length)
// Space: O(1)
// Given strings s and t, return boolean if s is a subsequence of t.
// A subsequence of a string is a new string which is formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let idx = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[idx]) {
      idx += 1;
    }
  }
  return idx === s.length;
};