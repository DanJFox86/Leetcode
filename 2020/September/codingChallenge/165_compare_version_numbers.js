//  Time: O(n)
// Space: O(1)

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.').map((str) => Number(str));
  let v2 = version2.split('.').map((str) => Number(str));
  let i1 = 0;
  let i2 = 0;
  const isGreater = (list, idx) => {
    while (idx < list.length) {
      if (list[idx] > 0) {
        return true;
      }
      idx++;
    }
    return false;
  }
  while (i1 < v1.length && i2 < v2.length) {
    if (v1[i1] > v2[i2]) {
      return 1;
    } else if (v1[i1] < v2[i2]) {
      return -1;
    }
    i1++;
    i2++;
  }
  if (isGreater(v1, i1)) {
    return 1;
  }
  if (isGreater(v2, i2)) {
    return -1;
  }
  return 0;
};