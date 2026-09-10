<div align='center'>
  <h1> Binary Search </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Binary Search is a `more efficient algorithm than` [Linear Search](linear_search.md) when applied to solving the problem of finding a specific element within a `sorted Array`. It uses the [divide-and-conquer](../divide_and_conquer/divide_and_conquer.md) algorithm to repeatedly divide the search interval in half, resulting in a time complexity of $O(log\ N)$.

# Algorithm

If the Array is not already sorted, sort the Array in ascending order (if necessary) using [merge sort](../sorting/merge_sort.md), which takes $O(n\ log\ n)$ time complexity, and start with the middle element of the sorted Array.

## Recursive Approach

1. `Divide`: compare the middle element with the target value.
   - 1.1 If equal, the search is successful.
   - 1.2 If the middle element is less than the target, discard the left sub-array and continue the search in the right sub-array.
   - 1.3 If the middle element is greater than the target, discard the right sub-Array and continue the search in the left sub-Array.
2. `Conquer`: recursively apply the Binary Search algorithm to the appropriate sub-array until the value is found or the interval is empty.
3. `Combine`: in this case, "combining" is just returning the result up the call stack. No merging needed, unlike Merge Sort.

## Iterative Approach

1. Initialize left and right pointers to the start and end of the Array, respectively.
2. While left <= right:
   - 2.1. Calculate the middle index as the average of left and right.
   - 2.2. If the element at the middle index is equal to the target, return the index.
   - 2.3. If the element at the middle index is less than the target, update left to mid + 1.
   - 2.4. If the element at the middle index is greater than the target, update right to mid - 1.
3. If the loop completes without finding the target, return -1.

# Big O

Considering $n$ as the number of elements in the `sorted Array`.

## Space Complexity

Is implementation-dependent.

`Worst or Average case:`

- Iterative implementation: $O(1)$. Variables are updated in-place.
- Recursive implementation: $O(log\ n)$. Due to the `depth of the recursive call stack`.

## Time Complexity

- `Worst or Average case:`

  - Iterative implementation: $O(log\ n)$.
  - Recursive implementation: $O(log\ n)$.

- `Best case:` $O(1)$. When the target element is at the middle index of the Array, resulting in just one comparison.
