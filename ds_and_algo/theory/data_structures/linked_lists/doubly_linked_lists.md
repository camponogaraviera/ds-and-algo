<div align='center'>
  <h1> Doubly-Linked Lists </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

In a `Doubly-Linked List`, every node has `two pointers`: one references the `previous node` and the other the `next node`.

The data structure also maintains a `Head node` and a `Tail node`.

---

# Use Cases

A `Doubly-Linked List` can be used to implement:

- A deque.
- A browser redo/undo feature.
- A Most Recently Used (MRU) eviction policy for caching systems.

---

# Implementation

Doubly-Linked Lists are not native (built-in) data structures in `Python` and [Modern JavaScript (ES6+)](https://github.com/camponogaraviera/javascript). However, they can be implemented with classes for [encapsulation](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/oop/intro.js).

In C++, the [Standard Template Library (STL)](https://en.cppreference.com/cpp/header) has the built-in [std::list](https://en.cppreference.com/cpp/container/list) container implemented as a `Singly-Linked List`.

---

# Big O

## Space Complexity

- Worst or Average case: `O(n)`. Because the memory required to store the entire `Doubly-Linked List` is directly proportional to the number of nodes inside.

## Time Complexity

Worst and Average cases have the same time complexity.

- `Search (lookup-by-value)`: $O(n)$. Because it requires traversing to the node that matches the given value.
- `Prepend (insert to the beginning)`: $O(1)$. Because it requires updating only the Head.
- `Deletion (from the beginning)`: $O(1)$. Because it requires updating only the Head.

- `Insertion (to the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.
- `Deletion (from the middle)`: $O(n)$. Because it requires traversing to the node just before the target index.

- `Append/Push (insert to the end)`: $O(1)$. Because it requires updating only the Tail. Without a Tail pointer, append is $O(n)$.
- `Pop (delete from the end)`: $O(1)$. Because the Tail has a reference to the previous node.
