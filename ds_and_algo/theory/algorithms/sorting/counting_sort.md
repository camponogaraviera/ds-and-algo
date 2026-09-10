<div align='center'>
  <h1> Counting Sort </h1>
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

Counting Sort is a `non-comparison sorting` algorithm that can be faster than comparison-based sorting algorithms such as [Merge Sort](merge_sort.md), [Heap Sort](./heap_sort.md), and [Quick Sort](quick_sort.md) when the range of input values ($k$) is sufficiently small relative to the number of elements ($n$). Its performance advantage comes from avoiding element-to-element comparisons.

---

# Use Cases

It is primarily designed for sorting integers or other discrete values that can be mapped to integer keys. It is generally not suitable for arbitrary floating-point values or arbitrary data types without an appropriate mapping to discrete integer keys.

---

# Algorithm

The basic implementation assumes non-negative integer values.

1. Find the size of the count array (`k`):

- Identify the maximum value (`max`) in the input Array.
- The range `k` is typically `max + 1` (since indices start at 0).

2. Initialize a count array of size `k` to `0`.

3. Count occurrences of each element:

- Traverse the input array and increment `count[array[i]]` for each element.

4. Compute cumulative counts (prefix sums):
   - Modify the `count` array such that each entry `count[i]` contains the number of elements whose value is `≤ i`.
   - This is done by iterating and setting `count[i] += count[i - 1]` (starting from `i = 1`).

5. Build the output array in reverse order (for stability):
   - Initialize an output array of the same size as the input.
   - Traverse the input array backwards (from the end). For each element `array[i]`, place it at position `count[array[i]] - 1` in the output array, then decrement `count[array[i]]`.

6. Overwrite the original array with the sorted output array.

## Example

**Original array:** `[4, 2, 2, 8, 3, 3, 1]`.

---

**Step 1: Find the size of the count array (k).**

- The maximum value in the array is `max = 8`.
- So, `k = max + 1 = 9`.

---

**Step 2: Initialize the count array (Size k = 9).**

- `count = [0, 0, 0, 0, 0, 0, 0, 0, 0]` (indices 0 to 8).

---

**Step 3: Count occurrences of each element.**

- Traverse the input array and increment `count[array[i]]`:

```bash
4 → count[4]++ → [0, 0, 0, 0, 1, 0, 0, 0, 0]
2 → count[2]++ → [0, 0, 1, 0, 1, 0, 0, 0, 0]
2 → count[2]++ → [0, 0, 2, 0, 1, 0, 0, 0, 0]
8 → count[8]++ → [0, 0, 2, 0, 1, 0, 0, 0, 1]
3 → count[3]++ → [0, 0, 2, 1, 1, 0, 0, 0, 1]
3 → count[3]++ → [0, 0, 2, 2, 1, 0, 0, 0, 1]
1 → count[1]++ → [0, 1, 2, 2, 1, 0, 0, 0, 1]
```

**Final count array:** [0, 1, 2, 2, 1, 0, 0, 0, 1].

---

**Step 4: Compute cumulative counts (prefix sums).**

- Start from `i = 1` and do: `count[i] += count[i - 1]`. Obs: recall that `a += b` is equivalent to `a = a + b`.

```bash
count[1]+= count[0] → 1 + 0 = 1
count[2]+= count[1] → 2 + 1 = 3
count[3]+= count[2] → 2 + 3 = 5
count[4]+= count[3] → 1 + 5 = 6
count[5]+= count[4] → 0 + 6 = 6
count[6]+= count[5] → 0 + 6 = 6
count[7]+= count[6] → 0 + 6 = 6
count[8]+= count[7] → 1 + 6 = 7
```

**Original array:** `[4, 2, 2, 8, 3, 3, 1]`.
**Final Cumulative count array:** [0, 1, 3, 5, 6, 6, 6, 6, 7].

In this count array, `count[2] = 3`, for example, indicates that there are 3 elements in the original array whose values are ≤ 2: 1, 2, and 2. Similarly, `count[3] = 5` indicates that there are 5 elements whose values are ≤ 3: 1, 2, 2, 3, and 3.

---

**Step 5: Build the output array in reverse order (for stability).**

- Initialize an output array of the same size as the original array, filled with zeros:
  - Output array: `[0, 0, 0, 0, 0, 0, 0]`.

- Traverse the input array backwards (from the end). For each element `orgArray[i]`, place it at position `count[orgArray[i]] - 1` in the output array, then decrement `count[orgArray[i]]`.

**Original array:** `[4, 2, 2, 8, 3, 3, 1]`.
**Count array:** `[0, 1, 3, 5, 6, 6, 6, 6, 7]`.

```bash
orgArray[6] (=1) → count[1]-1 = 0 → output[0] = 1 → count[1]-- → [0, 0, 3, 5, 6, 6, 6, 6, 7]
orgArray[5] (=3) → count[3]-1 = 4 → output[4] = 3 → count[3]-- → [0, 0, 3, 4, 6, 6, 6, 6, 7]
orgArray[4] (=3) → count[3]-1 = 3 → output[3] = 3 → count[3]-- → [0, 0, 3, 3, 6, 6, 6, 6, 7]
orgArray[3] (=8) → count[8]-1 = 6 → output[6] = 8 → count[8]-- → [0, 0, 3, 3, 6, 6, 6, 6, 6]
orgArray[2] (=2) → count[2]-1 = 2 → output[2] = 2 → count[2]-- → [0, 0, 2, 3, 6, 6, 6, 6, 6]
orgArray[1] (=2) → count[2]-1 = 1 → output[1] = 2 → count[2]-- → [0, 0, 1, 3, 6, 6, 6, 6, 6]
orgArray[0] (=4) → count[4]-1 = 5 → output[5] = 4 → count[4]-- → [0, 0, 1, 3, 5, 6, 6, 6, 6]
```

**Final output array:** `[1, 2, 2, 3, 3, 4, 8]`.
**Final count array:** [0, 0, 1, 3, 5, 6, 6, 6, 6].

---

**Step 6: Overwrite the original array with the sorted output array.**

Final sorted array: `[1, 2, 2, 3, 3, 4, 8]`.

---

# Big O

Legend:

- $n$ is the number of elements in the input array.
- $k$ = max - min + 1 is the size of the counting range. Standard implementation uses `k = max + 1` (min = 0).

## Space Complexity

- `Worst case:` $O(k)$.

## Time Complexity

- `Worst case:` $O(n + k)$.
- `Average case:` $O(n + k)$.
- `Best case:` $O(n + k)$.
