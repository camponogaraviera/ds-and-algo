<div align='center'>
  <h1> Hash Tables </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Collisions](#collisions)
  - [Ways to Avoid Collisions](#ways-to-avoid-collisions)
  - [Ways to Handle Collisions](#ways-to-handle-collisions)
    - Separate Chaining
    - Linear Probing
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

A `Hash Table` is a data structure that stores data in `key-value pairs`. Each key is mapped to a hash code (in constant time) via a hash function in a process known as "`hashing`". This hash code is transformed into an index/address to locate the memory slot that will store or retrieve data associated with the key. The address either points to a `single slot` (as in `Open Addressing`) or to a `bucket (e.g., Array or Linked List)` that can store `multiple keys` (as in `Separate Chaining`) to resolve collisions.

Properties of the Hash Function:

- One-way: Maps a key to an address, but not the address back to a key.
- Deterministic: The same key is always mapped to the same address.

Properties of the Hash Table:

- Keys are unique by default, i.e., it is not possible to have duplicate keys.
- Values associated with keys can be of any data type.
- Hash Tables are faster than Arrays when there are no collisions.

- In JavaScript
  - Hash Tables are called `objects`.
  - Valid `keys` can be only of type `String` and `Symbol`.
  - If a key is not a type string or symbol, JavaScript will automatically convert it to a string.
  - Numeric keys are `sorted in ascending order`.
  - Hash Tables do not preserve the order of insertion.

- In Python:
  - Hash Tables are called `dictionaries`.
  - Valid `keys` can be only of `Immutable Types` (e.g., int, str, float, tuple, boolean).
  - Numeric keys are `not sorted`.
  - Hash Tables preserve the order of insertion.
  - Dictionaries are ordered since Python 3.6.

# Use Cases

A Hash Table can be used to implement:

- Dictionaries.
- Key-value store databases.
- Caching layers.
- A user session management.
- Memory buffers.
- A mapping of human-friendly domain names (example.com) into IP addresses (e.g., 192.0.2.1) in DNS, etc.

# Collisions

A `Collision` occurs when multiple keys are mapped (hashed) to the same address. This happens when there is limited memory. As a consequence, it can slow down read and write (lookup, insert, and delete) operations.

## Ways to Avoid Collisions

1. Allocate enough memory.

2. Design a good hashing function. If `hash_value = h(key) % hash_table_size`, choosing a `large prime number` for `hash_table_size` can reduce systematic collisions when the hash function `h(key)` or the keys exhibit patterns that interact poorly with the modulus, but it is not a substitute for a well-distributed hash function (or proper bit-mixing) and does not guarantee uniform distribution.

## Ways to Handle Collisions

1. `Separate Chaining`: When multiple keys hash to the same address, instead of overwriting the existing key-value pair, the Hash Table stores each pair (often as a tuple) in the same bucket (e.g., an Array or a Linked List).

2. `Open Addressing` is another resolution method for collisions that uses probing. When a collision occurs, the algorithm probes for the next available slot rather than storing multiple elements in the same slot. `Each slot is designed to hold only a single key-value pair`. When no empty slots are available, a common approach is to `rehash all existing keys` into a new, larger table using the same hash function. Common probe sequences are:
   - `Linear Probing`: The interval between probes is fixed (usually 1).
   - `Quadratic probing`: The interval between probes is increased by adding the outputs of a quadratic polynomial to the value of the hash function.
   - `Double hashing`: The interval between probes is given by a secondary hash function.

Note: Rehashing involves creating a new, larger hash table.

# Implementation

A `Hash Table` can be implemented with a Class using:

- `Arrays as Buckets for Separate Chaining:`
  - Each bucket is an array storing key-value pairs.
  - Collision Handling: If two keys hash to the same bucket, they are appended to the bucket's array.
  - Cons: Deleting a node requires shifting (re-indexing) remaining elements to the left, adding an overhead of $O(n)$ in time complexity. Re-indexing can be avoided by marking deleted slots as `tombstones` (null/None), however, this will waste memory in the long run.

- `Linked Lists as Buckets for Separate Chaining:`
  - Each bucket is a linked list of nodes (key-value pairs).
  - Collision Handling: If two keys hash to the same bucket, they are appended to the linked list.
  - Pros: Deletion requires no shifting overhead.

# Big O

## Space Complexity

- Worst or Average case: $O(n)$. Because the amount of memory required to store the entire Hash Table is directly proportional to the number of key-value pairs in it.

## Time Complexity

- **Average case (no collisions)**:
  - `Access (lookup-by-key)`: $O(1)$. Given the key, a hashing function can be used to obtain the address that points to the corresponding memory slot containing a single key-value pair.
  - `Search (lookup-by-value)`: $O(n)$. Because it requires iterating over all memory slots to find the right key given the value.
  - `Insertion`: $O(1)$.
  - `Deletion`: $O(1)$.
  
- **Worst case (with collisions)**:
  - `Access (lookup-by-key)`: $O(n)$. Because it may require checking up to all stored elements to find the right value, given the key.
    - Open addressing: may probe up to $n$ positions (slots) due to clustering.
    - Separate chaining: may scan up to $n$ elements if all keys hash to the same bucket.
            
  - `Search (lookup-by-value)`: $O(n)$. Because it may require checking all stored elements to find the right key, given the value.
    - Open addressing: may scan all occupied memory slots.
    - Separate chaining: may scan all $n$ stored elements.
            
  - `Insertion`: $O(n)$ due to collision resolution.
    - Open addressing: may probe up to $n$ slots.
    - Separate chaining: may scan up to $n$ elements if the target bucket is degenerate.
      
  - `Deletion`: $O(n)$ due to locating the target key under collision resolution.
    - Open addressing: may probe up to $n$ slots.
    - Separate chaining: may scan up to $n$ elements if all keys hash to the same bucket.
