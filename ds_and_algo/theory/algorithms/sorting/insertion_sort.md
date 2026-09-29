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
- [References](#references)

# About

Insertion Sort is a `comparison-based sorting` algorithm that is suitable for sorting small arrays or when elements are mostly sorted.

---

# Use Cases

For `small Arrays`, Insertion Sort is `faster than` [Bubble Sort](bubble_sort.md), [Selection Sort](selection_sort.md), [Merge Sort](merge_sort.md), [Quick Sort](quick_sort.md), [Shellsort](https://en.wikipedia.org/wiki/Shellsort), and [Heap Sort](heap_sort.md).

---

# Algorithm

1. Start with the second element (index 1).
2. Compare the current element with previous elements.
3. Shift larger elements to the right.
4. Insert the current element into its sorted position.
5. Repeat until the array is sorted.

---

# Big O

Legend:

- $n$ is the number of elements in the input array.

## Space Complexity

- `Worst case:`
  - `Input storage`: $O(n)$ for storing the input array.
  - `Auxiliary space`: $O(1)$. Because sorting is done in-place, i.e., the algorithm rearranges elements within the array itself without creating temporary sub-arrays.
  - `Total space complexity`: $O(n)$ + $O(1)$ = $O(n)$.

## Time Complexity

- `Worst case:` $O(n^2)$ complexity in comparisons and shifts. In the worst case, the array is reverse-sorted, so each element must be compared with and shifted past all previously sorted elements.

- `Average case:` $O(n^2)$ complexity in comparisons and shifts. On average, the array is randomly sorted, so each element is expected to be compared with and shifted past about half of the previously sorted elements.

- `Best case:` $O(n)$ complexity in comparisons and $O(1)$ in shifts. When the array is already sorted, during each iteration, the first element (the key) of the remaining unprocessed portion of the array is compared with the rightmost element of the sorted subsection (prefix), and no elements need to be shifted.

---

# References

[1] https://en.wikipedia.org/wiki/Insertion_sort
