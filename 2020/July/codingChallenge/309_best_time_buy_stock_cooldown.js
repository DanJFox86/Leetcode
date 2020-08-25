//  Time Complexity: O(n)
// Space Complexity: O(n)

/* 
iterate thru stock values
There are 3 possible situations:
- Stock is bought
- Stock not bought, can't buy again yet
- Stock not bought, can buy
DP will keep track of max change from current total.
If DP is defined for current situation and current index, return current total + dp.
Else calculate dp for memoization and return total + dp again.

*/ 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) {
    return 0;
  }
  let dp = {};
  let lastPrice = prices.length - 1;
  const findMax = (idx, total, isBought, canBuy) => {
    let key = `${idx}-${isBought}-${canBuy}`;
    if (dp[key] !== undefined) {
      return total + dp[key];
    }
    if (idx >= lastPrice) {
      if (isBought) {
        return total + prices[idx];
      }
      return total;
    }
    if (isBought) {
      dp[key] = Math.max(
      // don't sell it
      findMax(idx + 1, total, true, false),
      // sell it
      findMax(idx + 1, total + prices[idx], false, false)) - total;
    } else if (!canBuy) {
      // if it's the day after a sale, can't buy again for 1 day
      dp[key] = findMax(idx + 1, total, false, true) - total;
    } else {
      // if last action was not sell, can buy it or not buy it
      dp[key] = Math.max(
      // buy it
      findMax(idx + 1, total - prices[idx], true, false),
      // dont buy it
      findMax(idx + 1, total, false, true)) - total;
    }
    return total + dp[key];
  }
  return findMax(0, 0, false, true);
};