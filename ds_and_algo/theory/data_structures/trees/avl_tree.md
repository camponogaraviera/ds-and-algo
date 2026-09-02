<div align='center'>
  <h1> AVL Tree </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

An `AVL Tree` is a `self-balancing Binary Search Tree`, but it is different than a B-tree (which is also self-balancing, but not a Binary Tree). It has `faster lookup-by-value operations` than Red-Black Trees.

# Use Cases

An `AVL Tree` is useful in:

- Enabling efficient search, insertion, and deletion operations with $O(log\ n)$ time complexity.

- Applications with lookup-intensive (search) operations and moderate insert/delete rates.

- Implementing memory-based indexing, where fast retrieval is essential, such as `database indexes` and `in-memory search structures` (do not confuse with in-memory data stores, such as Redis or Memcached).
  - Obs: a database index stores a sorted copy of selected columns along with pointers (references) to the actual rows in the database.

Note: an AVL Tree is only suitable for moderate insert/delete rates because an AVL Tree requires rebalancing with every insertion and deletion operation to maintain its height property. These rebalancing operations involve rotations that introduce some overhead, which can become a performance bottleneck.

# Big O

Considering $n$ to be the number of nodes in the AVL Tree.

## Space Complexity

- `Worst and Average cases:` $O(n)$.

## Time Complexity

Worst and Average cases are the same, since an AVL Tree always balances itself through rotations.

- `Search (lookup-by-value):` $O(log\ n)$. Since values are **sorted**, it is possible to discard half of the remaining nodes at each step.
- `Insertion:` $O(log\ n)$. Due to the Tree's height.
- `Deletion:` $O(log\ n)$. Due to the Tree's height.

Note: rotations have time complexity $O(1)$ per insert operation.

## Height Complexity

- `Worst case:` $O(log\ n)$.
- `Best case:` $O(log\ n)$.
