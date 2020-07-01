//  Time: O(n)
// Space: O(1)
// I: array of integers, values are 0, 1 or 2.
// O: Nothing, do in place
// C: time O(n), space O(1), do sorting in place
// E: empty array?

// Sorting these essentially means 0s at the front, 2s at the back and 1s in the middle.
// 1. Start with 3 pointers:
// -- Index where next zero should go (initialized to 0)
// -- Index where next two should go (initialized to last element)
// -- Index of number being considered (initialized to last element)
// 2. When index of next zero and index of number being considered have passed each other, 
//    then all elements have been looked at.
// 3. While index of next zero <= index of number being considered:
// -- If number being looked at is 0:
// ---- Swap with number at index for next zero, increment up index for next zero.
// -- Else if number being looked at is 2:
// ---- Swap with number at index for next two, decrement down index for next two.
// ---- Also decrement index of number being looked at.
// -- Else (number being looked at must be 1):
// ---- Leave it be, decrement index of number being looked at.

var sortColors = (nums) => {
  let swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let i = 0;
  let j = nums.length - 1;
  let k = j;
  while (i <= j) {
    if (nums[j] === 0) {
      swap(i, j);
      i++;
    } else if (nums[j] === 2) {
      swap(j, k);
      k -= 1;
      j -= 1;
    } else {
      j -= 1;
    }
  }
}