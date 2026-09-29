<div align='center'>
  <h1> Recursion </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
  - [Theorem](#theorem)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Recursion is a technique where a function calls itself (directly or indirectly) to solve a problem. It typically works by breaking the problem down into smaller, similar sub-problems. The recursive calls (calling the function recursively on each sub-problem) continue until a base case (a.k.a stopping condition) is met, at which point the recursion unwinds and the solutions to the sub-problems are combined to solve the original problem.

## Theorem

Any algorithm that can be implemented with `Recursion` has a reciprocal `Iterative` implementation.

While an `iterative approach tends to be more performant/efficient` at times (because it can use `less memory space` compared to recursive function calls, depending on implementation), it might not be as dry (readable) for problems that are naturally recursive (e.g., Tree traversals).

Readability often depends on the context and the specific problem being solved, so both approaches have their pros and cons.

---

# Use Cases

Recursion tends to be useful when:

- Converting data structures into a Tree.

- Implementing [Graph Traversals](../traversal/traversal.md), such as [DFS](../traversal/dfs.md).

- Implementing sorting algorithms, such as [Merge Sort](../sorting/merge_sort.md) and [Quick Sort](../sorting/quick_sort.md).

---

# Implementation

1. Create the base (a.k.a stopping) case to avoid a stack overflow.
2. Create the recursive case.
3. Return the values of the outer function call. Generally two returns (for base case and recursive case).

---

# Big O

The space complexity of `Recursion` depends on the `depth of the recursive call stack`. Depending on the problem, it can be reduced with [tail-call optimization](https://en.wikipedia.org/wiki/Tail_call).

Note: While JavaScript ES6 supports `Tail Call Optimization (TC0)`, the JS engine from the runtime environment does not.

Examples: 

- A [recursive search (DFS)](../traversal/dfs.md) on a binary search tree has a space complexity of $O(\log\ n)$ when the tree is balanced, and $O(n)$ in the worst-case when the tree is completely skewed or unbalanced.

## Time Complexity

The time complexity of `Recursion` is `implementation-dependent`.

Different recursive implementations (e.g., `Naive recursion` or `Memoized recursion`) for the same problem can have different time complexities. For example, [dynamic programming](../dynamic_programming/dynamic_programming.md) can reduce the time complexity of naive recursive Fibonacci from $O(2^n)$ to $O(n)$.