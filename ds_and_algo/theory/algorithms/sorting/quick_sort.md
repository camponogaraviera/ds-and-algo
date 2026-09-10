<div align='center'>
  <h1> Quick Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Quick Sort is a general-purpose `comparison-based sorting` algorithm that uses [divide-and-conquer](../divide_and_conquer/divide_and_conquer.md).

- `Pros`: Quick Sort is often faster than [Merge Sort](./merge_sort.md) and [Heap Sort](./heap_sort.md) due to cache locality and low memory overhead (no auxiliary factors during merging). Arrays are `partitioned in-place`, i.e., the algorithm swaps elements within the array itself without creating temporary/auxiliary sub-arrays that would require additional memory space.

- `Cons`: The pivot should be chosen intelligently. A bad pivot choice (e.g., always smallest/largest) can lead to the worst-case time complexity of $O(n^2)$.
  - One approach is to use the `median of three` rule.
  - Another approach is the [introsort variant](https://en.wikipedia.org/wiki/Introsort) (hybrid of QuickSort + Heapsort) that falls back to [Heap Sort](./heap_sort.md) when the worst case is detected (recursion depth too high).

---

# Use Cases

It is useful for in-memory array sorting of large datasets. For external sorting (data that does not fit in RAM), [Merge Sort](./merge_sort.md) is more appropriate.

---

# Algorithm

1. Choose Pivot:

- Choose a "pivot" element from the original (main) array.
- The choice of pivot can affect performance (e.g., first element, last element, median-of-three, or random).
- A good choice of pivot divides the array into two sub-arrays, not necessarily into two equal parts (unless it is the median).
- A bad choice of pivot (smallest or largest) can lead to unbalanced partitions (extreme position), resulting in poor performance.

2. Divide:

- Rearrange the elements around the pivot so that the resulting partitions satisfy the ordering required by the chosen partition scheme.
- In a two-way partition, elements less than the pivot are placed in the left partition and elements greater than the pivot are placed in the right partition.
- The arrangement of elements equal to the pivot is implementation-dependent, since partition schemes differ in how they handle duplicates. See [Lomuto](https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme), [Hoare](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme), and [3-way partitioning](https://en.wikipedia.org/wiki/Dutch_national_flag_problem) for more details.

3. Conquer:

- Recursively apply Quick Sort to the left and right sub-arrays formed by the partitioning process.
- Each recursive call processes a smaller portion of the array.
- The recursion continues until the base case is reached.
- Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

Note: `Sedgewick's trick` can be applied to bound the stack depth to $O(log\ n)$ even in the worst case. The trick recursively processes the smaller partition first, then handles the larger partition iteratively, avoiding a second recursive call. This effectively performs a manual elimination of the second recursive call by converting it into iteration, without requiring Tail Call Optimization (TCO).

4. Combine:

- No work needed, since the sub-arrays are sorted in-place (using swaps).

---

# Big O

## Space Complexity

The space complexity of Quick Sort comes from the recursive function calls and not from auxiliary memory space, since sorting is made in-place, i.e., the algorithm swaps elements within the array itself without creating temporary sub-arrays during partitioning.

"The in-place version of quicksort has a space complexity of $O(log\ n)$, `even in the worst case`, when it is carefully implemented using the following strategies." —[Wikipedia](https://en.wikipedia.org/wiki/Quicksort). This is possible only if implemented with the `Sedgewick's trick` used to limit the number of recursive calls.

- `Worst case (without Sedgewick's trick)`: $O(n)$. Due to the `depth of the recursive call stack` when the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.

- `Average case and Best case`: $O(log\ n)$. Due to the `depth of the recursive call stack` when the pivot divides the array into two nearly equal halves.

## Time Complexity

- `Worst case`: $O(n^2)$. When the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.
- `Average case`: $O(n\ log\ n)$. On average, the pivot will likely divide the array into reasonably balanced sub-arrays.
- `Best case`: $O(n\ log\ n)$. This occurs when the pivot divides the array into two nearly equal halves.
