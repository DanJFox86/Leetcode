//  Time: O(n)
// Space: O(n)

// Given a list of airline tickets represented by pairs of departure and arrival 
// airports [from, to], reconstruct the itinerary in order. All of the tickets 
// belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

var findItinerary = function(tickets) {
  let reqCities = tickets.length + 1;
  let itinerary = [];
  let graph = {};
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });
  for (const city in graph) {
    graph[city].sort();
  }
  const traverse = (city, visited) => {
    if (itinerary.length) {
      return;
    }
    if (visited.length === reqCities) {
      itinerary = visited;
      return;
    }
    if (graph[city]) {
      for (let i = 0; i < graph[city].length; i++) {
        let temp = graph[city][i];
        graph[city].splice(i, 1);
        traverse(temp, [...visited, temp]);
        graph[city].splice(i, 0, temp);
      }
    }
  }
  traverse('JFK', ['JFK']);
  return itinerary;
};