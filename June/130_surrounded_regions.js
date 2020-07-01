//  Time: O(n) n being total size of board
// Space: O(1)

var solve = function(board) {
  // Look at every element on edges.
  // If element === 0 check all hor/vert directions for other Os,
  // changing Os to Ys.
  // Iterate thru entire board, flip all Os to Xs and all Ys to Os.
  if (board.length === 0 || board[0].length === 0) {
    return;
  }
  let moves = [[-1,0],[1,0],[0,1],[0,-1]];
  const numRows = board.length;
  const numCols = board[0].length;
  // helper functions
  const inBounds = (r, c) => {
    if (r < 0 || r === numRows) {
      return false;
    }
    if (c < 0 || c === numCols) {
      return false;
    }
    return true;
  }
  const explore = (r, c) => {
    board[r][c] = 'Y';
    for (const move of moves) {
      let rr = r + move[0];
      let cc = c + move[1];
      if (inBounds(rr, cc) && board[rr][cc] === 'O') {
        explore(rr, cc);
      }
    }
  }
  // Iterate thru all edge elements
  for (let i = 0; i < numCols; i++) {
    if (board[0][i] === 'O') {
      explore(0, i);
    }
    if (board[numRows - 1][i] === 'O') {
      explore(numRows - 1, i);
    }
  }
  for (let i = 0; i < numRows; i++) {
    if (board[i][0] === 'O') {
      explore(i, 0);
    }
    if (board[i][numCols - 1] === 'O') {
      explore(i, numCols - 1);
    }
  }
  // Scan entire board, flip Os to Xs and Ys to Os.
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'Y') {
        board[i][j] = 'O';
      }
    }
  }
};