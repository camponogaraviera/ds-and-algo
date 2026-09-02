<div align='center'>
  <h1> Breadth-first Search </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Breadth-first Search (BFS) is both a `Graph traversal` and a `Tree traversal` algorithm, and it is called `Breadth-First Traversal (BFT)` when applied to trees. 

For example, a [Binary Search Tree (BST)](../../../implementations/python/data_structures/trees/binary_search_tree.py) data structure can have a BFT method that visits all nodes level by level. However, the standard BST `search()` method is not a BFS, it uses the BST ordering property (`left < root < right`) and gives `O(log n)` time complexity for a balanced binary tree.

Use BFS/BFT when:

- You want level-order traversal.
- You need the closest/shortest path (more relevant in graphs).
- You don't care about ordering.

- Characteristics of BFS:
  - Explores all nodes at the current depth level before moving on to the next level.
  - Requires more memory than DFS to temporarily store nodes waiting to be processed (i.e., discovered but not yet explored) in a Queue.
  - It is the best choice if the solution is known to be closer to the root.
  - Not ideal if the Tree or Graph is too wide.
  - Cannot be applied to find the shortest path in weighted Graphs because it assumes that all edges have the same (or uniform) weight. For those, algorithms such as [A\*](../shortest_path/a_star.md), [Dijkstra’s](../shortest_path/dijkstra.md) and [Bellman Ford](../shortest_path/bellman_ford.md) are used.

# Use Cases

- Shortest path: BFS can be used for finding the shortest path in `unweighted` Graphs, or in Graphs where all edges (connections) have the same weight.

- File Sharing: BFS can be used to find the shortest path for file transfer in a peer-to-peer network.

- Social network: BFS is suitable for traversing Social Network Graphs to find users at a specific distance or depth (e.g., friend of friends). Neo4j is one such Graph-like database.

- Use BFS for querying related items in a Graph-like database of a recommendation engine.

# Implementation

BFS can be applied to both a Tree (no cycles, single root) and a Graph (potentially cyclic, multiple components).

Visited nodes need to be tracked? Regardless of the implementation (recursive or iterative), when dealing with a Tree, there is no need to track/store visited nodes explicitly (since there are no cycles). In a Graph, an additional `visited set` is typically used to avoid processing the same node multiple times.

BFS is naturally implemented with `iteration` using a [Queue](../../data_structures/queues/queues.md) (FIFO) to manage the order in which nodes are processed, i.e., to hold nodes that are waiting to be processed (not to store visited nodes permanently). Nodes are enqueued when discovered and dequeued (removed) when processed. This ensures that all nodes at depth $D$ are processed before nodes at depth $D+1$.

`Recursive BFS is avoided` because BFS inherently relies on a Queue (FIFO) rather than a Stack (LIFO, which is natural for recursion). While it is technically possible to implement BFS with recursion using function calls as a Queue substitute, it is inefficient and impractical due to recursion depth limits.

# Big O

Legend:

- $W$: maximum width of the Tree.
- $V$: total number of vertices (nodes) of the Tree or Graph.
- $E$: number of edges (connections) of the Tree or Graph.

## Space Complexity

Worst and Average case are the same.

- Recursive Implementation (**should be avoided**):
  - `Tree`: not well-defined for the Queue-based approach and avoided.
  - `Graph`: $O(V)$ (if somehow implemented recursively, due to `visited set` + `call stack depth`).

- Iterative Implementation (preferred):
  - `Tree`: $O(W)$. Due to the `Queue data structure`.
    - The Queue holds nodes level by level, and the maximum nodes in the Queue at any time is the width of the widest level. For a perfect Binary Tree of depth $D$, $W=O(2^D)$.
  - `Graph`: $O(V)$. Due to the `visited set` + `Queue data structure`.
    - In the worst case, the Queue may hold all nodes (e.g., in a complete graph), and we must also account for the `visited` set.

## Time Complexity

Worst and Average case are the same.

- `Tree`: $O(V + E) = O(V + (V-1)) = O(2V-1) = O(V)$.
- `Graph`: $O(V + E)$.
