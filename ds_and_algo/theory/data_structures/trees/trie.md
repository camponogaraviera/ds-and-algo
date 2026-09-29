<div align='center'>
  <h1> Trie </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)
  - [Height Complexity](#height-complexity)

# About

In a [Trie (a.k.a Prefix Tree)](https://en.wikipedia.org/wiki/Trie), each node stores a character or a digit, and the root node is always empty. It is not a Binary Tree since each node can have more than two children.

# Use Cases

- Searching words in a dictionary.
- Autocomplete.
- Spell checking.
- IP routing (longest prefix matching).
- T9 predictive text.
- Solving word puzzles.

# Big O

Considering $N$ to be the number of strings and $M$ the length of the longest stored string.

## Space Complexity

- `Worst and Average cases:` $O(N \* M)$.

## Time Complexity

Worst and Average cases are the same.

- `Search (lookup-by-value):` $O(N)$.
- `Insertion:` $O(N)$.
- `Deletion:` $O(N)$.

## Height Complexity

- `Worst case:` $O(M)$.
- `Best case:` $O(log\ N)$. Because strings are sorted.
