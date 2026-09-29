<div align='center'>
  <h1> Heapsort </h1>
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

Heapsort is a `comparison-based sorting` algorithm built on a [Binary Heap](../../data_structures/heaps/binary_heap.md) data structure.

---

# Use Cases

- `Pros`: It is useful for sorting large datasets when memory is limited or predictable worst-case performance is critical due to its consistent $O(n\ \log\ n)$ time complexity across all cases. Sort is made in-place.

- `Cons`: It can be slower than [Quick Sort](quick_sort.md) in practice.

---

# Algorithm

Heapsort can be implemented with either recursion or iteration.

The following algorithm outline considers a max-heap implementation with a recursive `siftDown()` function. The initial heap is built bottom-up.

1. Build the heap: Convert the input array into a [binary max heap](../../data_structures/heaps/binary_heap.md) in-place.

Input Array: [5, 2, 10, 1, 3, 11, 6].

```bash
Max Heap Representation:
    11
   /  \
  3    10
 / \   / \
1   2 5   6
```

Array visualization (BFS traversal): [11, 3, 10, 1, 2, 5, 6].

2. Extract the maximum: Swap the root of the max heap (the largest element) with the last element in the current heap. Reduce the heap size by one. The maximum element is now in its final sorted position in the array.

3. Restore the heap property: Call the `siftDown()` function on the new root of the reduced heap to restore the max-heap property.

4. Repeat steps 2-3 until the heap size is 1.

---

# Big O

Legend:

- $n$ is the number of elements in the input array.

## Space Complexity

- `Worst case:`
  - `Input storage`: $O(n)$ for storing the input array.
  - `Auxiliary space`:
    - Recursive `siftDown()` implementation: $O(\log\ n)$ due to the `recursive call stack depth` of `siftDown()`.
    - Iterative `siftDown()` implementation: $O(1)$.
  - `Total space complexity`: $O(n)$ + $O(\log\ n)$ = $O(n)$.

## Time Complexity

- `Worst case:` $O(n\ + n\ \log\ n) = O(n\ \log\ n)$. Building the initial heap takes $O(n)$ time. The algorithm then performs $n-1$ extract operations ($O(n)$), each requiring at most $O(\log\ n)$ time to restore the heap property using `siftDown()`.

- `Average case:` $O(n\ \log\ n)$. Same reasoning as above.

- `Best case:` $O(n\ \log\ n)$. Same reasoning as above.

---

# References

[1] https://en.wikipedia.org/wiki/Heapsort
