//  Time Complexity: O(n)
// Space Complexity: O(n)

// Dynamic programming approach:
// 1. 2 methods of climbing the stairs: 1 step or 2 steps at a time.
// 2. To get to steps i, need to look at how many ways to get to step i - 1 and i - 2.
//    Possible ways to get to step i is possible ways to get to step i - 1 + " " step i - 2.
// 3. Iterate thru each step, starting at 2, since we know from the start that 
//    there's only 1 way to get to step 1 from the starting point (step 0).
// 4. Return the value in the dp at the nth step/index.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  };