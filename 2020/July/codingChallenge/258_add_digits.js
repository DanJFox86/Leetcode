//  Time Complexity: O(n)
// Space Complexity: O(1)

// Brute force would be add up all the numbers, if resulting number >= 10, do the same
// thing with that number. Continue until resulting number < 10.

// Need a more clever solution. Given the following number:
/*
  num = 5454545

  Iterate thru:
  i: 0 => sum = 0 + 5
  i: 1 => sum = 5 + 4 = 9
  i: 2 => sum = 9 + 5 = 14

  Here we have our first sum that is >= 10. Let's just fast forward to see how this 
  progresses...
  num = 5454545 => sum = 32
  num = 32 => sum = 5
  So 5 is returned at the end. But if the initial num has many digits, this process
  will have to be gone thru many times, increasing the time complexity.
  There is a way to do this in one pass. 
  
  a) Consider num = 545.
  Adding the digits together results in sum = 14, which after another pass leads to 5.
  b) Now consider num = 5454
  Adding the digits together results in sum = 18, which after another pass leads to 9.
  But wait, that's just the result for num = 545 plus the last digit, 4.
  c) Now consider the same number just with another 5 at the end, num = 54545
  Add digits together, sum = 23 => result = 5. Which is what we get if we add 5 to the
  result of 5454 and reduce it down again to 1 digit.

  At this point the pattern is starting to form and it looks as though the numbers
  can be reduced down to a single digit anytime the current sum >= 10.

  The solution to do this in O(n) time complexity is to do the reduction down to 1
  digit as the number is iterated thru.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = 0;
  let arr = num.toString()
               .split('')
               .map((char) => Number(char));
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= 10) {
      sum = Math.floor(sum / 10) + (sum % 10);
    }
  }
  return sum;
};