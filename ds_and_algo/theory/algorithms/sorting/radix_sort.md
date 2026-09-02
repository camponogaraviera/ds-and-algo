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

# About

Is a `non-comparison sorting` algorithm that can be faster than comparison-based sorting algorithms such as [Quick Sort](quick_sort.md) or [Merge Sort](merge_sort.md) in certain scenarios. Its performance advantage comes from not having to make pairwise comparisons.

# Use Cases

It is primarily designed for sorting integers (does not work with float datatypes) and may not be suitable for sorting arbitrary data types or objects.

# Algorithm

1. Find the maximum number in the Array to determine the number of digits ($k$).

2. This means $k$ passes will be performed, sorting from the least significant digit (LSD) to the most significant digit (MSD) (e.g., units, tens, hundreds, etc.):

- Use [Counting Sort](counting_sort.md) as a subroutine to sort numbers based on the current digit place (units, tens, etc.).

3. Repeat the process for the next digit place (moving leftward to more significant digits) until all $k$ digits are processed.

4. The final Array is sorted.

## Example

**Original Array:** `[432, 123, 9]`.

---

**Step 1: Find the Maximum Number.**

- The largest number is `432`, which has `3 digits`.
- We'll perform `3 passes`, sorting from the `least significant digit (LSD)` to the `most significant digit (MSD)`.

---

**Step 2: Sort by 1st Digit (Units Place).**

| Number | Units Digit |
| ------ | ----------- |
| 432    | 2           |
| 123    | 3           |
| 9      | 9           |

After Sorting: `[432, 123, 9]` _(Order: 2, 3, 9)_.

_(No change here because the Array was already ordered by units digit.)_

---

**Step 3: Sort by 2nd Digit (Tens Place).**

| Number | Tens Digit (Pad '9' as '009') |
| ------ | ----------------------------- |
| 432    | 3                             |
| 123    | 2                             |
| 9      | 0                             |

After Sorting: `[9, 123, 432]` _(Order: 0, 2, 3)_.

_(Now `9` (→ `009`) moves first because its tens digit is `0`.)_

---

**Step 4: Sort by 3rd Digit (Hundreds Place).**

| Number | Hundreds Digit (Pad '9' as '009') |
| ------ | --------------------------------- |
| 9      | 0                                 |
| 123    | 1                                 |
| 432    | 4                                 |

After Sorting: `[9, 123, 432]` _(Order: 0, 1, 4)_.

_(No change because the Array was already ordered by hundreds digit.)_

---

Final Sorted Array: `[9, 123, 432]`.

# Big O

Legend:

- $n$ is the number of elements in the input Array.
- $k$ is the number of digits (or the maximum number of characters in case of string sorting) in the largest number, or the number of passes required to sort all numbers.

## Space Complexity

- `Worst case:` $O(n + k)$.

## Time Complexity

- `Worst case:` $O(nk)$.
- `Average case:` $O(nk)$.
- `Best case:` $O(nk)$.
