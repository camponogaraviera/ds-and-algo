<div align='center'>
  <h1> Linear Search </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Linear search (a.k.a sequential search) is a general search algorithm used to find a specific value, index, or key within a data structure (e.g., unsorted Array, Hash Table, Linked List, Stack, or Queue). It sequentially iterates over all entries in the data structure until the desired element is found or the data structure ends.

# Use Cases

Linear Search can be used to implement `lookup-by-value (search)` methods, as well as `lookup-by-index/key (access)` in data structures without explicit indexing (e.g., Hash Tables and Linked Lists).

# Implementation

Linear Search is a built-in search method implemented in many data structures, such as Arrays and Hash Tables.

# Big O

Considering $n$ to be the length/size of the Array.

## Space Complexity

- `Worst or Average case:` $O(1)$. Since operations are performed in-place on the existing data structure.

## Time Complexity

- `Worst case:` $O(n)$.
- `Average case:` $O(n/2) = O(n)$ (dropping constant factors).
- `Best case:` $O(1)$. When the target element is found in the first position.
