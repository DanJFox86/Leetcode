
// Given all the cities and flights, together with starting city src 
// and the destination dst, your task is to find the cheapest price from src 
// to dst with up to k stops. If there is no such route, output -1.

//  Time: O(n^k)
// Space: O(n^2)

var findCheapestPrice = function(n, flights, src, dst, K) {
  let tracker = {};
  let globalMin = Infinity;
  for (let i = 0; i < flights.length; i++) {
    if (!tracker[flights[i][0]]) {
      tracker[flights[i][0]] = {};
    }
    tracker[flights[i][0]][flights[i][1]] = flights[i][2];
  }
  const findMin = (current, steps, cost) => {
    if (cost > globalMin) {
      return;
    }
    for (let city in tracker[current]) {
      if (Number(city) === dst) {
        globalMin = Math.min(globalMin, tracker[current][city] + cost);
      } else {
        if (steps < K) {
          findMin(city, steps + 1, cost + tracker[current][city]);
        }
      }
    }
  }
  findMin(src, 0, 0);
  return globalMin !== Infinity ? globalMin : -1;
};