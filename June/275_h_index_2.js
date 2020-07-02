//  Time: O(logn)
// Space: O(1)

// Given an array of citations sorted in ascending order (each citation 
// is a non-negative integer) of a researcher, write a function to compute
// the researcher's h-index. According to the definition of h-index on 
// Wikipedia: "A scientist has index h if h of his/her N papers have at 
// least h citations each, and the other N − h papers have no more than 
// h citations each."

var hIndex = function(citations) {
  if (citations.length === 0) {
    return 0;
  }
  if (citations.length === 1) {
    return citations[0] === 0 ? 0 : 1;
  }
  const N = citations.length;
  let left = 0;
  let right = N - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(`MID = ${mid}`)
    if (citations[mid] === N - mid) {
      return N - mid;
    } else if (citations[mid] < N - mid) {
      if (mid === N - 1) {
        return 0;
      }
      left = mid + 1;
    } else {
      if (mid === 0) {
        return N;
      }
      if (citations[mid - 1] < N - (mid - 1)) {
        return N - mid;
      }
      right = mid - 1;
    }
  }
};