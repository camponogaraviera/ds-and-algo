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
- [References](#references)

# About

Selection Sort repeatedly finds the minimum element from the unsorted portion of an array and places it at the beginning of this unsorted portion.

---

# Use Cases

Selection Sort is primarily used as an educational tool, not in the industry.

---

# Algorithm

1. Loop over each position in the array.
2. Assume the current element is the minimum.
3. Scan the remaining unsorted elements for a smaller value.
4. If a smaller value is found, update the minimum index.
5. Swap the minimum element with the current element.

---

# Big O

Legend:

- $n$ is the number of elements in the input array.

## Space Complexity

- `Worst case:`
  - `Input storage`: $O(n)$ for storing the input array.
  - `Auxiliary space`: $O(1)$. Because sorting is done in-place, i.e., the algorithm swaps elements within the array itself without creating temporary sub-arrays.
  - `Total space complexity`: $O(n)$ + $O(1)$ = $O(n)$.

## Time Complexity

- `Worst case:` $O(n^2)$ complexity in comparisons and $O(n)$ in swaps. In the worst case, it requires $n-1$ passes over progressively smaller unsorted portions of the array. On each pass, the algorithm scans the remaining elements to find the minimum, with at most one swap per pass. The total number of comparisons is $(n-1) + (n-2) + \cdots + 1 = n(n-1)/2$.

- `Average case:` $O(n^2)$ complexity in comparisons and $O(n)$ in swaps.

- `Best case:` $O(n^2)$ complexity in comparisons and $O(1)$ in swaps. Even when the array is already sorted, the algorithm still scans the remaining unsorted portion on every pass to find the minimum element.

---

# References

[1] https://en.wikipedia.org/wiki/Selection_sort
