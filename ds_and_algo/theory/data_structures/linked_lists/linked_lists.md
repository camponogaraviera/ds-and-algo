<div align='center'>
  <h1> Linked Lists </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
  - [Pros and Cons](#pros-and-cons)
- [Implementation](#implementation)
- [Comparison Between Singly and Doubly Linked Lists](#comparison-between-singly-and-doubly-linked-lists)
- [Comparison Between Linked Lists and Vectors](#comparison-between-linked-lists-and-vectors)

# About

A `Linked List` is a collection of `vertices (nodes)` that represent a sequence. Each node consists of a `value (data)` and a `reference (a.k.a pointer)` to the location of the next or previous node of the sequence in memory. The first node in the sequence is called `Head` and the last node is called `Tail`. The tail points to `null`, indicating the end of the list.

In a `Linked List`, elements are stored in different memory locations, similar to Hash Tables. These elements are linked together using pointers. Unlike Arrays, where elements are indexed directly, accessing a specific element in a `Linked List` requires traversal through the nodes.

## Pros and Cons

- `Pros`:
  - `Sorting:` Linked Lists can have sorted data.
  - `Dynamic size`: A `Linked List` is a dynamic data structure, i.e., it can grow and shrink during runtime by allocating and deallocating memory.
  - `Efficient insertions and deletions`: Adding or removing elements at the beginning is faster than in an Array.

- `Cons`:
  - `Slower traversal`: While both `Arrays` and `Linked Lists` have $O(n)$ time complexity for searching (traversal), `Arrays` are faster because elements are stored in contiguous memory locations.

# Implementation

`Linked Lists` are not native (built-in) data structures in `Python`, `JavaScript`, or `C++`. They must be implemented with `classes`.

# Comparison Between Singly and Doubly Linked Lists

- `Singly Linked List`: Used for `fast insertions and deletions` when `memory usage` is a concern and searching is minimal.

- `Doubly Linked List`: Used for fast `searching` at the cost of higher memory, as it stores pointers to both the previous and next nodes. It allows traversal in both directions.

# Comparison Between Linked Lists and Vectors

- Use a `Vector` if there are too many `pop operations (removal from the end)` and `looking-up-by index`.
  - Time complexity: $O(1)$ for `Vectors` and $O(n)$ for `Linked Lists`.

- Use a `Linked List` if frequent `insertions and deletions occur at the beginning` of the structure.
  - Time complexity: $O(1)$ for `Linked Lists` and $O(n)$ for `Vectors`.
