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
- [References](#references)

# About

Radix Sort is a `non-comparison sorting` algorithm that can be faster than comparison-based sorting algorithms such as [Quick Sort](quick_sort.md) or [Merge Sort](merge_sort.md) in certain scenarios. Its performance advantage comes from not having to make pairwise comparisons between elements.

---

# Use Cases

It is commonly used for sorting integers and strings. It is generally not suitable for arbitrary floating-point values or arbitrary data types without an appropriate mapping to a radix-based representation.

---

# Algorithm

For this LSD Radix Sort implementation, the algorithm is designed to sort non-negative integers in base $b = 10$ (decimal digits).

1. Find the maximum number in the array to determine the number of digits ($d$). This determines the number of passes that will be performed.

2. Perform $d$ passes, processing digits from the least significant digit (LSD) to the most significant digit.

3. For each pass, use a stable [Counting Sort](counting_sort.md) algorithm as a subroutine to sort numbers according to the current digit position (units, tens, hundreds, etc.).

4. The final array is sorted.

---

# Big O

Legend:

- $n$ is the number of keys.
- $d$ is the number of digits processed, and therefore the total number of outer passes required for sorting.
  - For integer sorting, $d$ is determined by the number of digits in the maximum number.
  - For string sorting, $d$ is typically the maximum string length.
- $b$ is the base (radix), i.e., the number of distinct values a single digit can take. It sets the size of the counting array used by each pass: $b = 10$ for decimal digits, $b = 256$ for byte-wise sorting.

## Space Complexity

- `Worst case:`
  - `Input storage`: $O(n)$ for storing the input array.
  - `Auxiliary space`: $O(n)$ for the output array and $O(b)$ for the counting array. Both buffers are reused across passes, so $d$ does not contribute to the space complexity.
  - `Total space complexity`: $O(n)$ + $O(b)$ = $O(n + b)$.

## Time Complexity

- `All cases:` $\Theta(d \cdot (n + b))$. Each of the $d$ passes runs a Counting Sort costing $\Theta(n + b)$. For a fixed key length, the work done does not depend on the initial ordering of the input, so there is no distinct best, average, or worst case.

This simplifies to $O(d \cdot n)$ only when $b = O(n)$, which holds for a small base such as $b = 10$. For a large base such as $b = 2^{16}$, the $d \cdot b$ term dominates when $n$ is small.

---

# References

[1] https://en.wikipedia.org/wiki/Radix_sort
