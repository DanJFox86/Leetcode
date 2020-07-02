//  Time: O(n) 
// space: O(n)

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const dRows = dungeon.length;
  const dCols = dungeon[0].length;
  let prevRow = new Array(dCols).fill(0);
  let curr;
  for (let i = dRows - 1; i >= 0; i--) {
    // console.log(curr);
    curr = new Array(dCols).fill(0);
    for (let j = dCols - 1; j >= 0; j--) {
      if (i === dRows - 1) {
        if (j === dCols - 1) {
          curr[j] = Math.max(1, 1 - dungeon[i][j]);
        } else {
          curr[j] = Math.max(1, curr[j + 1] - dungeon[i][j]);
        }
      } else {
        if (j === dCols - 1) {
          curr[j] = Math.max(1, prevRow[j] - dungeon[i][j])
        } else {
          curr[j] = Math.max(1, Math.min(prevRow[j], curr[j + 1]) - dungeon[i][j]);
        }
      }
    }
    prevRow = curr;
  }
  // console.log(curr)
  return curr[0];
};