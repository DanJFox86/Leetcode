//  Time: O(1), for loop terminates <= 64 iterations as there are 64 different cell states
// Space: O(1)

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let cache = {};
  const isEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  let yesterday = cells;
  for (let i = 0; i < N; i++) {
    cells = new Array(8).fill(0);
    for (let j = 0; j < 8; j++) {
      if (j !== 0 && j !== 7) {
        if (yesterday[j - 1] === yesterday[j + 1]) {
          cells[j] = 1;
        } else {
          cells[j] = 0;
        }
      }
    }
    if (isEqual(yesterday, cells)) {
      return yesterday;
    }
    if (!cache[cells.join('')]) {
      cache[cells.join('')] = i + 1;
    } else {
      let target = N % i;
      if (target === 0) {
        target = i;
      }
      for (let key in cache) {
        
        if (cache[key] === target ) {
          return key.split('').map((val) => Number(val));
        }
      }
    }
    yesterday = cells;
  }
  return yesterday;
};