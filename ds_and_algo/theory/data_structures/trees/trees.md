<div align='center'>
  <h1> Trees </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)

# About

Trees follow a hierarchical structure and they are `not linear` such as Arrays or Linked Lists. A Tree is `a type of Graph` consisting of `vertices (nodes)` and `edges (connections)` where any two vertices are connected by exactly `one path`, i.e., there are `no cycles` in a Tree.

- Properties:
  - The number of edges is equal to the number of nodes minus one `(E = V - 1)`.
  - The `top node` in the Tree is named `root`.
  - Each node descends from only one `parent node`, except the root node that has no parent.
  - Each `parent node` can have zero or more `child nodes`.
  - Each `parent node` has a `value` and a `reference` (pointer) to its children nodes.
  - A `leaf node` is a node that has no children.
  - The `height of a tree` is defined as the number of edges (connections) on the longest path from the root node to a leaf node (a node with no children).

Note: a [Linked List](../linked_lists/linked_lists.md) is a degenerated Tree with a single branch or path and, therefore, is a linear data structure.

# Use Cases

- Social media comments.
  - Comments on social media platforms often follow a hierarchical structure. The original post is the root node, and all subsequent comments and replies form the children nodes and branches of the tree.

- AI Decision Trees.

- HTML Documents.
  - Can be represented as a Document Object Model (DOM) tree. The root of the tree is the <html> tag, and all other HTML elements (such as `<body>, <div>, <p>`, etc.) form the nodes of the tree.
