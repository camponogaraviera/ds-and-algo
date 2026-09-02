<div align='center'>
  <h1> Graphs </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
  - [Types](#types)
- [Use Cases](#use-cases)
- [Implemention](#implemention)
- [Technologies](#technologies)
  - Neo4j
  - Networkx
  - PyTorch Geometric

# About

In `Graph` theory, a data entity is represented by a `node (a.k.a vertex)`, and neighboring nodes are called `adjacent vertices`, while the connection between two nodes is called an `edge`.

- A `Graph` has the following properties:
  - `Cyclic Graph`: connected nodes form a cyclic path.
  - `Acyclic Graph`: no cyclic paths.
  - `Weighted Graph`: each branch or edge has a numerical value.
  - `Unweighted Graph`: edges have no numerical value.
  - `Directed Graph`: edges have a one-way direction.
  - `Undirected Graph`: edges have no specific direction.

Graphs are more complex structures than Trees since they can have cycles (loops), meaning that a path can lead back to a previously visited node.

---

## Types

1. Consider the following `Cyclic Undirected Graph` structure:

```bash
  0
 / \
1 - 2
```

- Edge list (store connection pairs):

```javascript
const edgeList = [
  [0, 1],
  [0, 2],
  [1, 2],
];
```

- Adjacency list (store neighbors):

```javascript
const adjList = [
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
];
```

- Adjacency matrix: is a binary matrix that adds 1 if there is a connection and 0, otherwise.

```javascript
const adjMatrix = {
  0: [0, 1, 1],
  1: [1, 0, 1],
  2: [1, 1, 0],
};
```

2. Consider the following `Cyclic directed Graph` structure:

```bash
0 → 1
↓   ↓
2 ──┘
```

- Edge list (store connection pairs):

```javascript
const edgeList = [
  [0, 1],
  [0, 2],
  [1, 2],
];
```

- Adjacency list (store neighbors):

```javascript
const adjList = [
  0: [1, 2],
  1: [2],
  2: [],
];
```

- Adjacency matrix:

```javascript
const adjMatrix = {
  0: [0, 1, 1],
  1: [0, 0, 1],
  2: [0, 0, 0],
};
```

---

# Use Cases

`Graphs` are useful in:

- **Social Networks:** Facebook/Meta uses `undirected Graphs` to store friend connections (followers, followed).

- **Route Optimization:** Google Maps uses `weighted Graphs` to find the shortest route.

- **Search Engines:** uses a Graph database to store `web pages` for a Web Crawler.

- **Graph Database Technologies:** `Neo4j`, `Amazon Neptune`, and `GraphDB`.

---

# Implemention

It is possible to implement a `Graph` using `Arrays`, `Hash Tables` or `Linked Lists`.

---

# Technologies

## Neo4j 

[Neo4j](https://neo4j.com/) is a production-ready and scalable `Graph` database. It is best suited for:

- Storing social media connections/networking (followers, followee).
- Storing Webpages for a WebCrawler.
- Building a fraud detection system.
- Building a recommendation engine.

## Networkx

[Networkx](https://networkx.org/en/) is designed for:

- Building graphs.
- Running graph algorithms (BFS, shortest path, centrality, etc.).

## PyTorch Geometric

In [PyTorch Geometric](https://pytorch-geometric.readthedocs.io/en/latest/) (PyG), a full graph is usually a [torch_geometric.data.Data](https://pytorch-geometric.readthedocs.io/en/stable/generated/torch_geometric.data.Data.html) object containing:

- `x`: node feature matrix with shape `[num_nodes, num_node_features]`.
- `edge_index`: graph connectivity with shape `[2, num_edges]`.
- `edge_attr`: edge feature matrix with shape `[num_edges, num_edge_features]`.
