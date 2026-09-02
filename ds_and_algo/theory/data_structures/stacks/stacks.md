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

Obs: A `stack overflow` occurs when a call stack overflows, i.e., grows beyond its `allocated memory size limit`. This typically happens when a `recursive function` keeps calling itself indefinitely without a proper `base (stopping) case`. `JavaScript ES6 supports Tail-Call optimization` allowing recursion calls without the need to add a `stack frame` to the call stack, and thus avoiding the stack overflow problem.

# Use Cases

A `Stack` can be used to implement:

- Inner function calls.
- Browser history.
- Browser undo/redo.
- [Depth-first Search](../../algorithms/traversal/dfs.md).

# Implementation

`Stacks` are not native (built-in) data structures in `Python` and `JavaScript`. Although not required, Stacks can be implemented with classes for encapsulation, i.e., to organize the code into reusable objects that contain attributes and methods.

- Python:
  - Stacks can be implemented with either a `List` or a `Singly-Linked List`. For lists, use `list.append()` and `list.pop()`.

- JavaScript:
  - Stacks can be implemented with an `Array` or a `Linked List`. For arrays, use `myArray.push()` and `myArray.pop()`.

- C++:
  - Has a built-in Stack in the `Standard Template Library (STL)`.

## Considerations

- Implementing a `Stack with an Array` allows `fast access` due to cache locality since elements are stored closer to each other in memory `as compared to Linked Lists`.
  - However, dynamic arrays have a memory overhead associated with resizing since they need to double their memory as soon as they reach the limit. It allocates a new Array (2x the current size), copies elements, and deallocates the old one.

- Implementing a `Stack with a Linked List` can be more flexible when it comes to dynamic resizing (can grow and shrink) during insertion/removal of elements in the Stack as compared to a dynamic Array.
  - However, Linked Lists have a memory overhead associated with maintaining pointers for each node.

# Big O

## Space Complexity

- `Worst or Average case:` $O(n)$. Because the amount of memory required to store the entire Stack is directly proportional to the number of elements in it.

## Time Complexity

Worst and Average cases have the same time complexity.

- `Access (lookup-by-index)`: implementation-dependent, i.e., $O(1)$ for Array-based and $O(n)$ for Linked List-based (Singly or Doubly).
- `Search (lookup-by-value)`: $O(n)$. Since searching for the position of an element by its value requires traversing the entire Stack to find it.
- `Insertion (a.k.a Push/Append to the top)`: $O(1)$.
- `Deletion (a.k.a Pop from the top)`: implementation-dependent, i.e., $O(1)$ for Array-based or Doubly-Linked List-based, and $O(n)$ for Singly-Linked List-based.
- `Peak at the top`: $O(1)$.
