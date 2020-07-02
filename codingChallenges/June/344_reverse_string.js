//  Time: O(n)
// Space: O(1)
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
  const length = s.length;
  const half = Math.floor(length / 2);
  for (let i = 0; i < half; i++) {
    [s[i], s[length - i - 1]] = [s[length - i - 1], s[i]] 
  }
};