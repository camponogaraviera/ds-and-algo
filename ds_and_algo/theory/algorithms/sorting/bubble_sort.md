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
- [References](#references)

# About

Bubble Sort gets its name from the fact that larger elements "bubble up" to the end of the array with each pass when sorting is made in ascending order.

---

# Use Cases

- `Pros`: For `small or nearly sorted Arrays`, Bubble Sort is `faster than` [Selection Sort](selection_sort.md), [Merge Sort](merge_sort.md), [Quick Sort](quick_sort.md), [Heap Sort](heap_sort.md), and [Shellsort](https://en.wikipedia.org/wiki/Shellsort) due to lower overhead, but `slower than` [Insertion Sort](insertion_sort.md).

- `Cons:` Bubble Sort is primarily used as an educational tool, not in the industry.

---

# Algorithm

1. Loop over each element of the Array.
2. In each pass through the Array, compare each pair of adjacent elements.
3. If the current element is greater than the next element, swap their positions.
4. Repeat steps 1 onwards until a complete pass is made without any swaps (i.e., the Array is Sorted).

---

# Big O

Legend:

- $n$ is the number of elements in the input array.

## Space Complexity

- `Worst case:`
  - `Input storage`: $O(n)$ for storing the input array.
  - `Auxiliary memory space`: $O(1)$. Because sorting is done in-place, i.e., the algorithm swaps elements within the array itself without creating temporary sub-arrays.
  - `Total`: $O(n)$ + $O(1)$ = $O(n)$.

## Time Complexity

- `Worst case:` $O(n^2)$ complexity in comparisons and swaps. In the worst case, it requires $n-1$ passes to traverse over the array, with the number of comparisons decreasing on each successive pass. The total number of adjacent comparisons and swaps is $(n-1) + (n-2) + \cdots + 1 = n(n-1)/2$.

- `Average case:` $O(n^2)$ complexity in comparisons and swaps. On average, the algorithm performs a quadratic number of comparisons and swaps.

- `Best case:` $O(n)$ complexity in comparisons and $O(1)$ swaps. When the array is already sorted, the first pass makes $n-1$ comparisons and no swaps, allowing the algorithm to terminate early.

---

# References

[1] https://en.wikipedia.org/wiki/Bubble_sort
