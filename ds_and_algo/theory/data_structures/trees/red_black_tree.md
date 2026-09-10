<div align='center'>
  <h1> Red-Black Tree </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

A `Red-Black Tree (RBT)` is a `self-balancing Binary Search Tree`, but it is different than a B-tree (which is also self-balancing, but not a Binary Tree). It has `faster insertion and deletion operations` than AVL trees.

# Use Cases

A `RBT` is suitable:

- For enabling efficient searching, insertion, and deletion operations with $O(log\ n)$ average time complexity.

- For in-memory applications with moderate insertions and deletions.

Note: an RBT is not suitable for dealing with large-scale, insertion-heavy database applications where B-Trees are recommended.

# Big O

Considering $n$ to be the number of nodes in the RBT.

## Space Complexity

- `Worst and Average cases:` $O(n)$.

## Time Complexity

Worst and Average cases are the same, since an RBT always balances itself through rotations.

- `Search (lookup-by-value):` $O(log\ n)$. Since values are **sorted**, it is possible to discard half of the remaining nodes at each step.
- `Insertion:` $O(log\ n)$. Due to the Tree's height.
- `Deletion:` $O(log\ n)$. Due to the Tree's height.

Note: rotations have time complexity $O(1)$ per insert operation.

## Height Complexity

- `Worst case:` $O(log\ n)$.
- `Best case:` $O(log\ n)$.
