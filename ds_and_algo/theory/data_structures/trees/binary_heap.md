<div align='center'>
  <h1> Binary Heap </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

A Binary Heap (BH) is a `Complete Binary Tree` that is `always balanced` (height is $O(log\ n)$ ) and `preserves the order of insertion`, but it is **not sorted by value** as a [Binary Search Tree](./binary_search_tree.md).

Obs: a BH is not the same as the memory heap component from the engine of a runtime environment (e.g., JS or Node.js).

It has the following special properties:

1. It is always a `Complete Binary Tree`.

2. It is either a `min heap` or a `max heap`.

- Min heap: the value of any parent node is less than or equal to the values of its child nodes. The minimum element is always the root.

```bash
    1
   / \
  2   3
 / \
4   5
```

- Max heap: the value of any parent node is greater than or equal to the values of its child nodes.

```bash
    7
   / \
  5   6
 / \ / \
1  2 3  4
```

# Use Cases

A `Binary Heap` can be used to implement:

- Data sctructures (e.g., [priority queue](../queues/priority_queues.md)) and algorithms (e.g. [heap sort](../../algorithms/sorting/heap_sort.md)) where order is important, particularly for comparative operations. 
  -  Reason: due to fast (O(1)) access to the root node which is always the smaller (min) or largest (max) element.

- Data storage: applications where elements need to be efficiently inserted and removed while maintaining a structured order.


# Implementation

Even though a Binary Heap is a Binary Tree, it does not need to be implemented using a `Node object` (with explicit `left` and `right` child pointers). Instead, it can be implemented with a class using an Array data structure as the heap attribute.

- Python: has a built-in heap module named `heapq`.

- JavaScript: does not have a built-in heap module like Python's `heapq`.

# Big O

Considering $n$ to be the number of nodes in the Binary Heap.

## Space Complexity

- `Worst and Average case:` $O(n)$.

## Time Complexity

Worst and Average cases are the same.

- `Search (lookup-by-value)`: $O(n)$. Since values are **not sorted**, it requires traversing over all entries in the Heap to find the right value given the index.
- `Insertion`: $O(log\ n)$. Due to the Tree's height.
- `Deletion`: $O(log\ n)$. Due to the Tree's height.
- `Peek`: $O(1)$.

## Height Complexity

- `Worst case:` $O(log\ n)$.
- `Best case:` $O(log\ n)$.
