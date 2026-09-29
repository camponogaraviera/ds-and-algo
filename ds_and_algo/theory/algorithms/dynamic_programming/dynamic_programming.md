<div align='center'>
  <h1> Dynamic Programming </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Dynamic programming is an optimization technique that breaks down the main problem into overlapping subproblems, solving each once and storing their results for future reference, significantly improving computational efficiency. 
 
---

# Implementation

Dynamic Programming can be implemented in two primary ways:

- `Tabulation (bottom-up) approach`: Often implemented iteratively. Solves the smallest subproblems first and uses previously stored solutions to build up to the main problem sequentially. Solutions are often stored in an `Array` since the subproblems are solved `in a specific order`.
  - Pros: More memory space-efficient. No recursive function calls and, therefore, no risk of stack overflow.
  - Cons: Computes all subproblems, even if not all of them are needed. Iteration order matters.

- `Memoization (top-down) approach`: Often implemented recursively combined with a cache. Solves the top (main) problem first and then breaks it down recursively into smaller subproblems. Each subproblem is solved by calling the same function until the base case is reached. Solutions are stored in an Array when the state space is small and indexable, or in a Hash Table when the state space is sparse.
  - Pros: More intuitive to implement for problems that are naturally recursive. Does not compute all subproblems.
  - Cons: Can be less memory space-efficient due to the overhead of recursive function calls. Risk of stack overflow for deep recursion.

---

# Big O

## Space Complexity

The space complexity of Dynamic Programming is `implementation-dependent`.

Different implementations (`iterative` or `recursive`) for the same problem can have different space complexities.

## Time Complexity

- Asymptotic time complexity: If properly optimized, iterative and recursive implementations achieve the same theoretical bounds for a given problem.

- Practical time complexity: The actual runtime may differ due to implementation details.