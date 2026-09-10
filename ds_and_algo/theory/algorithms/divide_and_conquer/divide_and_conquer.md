<div align='center'>
  <h1> Divide and Conquer </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Algorithm](#algorithm)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Divide and Conquer is a powerful algorithmic design paradigm that breaks down a complex problem into smaller sub-problems, often using recursion. The solutions to the sub-problems are then combined to give a solution to the original problem.

Not all divide-and-conquer algorithms require recursion. For example, **iterative** [Binary Search](../searching/binary_search.md) has a better performance as it has no call stack overhead.

# Algorithm

1. `Divide`: break the problem into smaller, more manageable sub-problems.
2. `Conquer`: recursively apply the same divide-and-conquer algorithm to each sub-problem until the base case is reached.
3. `Combine`: combine the solutions of the sub-problems to solve the original problem.

# Use Cases

Divide and Conquer is used to implement:

- Sorting algorithms: [Merge Sort](../sorting/merge_sort.md) and [Quick Sort](../sorting/quick_sort.md).

- Searching algorithms: [Binary Search](../searching/binary_search.md).

# Big O

## Space Complexity

Is implementation-dependent.

## Time Complexity

Is implementation-dependent.
