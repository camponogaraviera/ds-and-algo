<div align='center'>
  <h1> Bubble Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Bubble Sort gets its name from the fact that larger elements "bubble up" to the end of the Array with each pass when sorting is made in ascending order.

# Use Cases

- `Pros`: for `small or nearly sorted Arrays`, Bubble Sort is `faster than` [Selection Sort](selection_sort.md), [Merge Sort](merge_sort.md), [Quick Sort](quick_sort.md), [Heap Sort](heap_sort.md), and [Shell Sort]() due to lower overhead, but `slower than` [Insertion Sort](insertion_sort.md).

- `Cons:` Bubble Sort is primarily used for teaching, but not in the industry.

# Algorithm

1. Loop over each element of the Array.
2. In each pass through the Array, compare each pair of adjacent elements.
3. If the current element is greater than the next element, swap their positions.
4. Repeat steps 1 onwards until a complete pass is made without any swaps (i.e., the Array is Sorted).

# Big O

## Space Complexity

- `Worst case:` $O(1)$. Because sorting is made in-place, i.e., the algorithm swaps elements within the Array itself without creating temporary sub-arrays.

## Time Complexity

- `Worst case:` $O(n^2)$.
- `Average case:` $O(n^2)$.
- `Best case:` $O(n)$. When elements are mostly sorted.
