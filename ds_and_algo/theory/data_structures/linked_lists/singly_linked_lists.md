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

In a `Singly-Linked List`, every node has a single `link/reference` to the `next node`. 

The data structure also maintains a `Head node` and a `Tail node`.

---

# Use Cases

A `Singly-Linked List` can be used to implement:

- Queues, providing a more efficient implementation than arrays.
- Stacks, providing more flexibility when it comes to dynamic resizing.
- Process scheduling in OS, etc.

---

# Implementation

Singly-Linked Lists are not native (built-in) data structures in `Python` and [Modern JavaScript (ES6+)](https://github.com/camponogaraviera/javascript). However, they can be implemented with classes for [encapsulation](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/oop/intro.js).

In C++, the [Standard Template Library (STL)](https://en.cppreference.com/cpp/header) has the built-in [std::forward_list](https://en.cppreference.com/cpp/container/forward_list) container implemented as a `Singly-Linked List`.

---

# Big O

## Space Complexity

- **Worst or Average case**: `O(n)`. Because the memory required to store the entire `Singly-Linked List` is directly proportional to the number of nodes inside.

## Time Complexity

Worst and Average cases have the same time complexity.

- `Search (lookup-by-value)`: $O(n)$. Because it requires traversing to the node that matches the given value.
- `Prepend (insert to the beginning)`: $O(1)$. Because it requires updating only the Head.
- `Deletion (from the beginning)`: $O(1)$. Because it requires updating only the Head.

- `Insertion (to the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.
- `Deletion (from the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.

- `Append/Push (insert to the end)`: $O(1)$. Because it requires updating only the Tail. Without a Tail pointer, append is $O(n)$.
- `Pop (delete from the end)`: $O(n)$. Because it requires looping from the Head until the second-to-last node.
