//  Time: O(n)
// Space: O(n)

// Word Search II
// Each word must be constructed from letters of sequentially adjacent cell, 
// where "adjacent" cells are those horizontally or vertically neighboring. The same 
// letter cell may not be used more than once in a word.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let trie = {};
  const insert = (word) => {
    let node = trie;
    let idx = 0;
    while (idx < word.length) {
      if (!node[word[idx]]) {
        node[word[idx]] = {};
      }
      node = node[word[idx]];
      idx++;
    }
    node['end'] = true;
  }
  words.forEach((word) => {
    insert(word);
  });
  
  let result = [];
  let moves = [[0,1],[0,-1],[1,0],[-1,0]];
  let inBounds = (r, c) => {
    if (r < 0 || r >= board.length) {
      return false;
    }
    if (c < 0 || c >= board[0].length) {
      return false;
    }
    return true;
  }
  const search = (r, c, _trie, word) => {
    if (_trie['end']) {
      result.push(word);
      delete _trie['end'];
    }
    const temp = board[r][c];
    board[r][c] = 'used';
    for (let move of moves) {
      let rr = r + move[0];
      let cc = c + move[1];
      if (inBounds(rr, cc)) {
        if (board[rr][cc] !== 'used' && _trie[board[rr][cc]]) {
          search(rr, cc, _trie[board[rr][cc]], word + board[rr][cc])
        }
      }
    }
    board[r][c] = temp;
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (trie[board[i][j]]) {
        search(i, j, trie[board[i][j]], board[i][j]);
      }
    }
  }
  return result;
};