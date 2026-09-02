<div align='center'>
  <h1> Heap Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Heap Sort is a `comparison-based sorting` algorithm built on a [Binary Heap](../../data_structures/trees/binary_heap.md) data structure.

# Use Cases

- `Pros`: it is useful for sorting large datasets due to its consistent $O(n\ log\ n)$ time complexity across all cases. It does not require auxiliary memory space, such as in [Merge Sort](merge_sort.md), because `sort is made in-place`.

- `Cons`: is slower than [Quick Sort](quick_sort.md).

# Algorithm

...

# Big O

## Space Complexity

- `Worst case:` $O(1)$. Because sorting is made in-place, i.e., the algorithm swaps elements within the Array itself without creating temporary sub-arrays.

## Time Complexity

- `Worst case:` $O(n\ log\ n)$.
- `Average case:` $O(n\ log\ n)$.
- `Best case:` $O(n\ log\ n)$.
