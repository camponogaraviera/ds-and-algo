<div align='center'>
  <h1> Data Structures </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [N-bit Systems](#n-bit-systems)
- [Floating Point Formats](#floating-point-formats)

# About

A data structure is an abstract way of organizing and managing data, often implemented as a collection (container) of values stored in memory. It enables efficient operations such as searching, inserting, deleting, and updating data. Values within a data structure consist of specific data types, each allocated in a designated memory space. During program execution, data structures are generally stored in volatile storage (e.g., registers, cache, DRAM). But some data structures are designed to live in persistent storage (e.g., B-trees in databases). 

In typical DRAM, each physical memory cell (smallest storable unit) stores a single bit, and groups of eight bits (one byte) form the smallest addressable unit (byte-addressable) in most modern architectures, i.e., each byte has a unique memory address (bits inside a byte do not have separate addresses).

Program performance often improves when data is stored closer to the CPU, due to the memory hierarchy: registers and caches are faster than main memory, which in turn is faster than persistent storage.

Consider the following example of a data structure:

```python
a = [10, 20, 30]
id(a[0])  # Address of the first element's object in memory.
id(a[1])  # Address of the second element's object in memory.
id(a[2])  # Address of the third element's object in memory.
```

In Python, a list is a collection of references (pointers) to objects stored in contiguous memory locations. Each memory slot (bucket) in the list is a reference to an object, and the `id()` function returns the memory address of the object that the reference points to, not the address of the slot itself.

# N-bit Systems

An N-bit system can represent $2^N$ distinct values (bit patterns):
- Unsigned integers: Range from 0 to $2^N - 1$.
- Signed integers (two's complement): Range from $-2^{N-1}$ to $2^{N-1} - 1$. In two's complement, exactly half of the patterns represent negative numbers, and the other half represent non-negative numbers (zero and positives). Since zero is on the non-negative side, there is one fewer positive integer than there are negative integers.

Common N-bit systems:

| Bit width | Bytes | Distinct patterns | Signed range              | Unsigned range      |
| --------- | ----- | ----------------- | ------------------------- | ------------------- |
| 64-bit    | 8     | $2^{64}$          | $-2^{63}$ to $2^{63} - 1$ | $0$ to $2^{64} - 1$ |
| 32-bit    | 4     | $2^{32}$          | $-2^{31}$ to $2^{31} - 1$ | $0$ to $2^{32} - 1$ |
| 16-bit    | 2     | $2^{16}$          | $-2^{15}$ to $2^{15} - 1$ | $0$ to $2^{16} - 1$ |
| 8-bit     | 1     | $2^{8}$           | $-2^{7}$ to $2^{7} - 1$   | $0$ to $2^{8} - 1$  |

# Floating Point Formats

| Format         | Bits total | Sign | Exponent (range) | Mantissa (precision) | Notes                                                                |
| -------------- | ---------- | ---- | ---------------- | -------------------- | -------------------------------------------------------------------- |
| **float64**    | 64         | 1    | 11               | 52                   | Double precision, high range. |
| **float32**    | 32         | 1    | 8                | 23                   | Single precision, wide range.                                          |
| **FP16**       | 16         | 1    | 5                | 10                   | Narrower range, more precision than bfloat16.                        |
| **bfloat16**   | 16         | 1    | 8                | 7                    | Same range as float32, less precision.                               |
| **FP4 (E2M1)** | 4          | 1    | 2                | 1                    | Tiny range and precision.                                            |
| **MXFP4**      | 4          | 1    | 2–3              | 0–1                  | Hardware-specific.                                                   |
