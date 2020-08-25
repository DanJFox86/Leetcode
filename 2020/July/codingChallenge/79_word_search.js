//  Time Complexity: O(n)
// Space Complexity: O(1)

/*
  1. Iterate thru the board until the first letter of the word is found.
  2. Begin word search from this value.
  3. After each letter of the word is found, mark that letter as used so it is not
     included in searches for the next letter.
  4. If all letters have been found, return true. Otherwise, continue with the
     initial iteration thru the board to find the first letter.
  5. If the entire board has been searched and the word has not been found, return
     false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  
  // in bounds
  let maxRows = board.length;
  let maxCols = board[0].length;
  
  const inBounds = (r, c) => {
    if (r < 0 || r >= maxRows) {
      return false;
    }
    if (c < 0 || c >= maxCols) {
      return false;
    }
    return true;
  }
  
  
  // Search
  const moves = [[0,1],[0,-1],[1,0],[-1,0]];
  const search = (r, c, i) => {
    console.log(i)
    if (i === word.length) {
      return true;
    }
    for (let move of moves) {
      let rr = r + move[0];
      let cc = c + move[1];
      if (inBounds(rr, cc) && board[rr][cc].length === 1) {
        if (board[rr][cc] === word[i]) {
          let temp = board[rr][cc];
          board[rr][cc] = 'XX';
          let result = search(rr, cc, i + 1);
          board[rr][cc] = temp;
          if (result) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  // Initial iteration
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        let temp = board[i][j];
        board[i][j] = 'XX';
        let result = search(i, j, 1);
        board[i][j] = temp;
        if (result) {
          return true;
        }
      }
    }
  }
  return false;
};