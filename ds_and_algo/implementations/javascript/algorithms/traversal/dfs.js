/*
Implementing the DFS method to traverse a BST.
*/

import { BinarySearchTree, Node } from "#js/data-structures/trees/binary-search-tree.js";

/**
 * Class extending a Binary Search Tree with DFS.
 */
export class BinarySearchTreeWithDFS extends BinarySearchTree {
  /**
   *
   * @description - Traverse the BST in depth-first pre-order.
   * @returns {Array} - The array of values in pre-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  depthFirstSearchPreOrder() {
    if (!this.root) return [];
    return this.#traversePreOrder(this.root, []);
  }

  /**
   *
   * @description - Traverse the BST in depth-first in-order.
   * @returns {Array} - The array of values in in-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  depthFirstSearchInOrder() {
    if (!this.root) return [];
    return this.#traverseInOrder(this.root, []);
  }

  /**
   *
   * @description - Traverse the BST in depth-first post-order.
   * @returns {Array} - The array of values in post-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  depthFirstSearchPostOrder() {
    if (!this.root) return [];
    return this.#traversePostOrder(this.root, []);
  }

  /**
   *
   * @description - Helper method to traverse the BST in pre-order.
   * @param {Node} node - The current node to traverse.
   * @param {Array} results - The array to store the results.
   * @returns {Array} - The array of values in pre-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  #traversePreOrder(node, results) {
    // Push first:
    results.push(node.value);

    if (node.left) {
      this.#traversePreOrder(node.left, results);
    }
    if (node.right) {
      this.#traversePreOrder(node.right, results);
    }

    return results;
  }

  /**
   *
   * @description - Helper method to traverse the BST in in-order.
   * @param {Node} node - The current node to traverse.
   * @param {Array} results - The array to store the results.
   * @returns {Array} - The array of values in in-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  #traverseInOrder(node, results) {
    if (node.left) {
      this.#traverseInOrder(node.left, results);
    }

    // Push at the middle:
    results.push(node.value);

    if (node.right) {
      this.#traverseInOrder(node.right, results);
    }

    return results;
  }

  /**
   *
   * @description - Helper method to traverse the BST in post-order.
   * @param {Node} node - The current node to traverse.
   * @param {Array} results - The array to store the results.
   * @returns {Array} - The array of values in post-order.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  #traversePostOrder(node, results) {
    if (node.left) {
      this.#traversePostOrder(node.left, results);
    }

    if (node.right) {
      this.#traversePostOrder(node.right, results);
    }

    // Push last:
    results.push(node.value);

    return results;
  }
}

/*
Create a BST with the following values:
     5
  2    10
1  3  6  11
*/

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const tree = new BinarySearchTreeWithDFS();
  tree.insert(5);
  tree.insert(2);
  tree.insert(10);
  tree.insert(1);
  tree.insert(3);
  tree.insert(6);
  tree.insert(11);

  console.log("\nDFS pre-order:", tree.depthFirstSearchPreOrder());
  console.log("\nDFS in-order:", tree.depthFirstSearchInOrder());
  console.log("\nDFS post-order:", tree.depthFirstSearchPostOrder());

  const targetNode = 10;

  // Full tree:
  console.log("\nBST:\n", tree.toJSONString(tree.root));

  // BST search:
  console.log(
    `\nBST search for node ${targetNode}:\n`,
    tree.toJSONString(tree.search(targetNode)),
  );

  // Delete node:
  tree.delete(targetNode);
  console.log(
    `\nBST after deleting node ${targetNode}:\n`,
    tree.toJSONString(tree.root),
  );

  // Search after deletion:
  console.log(
    `\nSearch result for node ${targetNode} after deleting it:`,
    tree.search(targetNode),
  );
}

/*
To run the code in your browser:

1. Open developer tools (F12 or ctrl+shift+i).
2. Open console.
3. Copy and paste the code.
*/
