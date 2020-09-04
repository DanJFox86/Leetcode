//  Time: O(n)
// Space: O(n)

/* 
  1. Record index of every character in an array in an
     object, call it tracker.
  2. Iterate thru array:
    a) Keep track of length of current substring. Just add
       one as the string is iterated thru.
    a) When a character is encountered, check if tracker has
       a key corresponding to that character. If it does,
       add all indexes of that character into a current
       tracker object as keys.
    b) Delete current index from current tracker.
    c) If current tracker has no keys then all instances
       of every character encountered so far have been 
       seen. Push current length to a result array and 
       reset current length to 0.
  3. Return result array.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  // partition the string into as 
  let tracker = {};
  for (let i = 0; i < S.length; i++) {
    if (!tracker[S[i]]) {
      tracker[S[i]] = [];
    }
    tracker[S[i]].push(i)
  }
  // console.log(tracker);
  let result = [];
  let currLen = 0;
  let currTracker = {};
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    currLen += 1;
    if (tracker[char]) {
      for (let idx of tracker[char]) {
        currTracker[idx] = true;
      }
      delete tracker[char];
    }
    delete currTracker[i];
    if (Object.keys(currTracker).length === 0) {
      result.push(currLen);
      currLen = 0;
    }
  }
  return result;
};