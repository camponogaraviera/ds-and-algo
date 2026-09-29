<div align='center'>
  <h1> Bloom Filters </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Bloom Filters vs Hash Tables](#bloom-filters-vs-hash-tables)

# About

A Bloom Filter is a probabilistic data structure used to check membership (whether an element belongs to a set). Probabilistic means it can provide false positives (incorrectly indicating that an element is in the set) but never false negatives (if it says the element is not in the set, it definitely isn't). Unlike Hash Tables, Bloom filters do not store the actual elements or their values. Instead, they use a compact bit array that allows for efficient membership testing.

# Bloom Filters vs Hash Tables

The key differences between Bloom Filters and Hash Tables are as follows:

- Accuracy: Hash Tables provide exact matches (no false positives or negatives), while Bloom filters can have false positives.

- Space Efficiency: Bloom filters are more space-efficient, especially when dealing with large sets, because they do not store the actual data.

- Purpose: Hash Tables are used for general-purpose key-value storage and retrieval, while Bloom filters are used specifically for fast, probabilistic membership testing.
