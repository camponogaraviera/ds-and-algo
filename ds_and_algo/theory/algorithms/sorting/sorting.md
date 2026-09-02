<div align='center'>
  <h1> Sorting </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Implementation](#implementation)
- [Big O](#big-o)

# About

[Bubble Sort](bubble_sort.md) and [Selection Sort](selection_sort.md) are primarily used for teaching, but not in the industry.

For `small or nearly sorted Arrays`, [Insertion Sort](insertion_sort.md) is `faster than` [Bubble Sort](bubble_sort.md), [Selection Sort](selection_sort.md), [Merge Sort](merge_sort.md), [Quick Sort](quick_sort.md), [Heap Sort](heap_sort.md), and [Shell Sort]().

# Implementation

## In JavaScript

JavaScript has a built-in `array.sort(compareFn)` sorting method. Modern JS engines (e.g., V8 in Chrome, Node.js, or Edge) use the [Timsort](https://pt.wikipedia.org/wiki/Timsort) algorithm under the hood, SpiderMonkey (Firefox) uses [Merge Sort](./merge_sort.md), while older engines may use [QuickSort](./quick_sort.md). Timsort is a hybrid stable sorting algorithm based on [Merge Sort](./merge_sort.md) and [Insertion Sort](./insertion_sort.md).

```javascript
const arr = [3, 2, 1];
arr.sort((a, b) => a - b); // Sorts numerically in ascending order.
console.log(arr); // [1, 2, 3]
```

## In Python

Python has a built-in `list.sort()` method that uses the TimSort algorithm under the hood.

```python
arr = [3, 2, 1];
arr.sort()
print(arr); # [1, 2, 3]
```

# Big O

The Time and Space Complexity of sorting algorithms is implementation-dependent.
