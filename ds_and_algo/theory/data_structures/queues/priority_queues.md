<div align='center'>
  <h1> Priority Queues </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

A `Priority Queue` differs from a regular Queue (FIFO) in that each element inserted is assigned a priority. Elements with higher priorities are served before elements with lower priorities.

# Use Cases

A `Priority Queue` can be used to implement:

- A waiting list for an emergency room.
- VIP tickets Queue for an event.
- [Dijkstra](../../algorithms/shortest_path/dijkstra.md), for finding the shortest path in a graph.

# Implementation

A `Priority Queue` can be implemented with either a [Binary Heap](../trees/binary_heap.md) or a [Balanced Binary Search Tree](../trees/binary_search_tree.md).

Key features:

1. **Min-heap**: lower priority numbers come out first (this is standard for priority queues).

2. **Stable Ordering**: items with the same priority are returned in insertion order (FIFO).

# Big O

## Space Complexity

- `Worst or Average case:` $O(n)$. Because the amount of memory required to store the entire Priority Queue is directly proportional to the number of elements in it.

## Time Complexity

Considering an implementation based on a [Binary Heap](../trees/binary_heap.md) (BH), where the Worst and Average cases are the same:

- `Search (lookup-by-value)`: $O(n)$. Since values are **not sorted**, it requires traversing over all entries in the BH to find the right value given the index.
- `Insertion (a.k.a Push)`: $O(log\ n)$. Since a BH is always a balanced Binary Tree whose height is $O(log\ n)$.
- `Deletion (a.k.a Pop)`: $O(log\ n)$. same as above.

Considering an implementation based on a `Balanced Binary Search Tree` (e.g., [AVL Tree](../trees/avl_tree.md), [Red-Black Tree](../trees/red_black_tree.md)), where the Worst and Average cases are the same:

- `Search (lookup-by-value)`: $O(log\ n)$. Since values are **sorted**, it is possible to discard half of the remaining nodes at each step.
- `Insertion (a.k.a Push)`: $O(log\ n)$. Due to the height of a balanced Tree.
- `Deletion (a.k.a Pop)`: $O(log\ n)$. Due to the height of a balanced Tree.
- `Peek`: $O(1)$. Returns the next element to be popped.

## Height of a Balanced Tree

- `Worst case`: $O(log\ n)$.
- `Best case`: $O(log\ n)$.
