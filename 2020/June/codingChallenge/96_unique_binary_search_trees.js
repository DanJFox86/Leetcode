//  Time: O(n^2)
// Space: O(n)
// Given a number of unique nodes 'n', find the number of structurally unique BSTs 
// that can be constructed.

// Solution: 
// 1. With 0 and 1 nodes, the # of unique BSTs that can be create are 1 (empty 
//    tree) and 1 (just the 1 node), respectively.
// 2. With 2 nodes, it all just depends on which is inserted first, there are 2 possibilities
//    for that, so n = 2 => 2 unique trees.
// 3. For n = 3, it's just the sum of the sub-possibilities:
//      a) Numbered 1 thru 3, if you insert 1 in first, then both the other 2 nodes are going to go 
//         to the right of the root, and that has the same # of structurally unique BSTs as n = 2. 
//      b) Same thing if 3 is inserted first just on the left side.
//      c) If 2 is inserted first then it doesn't matter the order in which the other 2 
//         nodes are inserted, 1 will always go to the left and 3 to the right. Just 1 unique BST if 2 is
//         inserted first.
//      d) Thus the answer for n = 3 => 5.
// 4. For any given initial node, a certain number of subsequent nodes will go to the 
//    left and to the right, let's call these nLeft and nRight.
// 5. The number of structurally unique BSTs for any given nLeft and nRight is nLeft * nRight. The 
//    number of structurally unique BSTs for n is the summation of these multiplications.
// n     nL * nR for each initial node    Total
//           1   2   3   4   5   6
// 0         1                              1
// 1         1                              1
// 2         1   1                          2
// 3         2   1   2                      5
// 4         5   2   2   5                  14
// 5         14  5   4   5   14             42
// 6         42  14  10  10  14  42         132

var numTrees = function(n) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    let total = 0;
    for (let j = 1; j <= i; j++) {
      total += dp[j - 1] * dp[i - j]
    }
    dp[i] = total;
  }
  return dp[n];
};