<div align='center'>
  <h1> B-Tree </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

A [B-Tree](https://en.wikipedia.org/wiki/B-tree) is a self-balancing Tree data structure. It is a multi-way Tree (`not a Binary Tree`) since each node can have more than two child nodes. For this reason, it is said to generalize a Binary Search Tree.

# Use Cases

A `B-Tree` is suitable:

- For insertion-intensive database applications. Unlike a Balanced Binary Search Tree, a B-Tree minimizes rebalancing costs by distributing keys across nodes, making it efficient for frequent insertions.

- For file systems (e.g., NTFS, HFS+, and ext4) responsible for organizing, storing, and retrieving files on a storage device (e.g., HDDs, SSDs).

- For large database indexing with heavy read and write operations.

# Big O

Considering $N$ to be the number of nodes in the B-Tree, and $M$ the branching factor (max. number of children per node).

## Space Complexity

- `Worst and Average cases:` $O(N)$.

## Time Complexity

Worst and Average cases are the same, since a B-Tree always balances itself.

- `Access (lookup-by-index):` $O(log\ N)$.
- `Search (lookup-by-value):` $O(log\ N)$.
- `Insertion:` $O(log\ N)$.
- `Deletion:` $O(log\ N)$.

## Height Complexity

- `Worst case:` $O(log_M\ N)$.
- `Best case:` $O(log_M\ N)$.
