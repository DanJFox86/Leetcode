//  Time: O(n)
// Space: O(n)

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let tracker = {};
  let used = {};
  let words = str.split(' ');
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];
    if (!tracker[char]) {
      tracker[char] = word;
      if (used[word]) {
        return false;
      }
      used[word] = char;
    }
    if (tracker[char] !== word) {
      return false;
    }
  }
  return pattern.length === words.length;
};