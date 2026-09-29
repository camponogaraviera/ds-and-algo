<div align='center'>
  <h1> Bellman-Ford </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Comparison with Dijkstra](#comparison-with-dijkstra)

# About

Unlike [Dijkstra](./dijkstra.md), [Bellman-Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) can work in graphs with both positive and negative weight edges.

---

# Use Cases

Bellman-Ford is used to find the shortest path from a given source node (vertex) to every reachable node in graphs with `positive and negative weight edges` (connections).

---

# Big O

Legend:

- $V$ = number of vertices (nodes).
- $E$ = number of edges (connections). Each edge stores information such as source, destination, and weight.

## Space Complexity

Implementation-dependent for the graph representation.

- Edge List: $O(V + E)$ total space.
- Adjacency List: $O(V + E)$ total space.
- Adjacency Matrix: $O(V^2)$ total space.

Total space: edge space plus auxiliary space. Where $O(V)$ is for auxiliary space, including distance and predecessor arrays.

## Time Complexity

Standard implementation.

Worst case: $O(V \cdot E)$.
Best case: $O(E)$ with early termination.

Note: Early termination is an optimization that stops the algorithm early if no updates are made in an iteration.

## Comparison with Dijkstra

Consider a sparse graph, where the number of edges is proportional to the number of vertices ($E = O(V)$).

- Time complexity of Bellman-Ford (edge list): $O(V \cdot E) = O(V \cdot V) = O(V^2)$.
- Time complexity of Dijkstra (Fibonacci heap) = $O(E + V \cdot log(V)) = O(V + V \cdot log(V)) = O(V \cdot log(V))$.

---

# References

[1] https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
