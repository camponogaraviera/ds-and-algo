<div align='center'>
  <h1> Depth-first Search </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Depth-first Search (DFS) is both a `Graph traversal` and a `Tree traversal` algorithm.

- Characteristics:
  - Explores each path (branch) from the root node to the deepest node along that path before backtracking.
  - Requires less memory than BFS because it only needs to store the path from the root node to the current [leaf node](../../data_structures/trees/trees.md), whereas BFS must store all nodes at the current level.
  - It is preferable if the solution is known to be farther (deeper) from the root and finding the shortest path is not required.
  - Not ideal if the Tree or Graph is too deep and solutions are rare.
  - Can be applied to weighted graphs, however, it does not guarantee to find the shortest or optimal path in either weighted or unweighted Graphs. Algorithms such as [A\*](../shortest_path/a_star.md), [Dijkstra’s](../shortest_path/dijkstra.md), and [Bellman Ford](../shortest_path/bellman_ford.md) are preferred for weighted graphs where optimal pathfinding is required.

# Use Cases

Use DFS to solve a maze or to check whether a node exists in a Tree or a Graph.

# Implementation

DFS can be applied to both a Tree (no cycles, single root) and a Graph (potentially cyclic, multiple components).

Visited nodes need to be tracked? Regardless of the implementation (recursive or iterative), when dealing with a Tree, there is no need to track/store visited nodes explicitly (since there are no cycles). In a Graph, an additional `visited set` is typically used to avoid processing the same node multiple times.

DFS is naturally implemented with [recursion](../recursion/recursion.md), where the call stack inherently manages backtracking and nodes to be explored.

The alternative `iterative-based` implementation uses a [stack data structure](../../data_structures/stacks/stacks.md) to `simulate the recursive process that keeps track of nodes to be explored` (not visited). The Stack ensures that deeper nodes are processed first before backtracking to shallower nodes.

Consider the following Complete and Perfect Binary Tree (Max heap):

```bash
     10
   /    \
  9      8
 / \    / \
7   6  5   4
```

It has three main order traversals:

- `PreOrder` (the traditional way, parent -> left -> right child node): [10, 9, 7, 6, 8, 5, 4]. This is useful to recreate the Tree.

- `InOrder` (nodes are explored in either alphabetical or numerical order): [4, 5, 6, 7, 8, 9, 10]. This is useful to have a sorted results Array.

- `PostOrder` (a backward approach where the deepest child nodes (left to right) are explored first and then the parents): [7, 6, 9, 5, 4, 8, 10].

# Big O

Is implementation-dependent.

Legend:

- $D$: depth of the Tree (longest root-to-leaf path).
- $V$: total number of vertices (nodes) of the Tree or Graph.
- $E$: number of edges (connections) of the Tree or Graph.

## Space Complexity

Worst and Average case are the same.

- Recursive Implementation (**preferred**):

  - `Tree:` $O(D)$. Due to the `call stack depth = longest path`.
    - Assumes a balanced tree. Worst case for a skewed tree is $O(V)$.
  - `Graph:` $O(V)$. Due to the `visited set` + `call stack depth`.

- Iterative Implementation (alternative):

  - `Tree:` $O(D)$. Due to the `Stack data structure`.
    - $D$ is $O(\log\ V)$ for balanced Trees, but $O(V)$ for degenerate (skewed) ones.
  - `Graph:` $O(V)$. Due to the `visited set` + `Stack data structure`.

## Time Complexity

Worst and Average case are the same.

- `Tree`: $O(V + E) = O(V + (V-1)) = O(2V-1) = O(V)$.
- `Graph`: $O(V + E)$.
