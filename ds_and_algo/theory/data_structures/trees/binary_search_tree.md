<div align='center'>
  <h1> Binary Search Tree </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

A `Binary Search Tree (BST)` is a `Binary Tree` (BT) that is `inherently sorted by value` based on its structure:

- BSTs have the property: `Left child < Parent < Right child`.
  - The left subtree of the parent node contains only nodes with smaller values than the parent node.
  - The right subtree of the parent node contains only nodes with greater values than the parent node.

Because they are sorted, all BSTs are BTs, but not all BTs are BSTs.
Example:

```bash
     5
   /   \
  2    10
 / \   / \
1   3 6  11
```

# Use Cases

A `BST` is suitable as a database that preserves relationships between data.

Note: a balanced BST provides an average-case lookup time complexity of $O(log N)$. In contrast, a Hash Table offers an average-case lookup-by-key time complexity of $O(1)$, but it does not maintain any relationships or ordering between stored elements.

# Implementation

It is possible to implement a BST with `in-order traversal (left, root, right)` using `recursion`, which always visits nodes in ascending order.

# Big O

Considering $n$ to be the number of nodes in the BST.

## Space Complexity

- `Worst and Average cases:` $O(n)$.

## Time Complexity

Average case (balanced BST):

- `Search (lookup-by-value):` $O(log\ n)$. Since values are **sorted**, it is possible to discard half of the remaining nodes at each step.
- `Insertion:` $O(log\ n)$. Due to the Tree's height when balanced.
- `Deletion:` $O(log\ n)$. Due to the Tree's height when balanced.

Worst case (unbalanced BST degenerates into a [Linked List](../linked_lists/linked_lists.md)):

- `Search (lookup-by-value):` $O(n)$. Because it requires traversing the Linked List to find the right node.
- `Insertion:` $O(1)$ if appending to the tail, or $O(n)$ if appending to the middle of the Linked List.
- `Deletion:` $O(n)$. Similar to search.
  - Note: deletion from the beggining or the end is O(1) if the implementation keeps track of the Head or Tail node.

## Height Complexity

- `Worst case:` $O(h) = O(n)$ for an unbalanced BST.
- `Best case:` $O(h) = O(log\ n)$ for a balanced BST.
