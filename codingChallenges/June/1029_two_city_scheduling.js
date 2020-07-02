//  Time: O(nlogn)
// Space: O(n)

// Given an array of length 2N consisting of tuples for each employee to travel to cities A and B,
// figure out the minimum cost to get N employees to each city.

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  const length = costs.length;
  const myCosts = [...costs].sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
  });
  let totalA = 0;
  let totalB = 0;
  let result = 0;
  for (let i = 0; i < myCosts.length; i++) {
    if (totalA < length / 2 && totalB < length / 2) {
      if (myCosts[i][0] < myCosts[i][1]) {
        result += myCosts[i][0];
        totalA += 1;
      } else {
        result += myCosts[i][1];
        totalB += 1;
      }  
    } else if (totalA === length / 2) {
      result += myCosts[i][1];
      totalB += 1;
    } else {
      result += myCosts[i][0];
      totalA += 1;
    }
  }
  return result;
};