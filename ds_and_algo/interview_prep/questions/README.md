<div align='center'>
  <h1> Technical Interview </h1>
  <h1> Questions </h1>
</div>

# 1) Which data structure provides the fastest lookup by integer index/key on average?

1. Array.
2. Hash Table.
3. Doubly Linked List.
4. Binary Search Tree.

**Answer**: Arrays.

**Reason**: Arrays provide the fastest lookup by integer index due to cache locality $O(1)$.

- Hash tables also offer $O(1)$ average lookup, but incur hashing and collision overhead.

- Linked lists require node traversal: $O(n)$.

- Balanced binary search trees (e.g., AVL, RBT) support value-based lookup, but not index-based access: $O(\log\ n)$.

---

# 2) Which data structure is most efficient for finding the first repeated element in a sequence?

1. Array.
2. Hash Table.

**Answer**: Hash Table.

**Reason**: A hash table allows $O(1)$ average-time complexity for both insertions and lookup-by-key. By iterating through the elements of the sequence and checking whether each element already exists in the hash table, we can efficiently identify the first repeated element.

---

# 3) How to search/query in a large vector database?

Searching over a dataset with 10M+ embeddings can be exhaustive if the query embedding (query vector) has to be compared to every other embedding (vector) in the dataset. 

- Searching for similar vectors in high-dimensional vector databases can be achieved using `Approximate Nearest Neighbor (ANN)` search. ANN search can be accelerated using `vector indexing algorithms`, such as [Hierarchical Navigable Small World (HNSW)](https://en.wikipedia.org/wiki/Hierarchical_navigable_small_world) or [Inverted File with Flat Index (IVFFlat)](https://github.com/pgvector/pgvector?tab=readme-ov-file#ivfflat). Both are supported by [PostgreSQL's pgvector extension](https://github.com/pgvector/pgvector).

- [FAISS](https://github.com/facebookresearch/faiss) is a library for `efficient similarity search of dense vectors`. It supports both exact and approximate nearest-neighbor indexes. `Similar vectors have the lowest L2 distance and the highest dot product`.

---

# 4) Estimate how many Google search queries are made per second.

---

# 5) How would you implement an algorithm to detect a cycle in a graph?

---

# 6) How would you implement an algorithm to reverse a linked list?

---

# 7) How would you implement an algorithm to find duplicates in a large dataset? Can you make it faster than $O(n^2)$? How would it work for 1 billion records? Handle edge cases. Analyze trade-offs.

---

# 8) Solve these LeetCode Problems using DSA Patterns: 

- [Python](../leetcode/python/README.md).
- [Modern JavaScript (ES6+)](../leetcode/javascript/README.md).
- [C++](https://github.com/camponogaraviera/ds-and-algo-cpp/blob/main/ds_and_algo_cpp/interview_prep/leetcode/README.md).
 
---

# 9) Design a [Restaurant Reservation System](https://github.com/camponogaraviera/full-stack-ai-sw-roadmap/blob/main/interview_prep/rest_reservation.md).

---

# 10) Design a [YouTube-like On-Demand Video Streaming Service](https://github.com/camponogaraviera/full-stack-ai-sw-roadmap/blob/main/interview_prep/youtube.md).

---

# 11) Design a [Search Engine like Google](https://github.com/camponogaraviera/full-stack-ai-sw-roadmap/blob/main/interview_prep/google_search_engine.md).

---

# 12) Design a URL Shortener.

---
