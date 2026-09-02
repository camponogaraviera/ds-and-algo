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

# Use Cases

- `Pros`: It is useful for sorting large datasets due to its consistent $O(n\ log\ n)$ time complexity across all cases.

- `Cons`: requires additional memory space for storing `temporary sub-arrays during partitioning`, leading to $O(n)$ space complexity. It is slower than [Quick Sort](quick_sort.md).

# Algorithm

1. Divide:

- Split the Array into two equal (or nearly equal) halves (left and right sub-arrays).
- The split is typically done at the midpoint, so if the array has an odd length, one sub-array will have one more element than the other.

2. Conquer:

- Recursively apply Merge Sort to the left and right sub-arrays formed by the partitioning process.
- Each recursive call adds a new frame to the call stack, reaching a maximum depth of $O(log\ n)$.
- [Tail Recursion Optimization (TRO)](https://en.wikipedia.org/wiki/Tail_call) `cannot be applied` to eliminate some of these frames because there is no tail call, i.e., neither call is in tail position. The recursive calls to the left and right sub-arrays must complete before merging can start. This is known as `symmetric recursion`.
- The recursion continues until the base case is reached.
- Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

3. Combine (Merge):

- Combine the two sorted sub-arrays by comparing elements in order, placing the smaller one first.
- The merging process is not recursive; it is an iterative (loop-based) step combining two already-sorted arrays.
- Repeat until the entire array is merged into a single sorted array.

# Big O

## Space Complexity

- `Worst case:` $O(n) + O(\log\ n) = O(n)$.
  - $O(n)$ is due to the auxiliary memory space used to store temporary sub-arrays during partitioning.
  - $O(log\ n)$ is due to the `depth of the recursive call stack`, which is at most $O(log\ n)$ since the Array is halved at each step.

## Time Complexity

- `Worst case:` $O(n\ \log\ n)$. Because in every step, the Array is divided into two halves.
- `Average case:` $O(n\ \log\ n)$. Because the process of dividing and merging ensures that the number of operations remains consistent regardless of input distribution.
- `Best case:` $O(n\ \log\ n)$. Because even if the Array is already sorted, Merge Sort still performs the same number of recursive splits and merges.
