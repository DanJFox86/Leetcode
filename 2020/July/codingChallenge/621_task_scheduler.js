//  Time: O(n)
// Space: O(1)

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */



var leastInterval = function(tasks, n) {
  let tracker = new Array(26).fill(0);
  for (let task of tasks) {
    let code = task.charCodeAt(0) - 'A'.charCodeAt(0);
    tracker[code] += 1;
  }
  tracker.sort((a, b) => a - b)
  let i = 25;
  while (i >= 0 && tracker[i] === tracker[25]) {
    i--;
  }
  return Math.max(
    // case 1
    // AB...AB... = (arr[25] - 1) * (n + 1)
    // AB...AB...AB = (arr[25] - 1) * (n + 1) + (25 - i)
    (tracker[25] - 1) * (n + 1) + (25 - i),

    // case 2
    // e.g. (ABC)(ABD)(ABEF)
    tasks.length
  );
    
  };