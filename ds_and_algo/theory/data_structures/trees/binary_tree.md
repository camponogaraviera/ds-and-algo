<div align='center'>
  <h1> Binary Tree </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
  - [Classification](#classification)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

In a `Binary Tree` (BT), each node has a `maximum of two child nodes` and a `minimum of one`.

The height $H$ of a BT is defined as the number of edges (connections) on the longest path from the root node to a leaf node (a node with no children).

## Classification

- `Full BT`: a node has either zero or two children.

```bash
     A         (Level 0)
   /   \
  B     C      (Level 1)
 / \
D   E          (Level 2)
```

- `Perfect BT`: all levels are completely filled, i.e., every parent (non-leaf) node has two child nodes, and all leaves are at the same level. The number of nodes for a Perfect BT of height $H$ and $L$ levels is: $n = 2^{H+1} - 1 = 2^L - 1$.

```bash
     A         (Level 0)
   /   \
  B     C      (Level 1)
 / \   / \
D   E F   G    (Level 2, all leaves at the same level)
```

- `Complete BT`: all levels are completely filled except possibly the last level, which is filled from left to right. Any Perfect BT is a Complete BT, but not vice-versa.

Example of a BT that is Complete, Full, but not Perfect:

```bash
     A         (Level 0)
   /   \
  B     C      (Level 1)
 / \
D   E          (Level 2)

The last level is missing nodes F and G.
```

- `Balanced BT`: for every node, the height difference (balance factor) between the left and right subtree is constrained to -1, 0, or +1. The height of a subtree is the number of edges (connections) from the node to the deepest leaf. A balance factor of +1 or -1 indicates a slight imbalance, but the Tree is still considered balanced within the context of an [AVL Tree](./avl_tree.md) or a [Red-Black Tree](./red_black_tree.md).

```bash
     A         (Level 0)
   /   \
  B     C      (Level 1)
 / \   / \
D   E F   G    (Level 2)

Node A: Left height = 2, Right height = 2 → Balanced (2 - 2 = 0).
Node B: Left height = 1, Right height = 1 → Balanced (1 - 1 = 0).
Leaf nodes (D, E, F, G) have no children → Balanced (0 - 0 = 0).
```

- `Unbalanced BT`: the height difference (balance factor) between the left and right subtree is NOT constrained to -1, 0, or +1.

Example of an unbalanced and degenerate (each node has only one child) BT:

```bash
A
 \
  B
   \
    C
     \
      D
```

Example of an unbalanced, but not degenerate BT:

```bash
      A
     /
    B
   / \
  D   E
```

# Use Cases

- Organizing hierarchical data, making it suitable for representing structures such as file systems, organizational charts, and parse trees.

- When balanced (see [AVL Tree](./avl_tree.md) and [Red Black Tree](./red_black_tree.md)), a BT provides efficient search, insertion, and deletion operations for `in-memory search structures` (do not confuse with in-memory data stores, such as Redis or Memcached).

- BTs are the foundation for various derived data structures, such as `Binary Search Tree (BST)`, `AVL Tree`, `Red Black Tree`, and `Binary Heap`.

# Big O

In a BT, all operations can be written as $O(H)$.

Legend:

- $H$: is the height of the BT (balanced or unbalanced).
- $n$: is the number of nodes in the BT.

## Space complexity

All `BTs` have the same space complexity.

- Worst and Average case: $O(n)$. As it stores each node once.

## Time Complexity

Considering the Worst case.

- Full BT:

  - `Search (lookup-by-value):` $O(log\ n)$ for balanced, and $O(n)$ for unbalanced.
  - `Insertion:` $O(log\ n)$ for balanced, and $O(n)$ for unbalanced.
  - `Deletion:` $O(log\ n)$ for balanced, and $O(n)$ for unbalanced.

- Perfect BT (**always balanced**):

  - `Search (lookup-by-value):` $O(log\ n)$.
  - `Insertion:` $O(log\ n)$.
  - `Deletion:` $O(log\ n)$.

- Complete BT (**always height-balanced**):

  - `Search (lookup-by-value):` $O(log\ n)$.
  - `Insertion:` $O(log\ n)$.
  - `Deletion:` $O(log\ n)$.

- Balanced BT:

  - `Search (lookup-by-value):` $O(log\ n)$.
  - `Insertion:` $O(log\ n)$.
  - `Deletion:` $O(log\ n)$.

- Unbalanced BT (in the worst case, it degenerates into a [Linked List](../linked_lists/linked_lists.md)):

  - `Search (lookup-by-value):` $O(n)$. Because it requires traversing the Linked List to find the right node.
  - `Insertion:` $O(1)$ if appending to the tail, or $O(n)$ if appending to the middle of the Linked List.
  - `Deletion:` $O(n)$. Similar to search.
    - Note: deletion from the beggining or the end is O(1) if the implementation keeps track of the Head or Tail node.

## Height Complexity

- `Worst case (degenerate/unbalanced BT):` $O(n)$.
- `Best case (balanced BT):` $O(log\ n)$.
