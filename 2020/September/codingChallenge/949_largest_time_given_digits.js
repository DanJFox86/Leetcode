/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let nums = {};
  for (let num of A) {
    if (!nums[num]) {
      nums[num] = 0;
    }
    nums[num] += 1;
  }
  // First digit can be 0-2
  // 2nd digit: if first is 0 or 1, 0-9. If first is 2, 0-3
  // 3rd digit: 0-5
  // 4th digit: 0-9
  // Make all combinations of nums
  // If num % 100 >= 60, invalid number
  // If num >= 2359, invalid number
  
  const isValid = (time) => {
    if (time % 100 >= 60) {
      return false;
    }
    if (time >= 2360) {
      return false;
    }
    return true;
  }
  
  const go = (time) => {
    if (!A.length) {
      if (isValid(time)) {
        return time
      }
      return -1;
    }
    let max = -1;
    for (let i = 0; i < A.length; i++) {
      let num = A.splice(i, 1);
      max = Math.max(max, go(time + Math.pow(10, A.length) * num));
      A.splice(i, 0, num);
    }
    return max;
  }
  let maxTime = go(0);
  if (maxTime === -1) {
    return '';
  }
  maxTime = maxTime.toString();
  while (maxTime.length < 4) {
    maxTime = '0' + maxTime;
  }
  return maxTime.slice(0, 2) + ':' + maxTime.slice(2);
  
};