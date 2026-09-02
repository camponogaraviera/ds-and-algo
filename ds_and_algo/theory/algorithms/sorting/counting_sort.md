<div align='center'>
  <h1> Counting Sort </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Algorithm](#algorithm)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Counting Sort is a `non-comparison sorting` algorithm that can be faster than comparison-based sorting algorithms such as [Merge Sort](merge_sort.md), [Heap Sort](./heap_sort.md), and [Quick Sort](quick_sort.md)  in certain scenarios. Its performance advantage comes from not having to make pairwise comparisons.

# Use Cases

It is primarily designed for sorting integers (does not work with float datatypes) and may not be suitable for sorting arbitrary data types or objects.

# Algorithm

1. Find the range of values (`k`):

- Identify the maximum value (`max`) in the input Array.
- The range `k` is typically `max + 1` (since indices start at 0).

2. Initialize a count Array of size `k` to `0`.

3. Count occurrences of each element:

- Traverse the input Array and increment `count[Array[i]]` for each element.

4. Compute cumulative counts (prefix sums):

   - Modify the `count` Array such that each entry `count[i]` contains the number of elements `≤ i`.
   - This is done by iterating and setting `count[i] += count[i - 1]` (starting from `i = 1`).

5. Build the output Array in reverse order (for stability):

   - Initialize an output Array of the same size as the input.
   - Traverse the input Array backwards (from the end). For each element `Array[i]`, place it at position `count[Array[i]] - 1` in the output Array, then decrement `count[Array[i]]`.

6. Overwrite the original Array with the sorted output Array.

## Example

**Original Array:** `[4, 2, 2, 8, 3, 3, 1]`.

---

**Step 1: Find the range of values (k).**

- The maximum value in the Array is `max = 8`.
- So, `k = max + 1 = 9`.

---

**Step 2: Initialize the Count Array (Size = 9).**

- `count = [0, 0, 0, 0, 0, 0, 0, 0, 0]` (indices 0 to 8).

---

**Step 3: Count occurrences of each element.**

- Traverse the input Array and increment `count[Array[i]]`:

```bash
4 → count[4]++ → [0, 0, 0, 0, 1, 0, 0, 0, 0]
2 → count[2]++ → [0, 0, 1, 0, 1, 0, 0, 0, 0]
2 → count[2]++ → [0, 0, 2, 0, 1, 0, 0, 0, 0]
8 → count[8]++ → [0, 0, 2, 0, 1, 0, 0, 0, 1]
3 → count[3]++ → [0, 0, 2, 1, 1, 0, 0, 0, 1]
3 → count[3]++ → [0, 0, 2, 2, 1, 0, 0, 0, 1]
1 → count[1]++ → [0, 1, 2, 2, 1, 0, 0, 0, 1]
```

**Final count Array:** [0, 1, 2, 2, 1, 0, 0, 0, 1].

---

**Step 4: Compute cumulative counts (prefix sums).**

- Start from `i = 1` and do: `count[i] += count[i - 1]`.
  - Obs: recall that `a += b` is equivalent to `a = a + b`.

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

**Final Cumulative Count Array:** [0, 1, 3, 5, 6, 6, 6, 6, 7].

---

**Step 5: Build the output Array in reverse order (for stability).**

- Initialize an output Array of the same size as the input (7 elements):

  - Output Array: `[0, 0, 0, 0, 0, 0, 0]`.

- Traverse the input Array backwards (from the end). For each element `Array[i]`, place it at position `count[Array[i]] - 1` in the output Array, then decrement `count[Array[i]]`.

**Original Array:** `[4, 2, 2, 8, 3, 3, 1]`.
**Count Array:** `[0, 1, 3, 5, 6, 6, 6, 6, 7]`.

```bash
Array[6] (=1) → count[1]-1 = 0 → output[0] = 1 → count[1]-- → [0, 0, 3, 5, 6, 6, 6, 6, 7]
Array[5] (=3) → count[3]-1 = 4 → output[4] = 3 → count[3]-- → [0, 0, 3, 4, 6, 6, 6, 6, 7]
Array[4] (=3) → count[3]-1 = 3 → output[3] = 3 → count[3]-- → [0, 0, 3, 3, 6, 6, 6, 6, 7]
Array[3] (=8) → count[8]-1 = 6 → output[6] = 8 → count[8]-- → [0, 0, 3, 3, 6, 6, 6, 6, 6]
Array[2] (=2) → count[2]-1 = 2 → output[2] = 2 → count[2]-- → [0, 0, 2, 3, 6, 6, 6, 6, 6]
Array[1] (=2) → count[2]-1 = 1 → output[1] = 2 → count[2]-- → [0, 0, 1, 3, 6, 6, 6, 6, 6]
Array[0] (=4) → count[4]-1 = 5 → output[5] = 4 → count[4]-- → [0, 0, 1, 3, 5, 6, 6, 6, 6]
```

**Final Output Array:** `[1, 2, 2, 3, 3, 4, 8]`.
**Final Count Array:** [0, 0, 1, 3, 5, 6, 6, 6, 6].

---

**Step 6: Overwrite the original Array with the sorted output Array.**

Final sorted Array: `[1, 2, 2, 3, 3, 4, 8]`.

# Big O

Legend:

- $n$ is the number of elements in the input Array.
- $k$ = max - min + 1. Standard implementation uses `k = max + 1` (min = 0).

## Space Complexity

- `Worst case:` $O(k)$.

## Time Complexity

- `Worst case:` $O(n+k)$.
- `Average case:` $O(n+k)$.
- `Best case:` $O(n+k)$.
