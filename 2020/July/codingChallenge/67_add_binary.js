//  Time Complexity: O(n)
// Space Complexity: O(n)

// 1. Iterate thru each number concurrently starting from the end.
// 2. Add binary digits together along with whatever is carried over from 
//    the previous binary digit addition. Add the corresponding 'ones' digit to the 
//    result that will be returned at the end.
// 3. Iterate until there are no more digits in at least 1 of the numbers.
// 4. Finish off adding digits to the result.
// 5. Return resulting number.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carryThe = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  const finish = (str, i) => {
      while (i >= 0) {
          if (Number(str[i])) {
              if (carryThe) {
                  result = '0' + result;
              } else {
                  result = str.slice(0, i) + '1' + result;
                  break;
              }
          } else {
              if (carryThe) {
                  result = str.slice(0, i) + '1' + result;
                  carryThe = 0;
                  break;
              } else {
                  result = str.slice(0, i) + '0' + result;
                  break;
              }
          }
          i--;
      }
  }
  
  while (i >= 0 && j >= 0) {
      if (Number(a[i]) ^ Number(b[j])) {
          if (carryThe) {
              result = '0' + result;
          } else {
              result = '1' + result;
          }
      } else if (Number(a[i]) && Number(b[j])) {
          if (carryThe) {
              result = '1' + result;
          } else {
              carryThe = 1;
              result = '0' + result;
          } 
      } else {
          if (carryThe) {
              result = '1' + result;
              carryThe = 0;
          } else {
              result = '0' + result;
          }
      }
      i--;
      j--;
  }
  finish(a, i);
  finish(b, j);
  return carryThe ? carryThe + result : result;
  
  
};