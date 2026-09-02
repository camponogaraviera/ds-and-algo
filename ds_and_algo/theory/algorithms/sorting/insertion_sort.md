<div align='center'>
  <h1> Insertion Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Insertion Sort is a `comparison-based sorting` algorithm that is suitable for sorting small Arrays or when elements are mostly sorted.

# Use Cases

For `small Arrays`, Insertion Sort is `faster than` [Bubble Sort](bubble_sort.md), [Selection Sort](selection_sort.md), [Merge Sort](merge_sort.md), [Quick Sort](quick_sort.md), [Shell Sort](), and [Heap Sort](heap_sort.md).

# Algorithm

1. Start with the second element (index 1).
2. Compare the current element with previous elements.
3. Shift larger elements to the right.
4. Insert the current element into its sorted position.
5. Repeat until the array is sorted.

# Big O

## Space Complexity

- `Worst case:` $O(1)$. Because sorting is made in-place, i.e., the algorithm swaps elements within the Array itself without creating temporary sub-arrays.

## Time Complexity

- `Worst case:` $O(n^2)$. When the array is reverse-sorted.
- `Average case:` $O(n^2)$. When the array is randomly sorted.
- `Best case:` $O(n)$. When elements are mostly sorted.
