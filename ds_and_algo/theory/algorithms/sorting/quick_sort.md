<div align='center'>
  <h1> Quick Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
  - [Example](#example)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Quick Sort is a general-purpose `comparison-based sorting` algorithm that uses [divide-and-conquer](../divide_and_conquer/divide_and_conquer.md).

- `Pros`: Quick Sort runs faster than [Merge Sort](./merge_sort.md) and [Heap Sort](./heap_sort.md) since it minimizes the number of element swapping. Arrays are `partitioned in-place`, i.e., the algorithm swaps elements within the Array itself without creating temporary/auxiliary sub-arrays.

- `Cons`: the pivot should be chosen intelligently. A bad pivot choice (e.g., always smallest/largest) can lead to worst-case $O(n^2)$ time complexity.
  - One approach is to use the `median of three` rule.
  - Another approach is the [introsort variant](https://en.wikipedia.org/wiki/Introsort) (hybrid of QuickSort + Heapsort) that falls back to [Heap Sort](./heap_sort.md) when the worst case is detected (recursion depth too high).

# Use Cases

It is useful for sorting large datasets.

# Algorithm

1. Choose Pivot:

- Choose a "pivot" element from the original (main) Array.
- The choice of pivot can affect performance (e.g., first element, last element, median-of-three, or random).
- A good choice of pivot divides the Array into two sub-arrays, not necessarily into two equal parts (unless it is the median).
- A bad choice of pivot (smallest or largest) can lead to unbalanced partitions (extreme position), resulting in poor performance.

2. Divide:

- Rearrange the elements around the pivot so that all elements less than the pivot belong to the left partition and all elements greater than the pivot belong to the right partition.
- Elements equal to the pivot can go to either side (implementation-dependent).

3. Conquer:

- Recursively apply Quick Sort to the left and right sub-arrays formed by the partitioning process.
- Each recursive call processes a smaller portion of the Array.
- [Tail Recursion Optimization (TRO)](https://en.wikipedia.org/wiki/Tail_call) `can be applied` eliminate some stack frames because there is no work to be done after the second call (the right sub-array). This process is known as `asymmetric recursion`. However, not all engines support TRO.
- The recursion continues until the base case is reached.
- Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

4. Combine:

- No work needed! Because the sub-arrays are sorted in-place (using swaps), and no auxiliary arrays or additional merging are needed (unlike [Merge Sort](./merge_sort.md)). This is possible thanks to `Hoare's partition` (original) and `Lomuto's partition` (modern) techniques.

## Example

**Original Array:**: `[4, 2, 8, 3, 1, 7, 6]`.

- Pass 1: Pivot = 4 (first element)

  - Partitioning:
    - Left (≤ 4): [2, 3, 1]
    - Right (> 4): [8, 7, 6]
    - Balanced split!
  - New Subproblems:
    - Sort [2, 3, 1]
    - Sort [8, 7, 6]

- Pass 2: Sort [2, 3, 1] (Pivot = 2)

  - Partitioning:
    - Left (≤ 2): [1]
    - Right (> 2): [3]
  - New Subproblems:
    - Sort [1] (already sorted)
    - Sort [3] (already sorted)

- Pass 3: Sort [8, 7, 6] (Pivot = 8)

  - Partitioning:
    - Left (≤ 8): [7, 6]
    - Right (> 8): []
  - New Subproblems:
    - Sort [7, 6]
    - (Right is empty, base case)

- Pass 4: Sort [7, 6] (Pivot = 7)

  - Partitioning:
    - Left (≤ 7): [6]
    - Right (> 7): []
  - New Subproblems:
    - Sort [6] (already sorted)
    - (Right is empty, base case)

Now, combine the results from Pass 3:

- sorted_left = [6, 7].
- pivot = 8.
- sorted_right = [].
- Sorted result: [6, 7] + [8] + [] = [6, 7, 8].

Now, combine the results from Pass 1:

- sorted_left = [1, 2, 3].
- pivot = 4.
- sorted_right = [6, 7, 8].
- Final sorted array: [1, 2, 3] + [4] + [6, 7, 8] = [1, 2, 3, 4, 6, 7, 8].

# Big O

## Space Complexity

The space complexity of Quick Sort comes from the recursive function calls and not from auxiliary memory space, since sorting is made in-place, i.e., the algorithm swaps elements within the Array itself without creating temporary sub-arrays during partitioning.

"The in-place version of quicksort has a space complexity of $O(log\ n)$, `even in the worst case`, when it is carefully implemented using the following strategies." —[Wikipedia](https://en.wikipedia.org/wiki/Quicksort). This is a result of the `Sedgewick's trick` used to limit the number of recursive calls.

- `Worst case:` $O(n)$. Due to the `depth of the recursive call stack` when the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.
- `Average case and Best case:` $O(log\ n)$. Due to the `depth of the recursive call stack` when the pivot divides the Array into two nearly equal halves.

## Time Complexity

- `Worst case:` $O(n^2)$. When the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.
- `Average case:` $O(n\ log\ n)$. On average, the pivot will likely divide the array into reasonably balanced sub-arrays.
- `Best case:` $O(n\ log\ n)$. This occurs when the pivot divides the Array into two nearly equal halves.
