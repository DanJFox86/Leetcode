//  Time: O(n)
// Space: O(n)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let maxRows = grid.length;
  let maxCols = grid[0].length;
  let moves = [[0,1],[0,-1],[1,0],[-1,0]];
  const inBounds = (r, c) => {
      if (r < 0 || r >= maxRows) {
          return false;
      } else if (c < 0 || c >= maxCols) {
          return false
      }
      return true;
  }
  const explore = (r, c) => {
      let queue = [];
      let total = 0;
      queue.push([r, c]);
      let newQueue;
      while(queue.length) {
          newQueue = [];
          for (let pos of queue) {
              for (let move of moves) {
                  let rr = pos[0] + move[0];
                  let cc = pos[1] + move[1];
                  if (inBounds(rr, cc)) {
                      if (grid[rr][cc] !== 0) {
                          if (grid[rr][cc] === 1) {
                              grid[rr][cc] = -1;
                              newQueue.push([rr, cc])
                          }
                      } else {
                          total += 1;
                      }
                  } else {
                      total += 1;
                  }
              }
          }
          queue = newQueue;
      }
      return total;
  }
  for (let i = 0; i < maxRows; i++) {
      for (let j = 0; j < maxCols; j++) {
          if (grid[i][j]) {
              grid[i][j] = -1;
              return explore(i, j);
          }
      }
  }
};