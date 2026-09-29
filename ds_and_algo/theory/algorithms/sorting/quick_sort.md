<div align='center'>
  <h1> Quicksort </h1>
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

Quicksort is a general-purpose `comparison-based sorting` algorithm that uses [divide-and-conquer](../divide_and_conquer/divide_and_conquer.md).

- `Pros`: Quicksort is often faster than [Merge Sort](./merge_sort.md) and [Heap Sort](./heap_sort.md) due to cache locality and low memory overhead. In-place implementations partition the array by rearranging elements within the array itself, without creating temporary/auxiliary sub-arrays that would require additional memory space. The auxiliary space comes primarily from the recursion stack.

- `Cons`: The choice of pivot can affect performance, but not correctness. A bad pivot choice (e.g., always the smallest or largest) can lead to the worst-case time complexity of $O(n^2)$.
  - One approach is to use the `median of three` rule, which chooses among the first, middle, and last elements of the subarray.
  - Another approach is the [introsort variant](https://en.wikipedia.org/wiki/Introsort) (hybrid of QuickSort + Heapsort) that falls back to [Heap Sort](./heap_sort.md) when the worst case is detected (recursion depth too high).

---

# Use Cases

It is useful for in-memory array sorting of large datasets. For external sorting (data that does not fit in RAM), [Merge Sort](./merge_sort.md) is more appropriate.

---

# Algorithm

1. Choose Pivot:

- Choose a "pivot" element from the input array.
- A good choice of pivot partitions the array into two sub-arrays, not necessarily into two equal parts (unless it is the median).
- A bad choice of pivot can lead to unbalanced partitions, resulting in poor performance. For example, always choosing the smallest or largest element leads to maximally unbalanced partitions, regardless of whether the array is already sorted or not. Another example is always choosing the first or last element on already sorted arrays or arrays of identical elements.

2. Divide:

- Rearrange the elements around the pivot so that the resulting partitions satisfy the ordering required by the chosen partition scheme.
- In a two-way partition, elements less than the pivot are placed in the left partition and elements greater than the pivot are placed in the right partition.
- The arrangement of elements equal to the pivot is implementation-dependent, since partition schemes differ in how they handle duplicates. See [Lomuto](https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme), [Hoare](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme), and [3-way partitioning](https://en.wikipedia.org/wiki/Dutch_national_flag_problem) for more details.

3. Conquer:

- Recursively apply Quicksort to the left and right sub-arrays formed by the partitioning process.
- Each recursive call processes a smaller portion of the array.
- The recursion continues until the base case is reached.
- Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

Note: `Sedgewick's trick` can be applied to bound the stack depth to $O(\log\ n)$ even in the worst case. The trick recursively processes the smaller partition first, then handles the larger partition iteratively using a while loop, thereby eliminating the second recursive call that would be a tail call. The iterative step is typically implemented explicitly rather than relying on compiler-level Tail Call Optimization (TCO).

4. Combine:

- No work needed, since the sub-arrays are sorted in-place (using swaps).

---

# Big O

Legend:

- $n$ is the number of elements in the input array.

## Space Complexity

In-place implementation uses $O(1)$ space for unstable partitioning, while additional (auxiliary) space comes from the recursion stack, which is $O(\log\ n)$ on average and $O(n)$ in the worst case without Sedgewick's optimization.

"The in-place version of quicksort has a space complexity of $O(\log\ n)$, `even in the worst case`, when it is carefully implemented using the following strategies." —[Wikipedia](https://en.wikipedia.org/wiki/Quicksort). This is possible only if implemented with the `Sedgewick's trick` used to limit the number of recursive calls.

- `Worst case (without Sedgewick's trick)`:
  - `Partitioning space`: $O(1)$.
  - `Auxiliary space`: $O(n)$. Due to the `depth of the recursive call stack` when the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.
  - `Total`: $O(1)$ + $O(n)$ = $O(n)$.

- `Worst case (with Sedgewick's trick)`:
  - `Partitioning space`: $O(1)$.
  - `Auxiliary space`: $O(\log\ n)$. With Sedgewick's optimization (recursively processing the smaller partition first and iterating over the larger one), the recursion depth can be bounded to $O(\log\ n)$ even in the worst case.
  - `Total space complexity`: $O(1)$ + $O(\log\ n)$ = $O(\log\ n)$.

- `Average case`:
  - `Partitioning space`: $O(1)$.
  - `Auxiliary space`: $O(\log\ n)$ due to the expected `recursive call stack depth`.
  - `Total space complexity`: $O(1)$ + $O(\log\ n)$ = $O(\log\ n)$.

- `Best case`:
  - `Partitioning space`: $O(1)$.
  - `Auxiliary space`: $O(\log\ n)$. The pivot divides the array into two nearly equal sub-arrays, producing $O(\log\ n)$ recursion depth.
  - `Total space complexity`: $O(1)$ + $O(\log\ n)$ = $O(\log\ n)$.

## Time Complexity

- `Worst case`: $O(n^2)$. When the partitioning is highly unbalanced, such as when the pivot is `always` the smallest or largest element.

- `Average case`: $O(n\ \log\ n)$. On average, the pivot will likely partition the array into reasonably balanced sub-arrays. The recursive partitioning produces $O(\log\ n)$ levels (partition steps), and each level performs $O(n)$ work to reorder the sub-array elements around the pivot.

- `Best case`: $O(n\ \log\ n)$. This occurs when the pivot partitions the array into two nearly equal halves.

---

# References

[1] https://en.wikipedia.org/wiki/Quicksort
