//  Time: O(n)
// Space: O(n^2)

/**
 * @param {string} s
 * @return {string}
 */

let swapper = {
  '(' : ')',
  ')' : '('
};
var reverseParentheses = function(s) {
  if (s.length <= 1) {
    return s;
  }
  let firstLParen = s.indexOf('(');
  let leftParen = firstLParen;
  while (leftParen !== -1) {
    let rightParen = leftParen + 1;
    let parenCounter = 1;
    for (let i = leftParen + 1; i < s.length; i++) {

      if (s[i] === ')') {
        parenCounter -= 1;
      } else if (s[i] === '(') {
        parenCounter += 1;
      }
      if (parenCounter === 0) {
        rightParen = i;
        break;
      }
    }
    let mid = s.slice(leftParen + 1, rightParen)
               .split('')
               .reverse()
               .map((ele) => {
                 if (ele === ')' || ele === '(') {
                   return swapper[ele];
                 }
                 return ele;
               })
               .join('');
    s = s.slice(0, leftParen) + reverseParentheses(mid) + s.slice(rightParen + 1, s.length);
    leftParen = s.indexOf('(');
  }
  return s;
}