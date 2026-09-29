<div align='center'>
  <h1> Stacks </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
  - [Considerations](#considerations)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Unlike Arrays, `Stacks` do not allow random access operations. Stacks follow the `LIFO (Last In First Out)` order, such that a pop operation removes the last element.

Obs: A `stack overflow` occurs when a call stack overflows, i.e., grows beyond its `allocated memory size limit`. This can happen, for example, when a `recursive function` keeps calling itself indefinitely without a proper `base (stopping) case`. JavaScript ES6 (ECMAScript 2015) supports [Tail-Call Optimization (TCO)](https://en.wikipedia.org/wiki/Tail_call) in strict mode. However, major JavaScript engines such as V8 (Chrome and Node.js) and SpiderMonkey (Firefox) do not implement this optimization.

---

# Use Cases

A `Stack` can be used to implement:

- Browser history.
- Browser undo/redo.
- [Depth-first Search](../../algorithms/traversal/dfs.md).

---

# Implementation

`Stacks` are not native (built-in) data structures in `Python` and `JavaScript`. Although not required, Stacks can be implemented with classes for [encapsulation](https://github.com/camponogaraviera/javascript/blob/main/js-course/notebooks/oop/intro.js), i.e., to organize the code into reusable objects that contain attributes and methods.

- Python:
  - Stacks can be implemented with either a `List` or a `Singly-Linked List`. For lists, use `list.append()` and `list.pop()`.

- JavaScript:
  - Stacks can be implemented with an `Array` or a `Linked List`. For arrays, use `myArray.push()` and `myArray.pop()`.

- C++:
  - Has the built-in [std::stack](https://en.cppreference.com/cpp/container/stack) from the [Standard Template Library (STL)](https://en.cppreference.com/cpp/header).

## Considerations

- Implementing a `Stack with an Array` allows `fast access` due to cache locality, since elements are stored closer to each other in memory `compared to Linked Lists`.
  - However, dynamic arrays may incur memory overhead when resizing, as they may need to allocate additional capacity and move existing elements.

- Implementing a `Stack with a Linked List` avoids the need for capacity-based resizing, as nodes can be allocated and deallocated individually during insertion/removal of elements.
  - However, Linked Lists have a memory overhead associated with maintaining pointers for each node.

---

# Big O

## Space Complexity

- `Worst or Average case:` $O(n)$. Because the amount of memory required to store the entire Stack is directly proportional to the number of elements in it.

## Time Complexity

Worst and Average cases have the same time complexity.

- `Insertion (a.k.a Push/Append to the top)`: $O(1)$.
- `Deletion (a.k.a Pop from the top)`: implementation-dependent, i.e., $O(1)$ for Array-based or Doubly-Linked List-based (top = head/tail), and $O(n)$ for Singly-Linked List-based (top = tail).
- `Peek at the top`: $O(1)$.
