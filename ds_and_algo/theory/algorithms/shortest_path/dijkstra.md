<div align='center'>
  <h1> Dijkstra </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Comparison with Bellman-Ford](#comparison-with-bellman-ford)

# About

Unlike [Bellman-Ford](./bellman_ford.md), [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) requires all edge weights to be non-negative.

---

# Use Cases

Dijkstra is used to find the shortest path from a given source node (vertex) to every reachable node in graphs with `non-negative weight edges` (connections).

Dijkstra is widely used as the foundation for shortest-path routing and pathfinding systems.

---

# Big O

Legend:

- $V$ = number of vertices (nodes).
- $E$ = number of edges (connections). Each edge stores information such as source, destination, and weight.
- $C$ = bound parameter of the arc weight of an edge.

## Space Complexity

Implementation-dependent.

- Adjacency List: $O(V + E)$ total space.
- Adjacency Matrix: $O(V^2)$ total space.

Total space: edge space plus auxiliary space. Where $O(V)$ is for auxiliary space, including distance and predecessor arrays.

## Time Complexity

Implementation-dependent.

- Using an adjacency list (to represent the graph) plus an array-based priority queue: $O(V^2)$.
- Using a [Fibonacci heap priority queue](https://en.wikipedia.org/wiki/Fibonacci_heap): $O(E + V \cdot log(V))$.
- Using a [Bucket Queue](https://en.wikipedia.org/wiki/Bucket_queue): $O(E + V \cdot C)$.
- Using a [van Emde Boas tree](https://en.wikipedia.org/wiki/Van_Emde_Boas_tree) as the priority queue: $O(E + V \cdot log C/ log log V \cdot C)$.
- Using a [Radix Heap](https://en.wikipedia.org/wiki/Radix_heap) + Fibonacci heap: $O(E + V \sqrt{log(C)})$.

## Comparison with Bellman-Ford

Consider a sparse graph, where the number of edges is proportional to the number of vertices ($E = O(V)$).

- Time complexity of Dijkstra (Fibonacci heap) = $O(E + V \cdot log(V)) = O(V + V \cdot log(V)) = O(V \cdot log(V))$.
- Time complexity of Bellman-Ford (edge list): $O(V \cdot E) = O(V \cdot V) = O(V^2)$.

---

# References

[1] https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
