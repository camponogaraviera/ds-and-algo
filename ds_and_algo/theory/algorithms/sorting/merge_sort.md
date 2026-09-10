<div align='center'>
  <h1> Merge Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Merge Sort is a `comparison-based sorting` algorithm that uses [divide-and-conquer](../divide_and_conquer/divide_and_conquer.md).

---

# Use Cases

- `Pros`: It is useful for sorting large datasets because it provides a consistent $O(n\ log\ n)$ time complexity across all cases.

- `Cons`: Requires additional memory space for storing `temporary sub-arrays during merging`, resulting in $O(n)$ auxiliary space complexity.

---

# Algorithm

1. Divide:

- Split the array into two equal (or nearly equal) halves (left and right sub-arrays).
- The split is typically done at the midpoint, so if the array has an odd length, one sub-array will have one more element than the other.

2. Conquer:

- Recursively apply Merge Sort to the left and right sub-arrays formed by the splitting process.
- Each recursive call adds a new frame to the call stack, reaching a maximum depth of $O(log\ n)$.
- [Tail Recursion Optimization (TRO)](https://en.wikipedia.org/wiki/Tail_call) `cannot be applied` to eliminate some of these frames because there is no tail call, i.e., neither call is in tail position. The recursive calls to the left and right sub-arrays must complete before merging can start. 
- The recursion continues until the base case is reached.
- Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

3. Combine (Merge):

- Combine the two sorted sub-arrays by comparing elements in order, placing the smaller one first.
- The merging process is not recursive. It is an iterative (loop-based) step combining two already-sorted arrays.

---

# Big O

## Space Complexity

- `Worst case:` $O(n) + O(\log\ n) = O(n)$.
  - Auxiliary arrays: $O(n)$. Due to the auxiliary memory space used to store temporary arrays during the merging process.
  - Recursive call stack: $O(log\ n)$. Due to the `call stack depth`, since the array is halved at each recursive step.

## Time Complexity

- `Worst case:` $O(n\ \log\ n)$. The recursive splitting produces $O(\log n)$ levels, and each level performs $O(n)$ work during merging of sub-arrays.

- `Average case:` $O(n\ \log\ n)$. The recursive splitting produces $O(\log n)$ levels, and each level performs $O(n)$ work during merging of sub-arrays, regardless of the input distribution.

- `Best case:` $O(n\ \log\ n)$. Even if the array is already sorted, the standard Merge Sort implementation still performs the same recursive splits and merge operations.
