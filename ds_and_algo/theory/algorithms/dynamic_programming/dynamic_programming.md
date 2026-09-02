<div align='center'>
  <h1> Dynamic Programming </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Dynamic programming is an optimization technique that uses `memoization` or `tabulation` to store the results of overlapping subproblems, avoiding redundant computations.

It breaks down the main problem into subproblems, solving each once and storing their results in a caching layer for future reference. It is often used when the subproblems overlap, meaning their solutions can be reused, significantly improving computational efficiency.

# Use Cases

- Using memoization to store the results of function calls and returning the cached result for recurring indexes.

`Memoization`: Is a technique used in the recursive (top-down) approach where the results of subproblems are stored in a caching layer (often a Hash Table). If a subproblem has been solved before, its result is retrieved from the cache to prevent redundant calculations and improve performance.

# Implementation

Dynamic Programming can be implemented in different ways:

- `Iterative (bottom-up) approach`: A technique that `uses tabulation`. This approach solves the smallest subproblems first and uses previously stored solutions to build up to the main problem. Solutions are often stored in an `Array` since the subproblems are solved `in a specific order`.
  - Pros: No overhead of recursive function calls. No risk of stack overflow. More space-efficient for problems with a large number of subproblems.
  - Cons: Can be less intuitive and harder to implement. Computes all subproblems, even if not all are needed. Iteration order matters.

- `Recursive (top-down) approach`: A technique that `uses memoization`. This approach solves the top (main) problem first and then breaks it down recursively into smaller subproblems. Each subproblem is solved by calling the same function until the base case is reached. Solutions are stored in an Array when the state space is small and indexable, or in a Hash Table when the state space is sparse.
  - Pros: More intuitive and easier to implement. Does not compute all subproblems.
  - Cons: Can be less space-efficient due to the overhead of recursive function calls. Risk of stack overflow for deep recursion.

# Big O

Different implementations (e.g., `Iterative`, `Recursive`) for the same problem can have different time complexities.

## Space Complexity

The space complexity of Dynamic Programming is `implementation-dependent`.

## Time Complexity

The time complexity of Dynamic Programming is `implementation-dependent`.

Note: `Dynamic Programming` reduces the time complexity of `Naive Recursive Fibonacci` from $O(2^n)$ to $O(n)$.
