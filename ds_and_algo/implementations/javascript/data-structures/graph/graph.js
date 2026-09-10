/**
 * Class to build an undirected and unweighted graph using Adjacency List.
 */
class UndirectedGraph {
  /**
   * @constructs UndirectedGraph
   * @property {{[key: string]: Set<string | number>}} adjList - Stores nodes as keys and their neighbors as Sets.
   * @property {number} numNodes - Counter for the number of nodes.
   */
  constructor() {
    this.adjList = {};
    this.numNodes = 0;
  }

  /**
   *
   * @description - Adds a new node (vertex) to the graph if it does not already exist.
   * @param {string|number} node - The node to add.
   * @throws {Error} - If node is not a string or number.
   * @returns {void}
   * Time Complexity: O(1) in the worst case.
   */
  addNode(node) {
    // Type checking:
    if (typeof node !== "string" && typeof node !== "number") {
      throw new TypeError("Node must be of type string or number.");
    }

    // Prevent overwriting existing nodes:
    if (!this.#hasNode(node)) {
      this.adjList[node] = new Set(); // Using set to avoid duplicate edges.
      this.numNodes++; // Increments the number of nodes.
    }
  }

  /**
   *
   * @description - Adds an undirected edge (connection) between two nodes.
   * @param {string|number} node1 - The first node.
   * @param {string|number} node2 - The second node.
   * @throws {Error} - If node is not a string or number.
   * @throws {Error} - If a self-loop is attempted.
   * @returns {void}
   * Time Complexity: O(1) in the worst case.
   */
  addConnection(node1, node2) {
    // Type checking:
    if (
      (typeof node1 !== "string" && typeof node1 !== "number") ||
      (typeof node2 !== "string" && typeof node2 !== "number")
    ) {
      throw new TypeError("Nodes must be of type string or number.");
    }

    if (String(node1) === String(node2)) {
      throw new Error("Self-loops are not allowed.");
    }

    // Add nodes if they do not exist:
    if (!this.#hasNode(node1)) {
      this.addNode(node1);
    }
    if (!this.#hasNode(node2)) {
      this.addNode(node2);
    }
    // Prevent duplicate edges:
    this.adjList[node1].add(node2); // Add node2 to node1's Adjacency List.
    this.adjList[node2].add(node1); // Add node1 to node2's Adjacency List.
  }

  /**
   *
   * @description - Deletes a connection (edge or synapse) between two nodes.
   * @param {string|number} node1 - The first node of the edge.
   * @param {string|number} node2 - The other node of the edge.
   * @throws {Error} - If the edge does not exist.
   * @returns {void}
   * Time Complexity: O(1) in the worst case.
   */
  removeConnection(node1, node2) {
    // Edge Case (if there is no connection):
    if (!this.#hasEdge(node1, node2)) {
      throw new Error(`Edge between ${node1} and ${node2} does not exist.`);
    }
    this.adjList[node1].delete(node2);
    this.adjList[node2].delete(node1);
  }

  /**
   *
   * @description - Removes a node and all of its connections from the graph.
   * @param {string|number} node - The node to remove.
   * @throws {Error} - If the node does not exist.
   * @returns {void}
   * Time Complexity: O(n) where n is the number of connections (edges) of the node.
   */
  removeNode(node) {
    // Edge Case (if the node does not exist):
    if (!this.#hasNode(node)) {
      throw new Error("Node does not exist.");
    }

    // Loop over each neighbor in the set to remove their connections preventing dangling references:
    for (const neighbor of this.adjList[node]) {
      this.removeConnection(node, neighbor);
    }

    // Delete the empty node:
    delete this.adjList[node];
    this.numNodes--;
  }

  /**
   *
   * @description - Checks whether a node exists in the graph.
   * @param {string|number} node - The node to check.
   * @returns {boolean} - True if the node exists, false otherwise.
   * Time Complexity: O(1) in the worst case.
   */
  #hasNode(node) {
    return Object.hasOwn(this.adjList, node);
  }

  /**
   *
   * @description - Checks if an edge exists between two nodes.
   * @param {string|number} node1 - The first node.
   * @param {string|number} node2 - The other node.
   * @returns {boolean} - True if the edge exists, false otherwise.
   * Time Complexity: O(1) in the worst case.
   */
  #hasEdge(node1, node2) {
    if (!this.#hasNode(node1) || !this.#hasNode(node2)) return false;
    return this.adjList[node1].has(node2);
  }
}

/*
Creating the following graph:
  0
 / \
1 - 2
*/

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let graph = new UndirectedGraph();
  graph.addConnection(0, 1);
  graph.addConnection(0, 2);
  graph.addConnection(1, 2);
  console.log(graph.adjList); // { '0': Set(2) { 1, 2 }, '1': Set(2) { 0, 2 }, '2': Set(2) { 0, 1 } }
  console.log(graph.numNodes); // 3
}
