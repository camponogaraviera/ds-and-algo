/*
Breadth-first traversal for a Binary Search Tree.
*/

import { BinarySearchTree } from "#js/data-structures/trees/binary-search-tree.js";
import { Queue } from "#js/data-structures/queues/queue.js";

/**
 * Class extending a Binary Search Tree (BST) with Breadth First Traversal (BFT).
 */
export class BinarySearchTreeWithTraversal extends BinarySearchTree {
  /**
   *
   * @description - Traverses the BST in breadth-first order.
   * @returns {Array} - An array of values in the order they were visited.
   * Time Complexity: O(n) for balanced or unbalanced BST. A traversal visits all nodes.
   */
  breadthFirstTraversal() {
    // Edge Case (if the BST is empty):
    if (!this.root) return [];

    // Create a Queue to store the nodes to be visited:
    const queue = new Queue(); // Using a custom Queue.
    // Add the root node to the Queue:
    queue.enqueue(this.root);
    // Create an Array to store the values of the nodes in the order they were visited:
    let results = [];

    // Traverse the BST using a while loop since the depth of the BST is unknown:
    while (queue.size) {
      // Remove the first node from the Queue and store it:
      const currentNode = queue.dequeue();

      if (currentNode === null)
        throw new Error("Queue returned None while not empty.");

      // Add the value of the current node to the results Array:
      results.push(currentNode.value);

      // If the node has a left child, add it to the Queue:
      if (currentNode.left) queue.enqueue(currentNode.left);

      // If the node has a right child, add it to the Queue:
      if (currentNode.right) queue.enqueue(currentNode.right);
    }

    // Return the Array of values in the order they were visited:
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
  const tree = new BinarySearchTreeWithTraversal();
  tree.insert(5);
  tree.insert(2);
  tree.insert(10);
  tree.insert(1);
  tree.insert(3);
  tree.insert(6);
  tree.insert(11);

  const targetNode = 10;

  console.log("BFT:", tree.breadthFirstTraversal());

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
