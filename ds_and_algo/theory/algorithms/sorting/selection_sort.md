<div align='center'>
  <h1> Selection Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Selection Sort repeatedly finds the minimum element from the unsorted portion of an Array and places it at the beginning of this unsorted portion.

# Use Cases

Selection Sort is primarily used for teaching, but not in the industry.

# Algorithm

1. Loop over each element of the array.
2. Assume the current element is the minimum.
3. Scan the remaining (unsorted) elements for a smaller value.
4. If found, update the minimum index.
5. Swap the minimum element with the current element.

# Big O

## Space Complexity

- `Worst case:` $O(1)$. Because sorting is made in-place, i.e., the algorithm swaps elements within the Array itself without creating temporary sub-arrays.

## Time Complexity

- `Worst case:` $O(n^2)$.
- `Average case:` $O(n^2)$.
- `Best case:` $O(n^2)$.
