<div align='center'>
  <h1> Queues </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Implementation](#implementation)
  - [Considerations](#considerations)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

Unlike Arrays, `Queues` do not allow random access operations. Queues follow the `FIFO (First In First Out)` order (opposite of LIFO), such that a dequeue operation removes the first element.

---

# Use Cases

A `Queue` can be used to implement:

- Waiting list.
- Printing jobs.
- User gameplay actions.
- [Breadth-first Search](../../algorithms/traversal/bfs.md).

---

# Implementation

Queues are not native (built-in) data structures in `Python` and `JavaScript`. Although not required, Queues can be implemented with classes for encapsulation, i.e., to organize the code into reusable objects that contain attributes and methods.

- Python:
  - Queues can be implemented with a `List`, a `Singly-Linked List`, `Collections.deque`, or `queue.Queue`.

- JavaScript:
  - Queues can be implemented with an `Array` or a `Singly-Linked List`.

- C++:
  - Has the built-in [std::queue](https://en.cppreference.com/cpp/container/queue) from the [Standard Template Library (STL)](https://en.cppreference.com/cpp/header).

## Considerations

- Implementing a `Queue with an Array is inefficient`, because removing the first element (dequeue) has linear time complexity O(n) since indexes need to be unshifted (shifted to the left).

- A `Singly-Linked List provides a more efficient implementation`, since removing the first element (dequeue) and adding to the end (enqueue) have constant time complexity O(1). Linked Lists also offer dynamic resizing, suitable for when the Queue size varies significantly.

- It is also possible to implement a Queue using two Stacks when the Stacks are implemented with Arrays. This approach is commonly referred to as "Queue using two stacks".
  - Enqueue: add elements to stack1 using push, which is O(1).
  - Dequeue operation transfer elements from stack1 to stack2 one at a time, using pop from stack1 and push to stack2. This takes O(n) for n elements in stack1 if stack2 is empty. If stack2 is not empty, simply pop from stack2, which is O(1).

# Big O

## Space Complexity

- Worst or Average case: `O(n)`. Because the amount of memory required to store the entire Queue is directly proportional to the number of elements in it.

## Time Complexity

For a Queue implementation with efficient insertion/deletion operations, such as a linked list-based implementation with head/tail pointers:

- `Insertion (a.k.a Enqueue)`: $O(1)$. Adds a new element to the back of the Queue.
- `Deletion (a.k.a Dequeue)`: $O(1)$. Removes the front element of the Queue.
- `Peek`: $O(1)$. Returns the front element of the Queue without removing it.

Note: Worst and Average cases have the same time complexity.
