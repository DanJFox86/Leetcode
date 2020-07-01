//  Time: O(n^2)
// Space: O(n)
// Suppose you have a random list of people standing in a queue. 
// Each person is described by a pair of integers (h, k), where h is the height of 
// the person and k is the number of people in front of this person who have a height 
// greater than or equal to h. Write an algorithm to reconstruct the queue.

var reconstructQueue = function(people) {
  let myPeople = [...people].sort((a, b) => {
    if (b[0] - a[0] > 0) {
      return 1;
    } else if (b[0] - a[0] < 0) {
      return -1;
    } else {
      return a[1] - b[1];
    }
  });
  let result = new Array(people.length);
  while (myPeople.length) {
    let curr = myPeople.pop();
    let count = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === undefined) {
        if (count === curr[1]) {
          result[i] = curr;
          break;
        }
        count++;
      }
    }
  }
  return result;
};