/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // Pure Recursion
  // if (m === 1 || n === 1) {
  //     return 1;
  // }
  // let total = 0;
  // if (m > 1) {
  //     total += uniquePaths(m - 1, n)
  // }
  // if (n > 1) {
  //     total += uniquePaths(m, n - 1);
  // }
  // return total;
  
  // DP Recursive
  
  let cache = {};
  cache[`${m}-${n}`] = 1;
  
  const travel = (mm, nn) => {
    let key = `${mm}-${nn}`;
    if (cache[key]) {
      return cache[key];
    }
    let total = 0;
    if (mm === m) {
      total = travel(mm, nn + 1);
    }else if (nn === n) {
      total = travel(mm + 1, nn);
    } else {
      total = travel(mm + 1, nn) + travel(mm, nn + 1);
    }
    cache[key] = total;
    return cache[key];
  }
  
  return travel(1, 1)
  
  // DP iterative
  
  // let lastRow = new Array(n).fill(1);
  // let currRow;
  // for (let i = 1; i < m; i++) {
  //   currRow = new Array(n).fill(0);
  //   for (let j = 0; j < n; j++) {
  //     currRow[j] = lastRow[j];
  //     if (j > 0) {
  //       currRow[j] += currRow[j - 1];
  //     }
  //   }
  //   lastRow = currRow;
  // }
  // return lastRow[n - 1];
};