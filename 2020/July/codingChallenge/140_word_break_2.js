//  Time: O(n * k)
// Space: O(n * k)

/*
DP approach
`1. DP is based of index of given string, representing the letters remaining (from
    idx onwards).
 2. DP will store array of string combinations that can be made from 
    remaining letters.
 3. For every word that can be created at a certain index, it will be combined
    with every possible combination (tails) that can come after it.
 4. DP will build up array of word combinations until it has made every
    word combination starting at idx 0.

*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
let wordBreak = (S, A) => {
  let dict = {};
  let N = S.length;
  let maxLen = A.reduce((max, str) => Math.max(max, str.length), 0)
  let memo = Array(N + 1).fill(null);
  A.forEach(word => dict[word] = true);
  
  let go = (i = 0, words = []) => {
    if (memo[i] != null)  {
      return memo[i];
    }
    if (i == N) { 
      return memo[i] = [[]];
    }
    let maxJ = Math.min(i + 1 + maxLen, N)
    for (let j = i + 1; j <= maxJ; ++j) {
      let cand = S.substring(i, j);
      if (dict[cand]) {
        for (let tail of go(j)) {
          words.push([cand].concat(tail));
        }
      }
    }
    memo[i] = words
    return memo[i];
  };
  
  return go().map(a => a.join(' '));
};