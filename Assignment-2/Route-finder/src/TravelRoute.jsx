import React, { useEffect, useState } from 'react';

// List of cities your son mentioned
const citiesVisited = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona'];

// List of train tickets as directed edges
const trainTickets = [
  ['Paris', 'Skopje'],
  ['Zurich', 'Amsterdam'],
  ['Prague', 'Zurich'],
  ['Barcelona', 'Berlin'],
  ['Kiev', 'Prague'],
  ['Skopje', 'Paris'],
  ['Amsterdam', 'Barcelona'],
  ['Berlin', 'Kiev'],
  ['Berlin', 'Amsterdam'],
];

// Build the graph from train tickets
const buildGraph = (tickets) => {
  const graph = {};
  tickets.forEach(([from, to]) => {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  });
  return graph;
};

// Depth-First Search to find the travel route
const findTravelRoute = (graph, start, cities, visited = [], path = []) => {
  path.push(start);
  visited.push(start);

  // If all cities are visited, return the path
  if (visited.length === cities.length) {
    return path;
  }

  // Explore neighbors
  const neighbors = graph[start] || [];
  for (let neighbor of neighbors) {
    if (!visited.includes(neighbor) && cities.includes(neighbor)) {
      const result = findTravelRoute(graph, neighbor, cities, [...visited], [...path]);
      if (result) {
        return result;
      }
    }
  }

  // Backtrack if no valid route is found
  return null;
};

const TravelRoute = () => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const graph = buildGraph(trainTickets); // Build the graph
    const startingCity = 'Kiev'; // Known starting city
    const travelRoute = findTravelRoute(graph, startingCity, citiesVisited);

    if (travelRoute) {
      setRoute(travelRoute);
    } else {
      setRoute(['No valid route found']);
    }
  }, []);

  return (
    <div className="route-container">
      <h1>Son Travel Route</h1>
      {route.length > 1 ? (
        <div className="route-graph">
          {route.map((city, index) => (
            <React.Fragment key={index}>
              <div className="city-node">
                <span>{city}</span>
              </div>
              {index < route.length - 1 && <div className="arrow-line"></div>}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="no-route">No valid route found</div>
      )}
    </div>
  );
};

export default TravelRoute;
