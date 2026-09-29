<div align='center'>
  <h1> Arrays </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Searching in Arrays](#searching-in-arrays)
  - [Example](#example)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

An `Array` is a collection of elements of possibly `many datatypes` stored/allocated in `contiguous memory locations`.

Arrays can be classified into two types:

- `Static Arrays`:
  - Fixed size: Their size/length is determined at the time of declaration and cannot be changed at runtime.
  - Contiguous memory allocation: Memory is allocated in a single block, making indexing efficient.
  - Efficient but inflexible: Cannot grow or shrink dynamically.

- `Dynamic Arrays`:
  - Can grow or shrink (resize) at runtime using memory reallocation techniques.

Depending on the programming language, an array may be `homogeneous` (storing elements of a single data type) or `heterogeneous` (storing elements of multiple data types). `Dynamic Arrays can be either homogeneous or heterogeneous`, depending on the language and implementation, while `static arrays are typically homogeneous`.

- Dynamically typed languages, such as Python and JavaScript, do not provide built-in statically typed Arrays. Python’s core sequence type is the heterogeneous, dynamically resizable list, with homogeneous dynamic arrays (e.g., array.array) available only through libraries. JavaScript does not distinguish between lists and arrays, instead offering a built-in dynamic Array type.
  - In `Python`, available data types include: `str, bool, int, float, complex, list, tuple, set, dict, NoneType, function`, etc.
  - In `JavaScript`, available data types include: `number, string, boolean, undefined, null, symbol, bigint, and object`.

- In statically typed languages, such as C, C++, and C#, Arrays (static or dynamic) are typically homogeneous, meaning that elements must be of the same data type.
  - In `C++`, available data types include: `char, signed char, unsigned char, short int, signed short int, unsigned short int, int, signed int, unsigned int, long int, signed long int, unsigned long int, long long int, signed long long int, unsigned long long int, float, double, bool, wchar_t, and enum`.
  - In `C#`, available data types include: `int, uint, short, ushort, long, ulong, byte, sbyte, float, double, char, bool, string`, `decimal`, `object`, `DateTime`, `TimeSpan`, etc.

# Use Cases

Arrays can be used to implement:

- A social media feed.
- Social media stories.
- A memory buffer.
- Hash Tables and Stacks.

Implementing a `Stack with an Array` allows `fast access` due to cache locality since elements are stored closer to each other in memory, `as compared to a Singly-Linked List`. However, dynamic arrays have a memory overhead associated with resizing since they need to double their memory as soon as they reach the limit. It allocates a new Array (2x the current size), copies elements, and deallocates the old one.

# Implementation

- In low-level languages: Dynamic arrays are implemented using pointers to allocate memory dynamically, typically in the heap, which allows for resizing during runtime. When a dynamic Array is resized, the memory needs to be reallocated. In C, this is often done with `realloc()`, which can resize an Array, potentially moving it to a new memory location and copying the elements over. Manual memory management is required, such as using `malloc()` (for allocation) and `free()` (for deallocation) in C.

- In high-level languages: An Array-like data structure can be implemented with a Class using a `container` (Python dict or JS object) under the hood.

Note: A memory heap is a region in memory used for dynamic memory allocation, i.e., to allocate memory for storing, without order, dynamic objects (hash tables, arrays, functions, etc.) created at runtime since they do not have a fixed size/length. It enables efficient storage and retrieval of data during a program's execution.

# Searching in Arrays

- If there is a need to perform `multiple searches` on the same Array or if the Array is large, sorting the Array with [merge sort](../../algorithms/sorting/merge_sort.md), which takes `O(n log n)` time complexity, can be advantageous. This is because, after sorting, it is possible to implement [binary search](../../algorithms/searching/binary_search.md) (that uses [divide and conquer](../../algorithms/divide_and_conquer/divide_and_conquer.md)), which takes time complexity `O(log n)`, since a sorted Array resembles a [binary search tree](../trees/binary_search_tree.md).

- If you only need to perform a `single search` or if the Array is small, then the overhead of sorting might not be worth it compared to just doing a [linear search](../../algorithms/searching/linear_search.md), which takes time complexity `O(n)`.

## Example

Suppose the Array has a length of `n=1000`. Sorting the Array with [merge sort](../../algorithms/sorting/merge_sort.md) takes `O(n log n)~1000x10=10,000 operations`. Then [binary search](../../algorithms/searching/binary_search.md) on this sorted Array will take `O(log n)~10 operations`, while [linear search](../../algorithms/searching/linear_search.md) will take `O(n)=1000 operations`. Then `sorting + binary search` will equate to a total of 10,000 (sort) + 10 (search) = `10,010 operations`. This means that `linear search` would be more suitable `if only one search` is required.

If `20 or more searches` are required, linear search will equate to a total of 1000x20=20,000 operations, while sort + binary search = 10,000 + 20x10 = 10,200 operations, in which case `sorting becomes advantageous`.

# Big O

## Space Complexity

- `Worst or Average case`: $O(n)$. Because the amount of memory required to store the entire Array is directly proportional to the number of elements in it.

## Time Complexity

Worst and Average cases have the same time complexity for either a static or dynamic Array.

- `Access (lookup-by-index)`: $O(1)$. Because it is possible to access the value of an element directly by knowing its index.
- `Search (lookup-by-value)`: $O(n)$. Because it requires iterating over all elements in the Array to find the index of the target value.
- `Insertion (to the beginning or middle)`: $O(n)$. Because it requires shifting the elements to the right.
- `Deletion (from the beginning or middle)`: $O(n)$. Because it requires shifting the elements to the left.
- `Append/Push (insert to the end)`: $O(1)$.
- `Pop (delete from the end)`: $O(1)$.
