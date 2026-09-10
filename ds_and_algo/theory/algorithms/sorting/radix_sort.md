<div align='center'>
  <h1> Radix Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Radix Sort is a `non-comparison sorting` algorithm that can be faster than comparison-based sorting algorithms such as [Quick Sort](quick_sort.md) or [Merge Sort](merge_sort.md) in certain scenarios. Its performance advantage comes from not having to make pairwise comparisons between elements.

---

# Use Cases

It is commonly used for sorting integers and strings. It is generally not suitable for arbitrary floating-point values or arbitrary data types without an appropriate mapping to a radix-based representation.

---

# Algorithm

For this implementation, Radix Sort is designed to sort non-negative integers.

1. Find the maximum number in the array to determine the number of digits ($k$). This means that $k$ passes will be performed.

2. Perform $k$ passes, processing digits from the least significant digit (LSD) to the most significant digit (MSD). Use a stable [Counting Sort](counting_sort.md) algorithm as a subroutine to sort numbers according to the current digit position (units, tens, hundreds, etc.).

3. The final array is sorted.

---

# Big O

Legend:

- $n$ is the number of elements in the input array.
- $k$ is the number of passes required for sorting.
  - For integer sorting, $k$ is determined by the number of digits in the maximum number.
  - For string sorting, $k$ is typically the maximum string length.

## Space Complexity

- `Worst case:` $O(n + k)$.

## Time Complexity

- `Worst case:` $O(nk)$.
- `Average case:` $O(nk)$.
- `Best case:` $O(nk)$.
