//  Time Complexity: O(n)
// Space Complexity: O(n)


/*
  1. Each day of travel, can buy a 1-day, 7-day or 30-day ticket.
  2. For each type of ticket purchased:
  -- a) Add current ticket type price to total.
  -- b) Find next day a ticket needs to be purchased for the current ticket, move to
  --    that day and make the same choices of purchasing 1-, 7- or 30-day tickets.
  3. For each day, find the minimum cost to be able to travel for the rest of the 
     days.
  4. Memoize this min cost in a variable corresponding to each day to eliminate
     redundant work.
  5. Return min cost that pays for all days.
*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const[oneDay, sevenDay, thirtyDay] = costs;
  let dp = {};
  const travel = (i, total) => {
    
    if (i === days.length) {
      return total;
    }
    if (dp[i]) {
      return total + dp[i];
    }
    let min = Infinity;
    let offset = 1;
    min = Math.min(min, travel(i + offset, total + oneDay) - total);
    while (i + offset < days.length && days[i + offset] - days[i] + 1 <= 7) {
      offset += 1;
    }
    min = Math.min(min, travel(i + offset, total + sevenDay) - total);
    while (i + offset < days.length && days[i + offset] - days[i] + 1 <= 30) {
      offset += 1;
    }
    min = Math.min(min, travel(i + offset, total + thirtyDay) - total);
    dp[i] = min;
    return total + dp[i];
  }
  return travel(0, 0);
};