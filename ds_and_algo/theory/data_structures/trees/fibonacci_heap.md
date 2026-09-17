<div align='center'>
  <h1> Fibonacci Heap </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)

# About

A [Fibonacci heap](https://en.wikipedia.org/wiki/Fibonacci_heap) is a collection of heap-ordered trees satisfying the minimum-heap property, meaning the key of every child node is greater than or equal to the key of its parent. It implements a heap-based priority queue.

A Fibonacci heap-based priority queue improves the time complexity of Dijkstra's algorithm and Prim's algorithm to $O(E + V \cdot log(V))$.
