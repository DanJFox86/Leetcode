//  Time Complexity: O(n^2)
// Space Complexity: O(n)

/*
  1. Create memo array, index corresponds to class ID and value is how many prereqs
     the respective class has.
  2. Go thru the prereq list and increment the number of prereqs in the memo array
     for each class that has a prereq.
  3. Go thru the memo array and create a queue array of all the classes with 
     no prereqs.
  4. While this queue has classes in it, remove a class from the queue, push it onto 
     a result array to keep track of a possible order in which the classes can be
     taken, and scan thru the prereq list. For every class that has this class as a
     prereq, decrement its total # of prereqs by 1. If the # of prereqs hits 0, add
     that class to the queue.
  5. Do this until the queue has no classes in it.
  6. If all the classes have gone thru the queue, return the result array.
  6. If not, return the default value of an empty array.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    // console.log(v)
    inDegrees[v]++;
  }

  let q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  let res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    // for (const [v, u] of prerequisites) {
    //   if (u === u0) {
    //     inDegrees[v]--;
    //     if (inDegrees[v] === 0) q.push(v);
    //   }
    // }
     for (let i = 0; i < prerequisites.length; i++) {
      const [v, u] = prerequisites[i];
      if (u === u0) {
        inDegrees[v]--;
        prerequisites.splice(i, 1);
        i--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
};