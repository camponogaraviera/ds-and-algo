<div align='center'>
  <h1> Singly-Linked Lists </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

A `Singly-Linked List` has only `one pointer` that references the `next node`.

# Use Cases

A `Singly-Linked List` can be used to implement:

- Queues.
- Graphs.
- Hash tables.
- Binary trees.
- Process scheduling in OS, etc.

# Implementation

Singly-Linked Lists are not native (built-in) data structures in `Python` and `JavaScript`. However, they can be implemented with classes for encapsulation, i.e., to organize the code into reusable objects that contain attributes and methods. C++11 has a built-in `Singly-Linked List` in the `std::forward_list` from the `Standard Template Library (STL)`.

# Big O

## Space Complexity

- **Worst or Average case**: `O(n)`. Because the amount of memory required to store the entire `Singly-Linked List` is directly proportional to the number of nodes in it.

## Time Complexity

Worst and Average cases have the same time complexity.

- `Search (lookup-by-value)`: $O(n)$. Because it requires traversing to the node that matches the given value.
- `Prepend (insert to the beginning)`: $O(1)$. Because it requires updating only the Head.
- `Deletion (from the beginning)`: $O(1)$. Because it requires updating only the Head.

- `Insertion (to the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.
- `Deletion (from the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.

- `Append/Push (insert to the end)`: $O(1)$. Because it requires updating only the Tail.
- `Pop (delete from the end)`: $O(n)$. Because it requires looping from the Head until the second-to-last node.
