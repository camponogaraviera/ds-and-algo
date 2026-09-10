/**
 * Constructor function to create a node for a BST.
 * This function only sets up a simple data holder.
 * @param {number} value - The value stored in the node.
 * @param {Node|null} left - The left child of the node.
 * @param {Node|null} right - The right child of the node.
 * @throws {TypeError} - If the value is undefined.
 */
export function Node(value, left = null, right = null) {
  // Input Validation (type checking):
  if (value === undefined) {
    throw new TypeError("Node value cannot be undefined.");
  }

  this.value = value;
  this.left = left; // Pointer to the left child node.
  this.right = right; // Pointer to the right child node.
}

/**
 * Class to build a Binary Search Tree (BST).
 * @param {Node|null} root - The root node of the BST.
 */
export class BinarySearchTree {
  root = null;

  /**
   *
   * @description - Searches for a node by value in the BST.
   * @param {number} value - The value to search for.
   * @returns {Node|null} - The node if found, or null if not found.
   * @throws {Error} - If the value is not a number.
   * Time Complexity: O(log n) for balanced BST, O(n) for unbalanced BST.
   */
  search(value) {
    // Input Validation (if the value is not a number):
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError(
        `Value must be a number, got ${typeof value} instead.`,
      );
    }

    // Create a pointer to the root node:
    let currentNode = this.root;

    // Loop through the BST (skipped when currentNode = null):
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        // if (value === currentNode.value)
        return currentNode;
      }
    }

    // If the value could not be found:
    return null;
  }

  /**
   *
   * @description - Inserts a new node with the given value into the BST.
   * @param {number} value - The value to insert.
   * @returns {boolean|null|undefined} - Returns true if the node was inserted, or false if the value already exists.
   * @throws {Error} - If the value is not a number.
   * Time Complexity: O(log n) for balanced BST, O(n) for unbalanced BST (degenerates into a Linked List). This BST implementation does not handle push/append which is O(1) for a linked list.
   */
  insert(value) {
    // Input Validation (if the value is not a number):
    if (typeof value !== "number" || Number.isNaN(value))
      throw new TypeError(
        `Value must be a number, got ${typeof value} instead.`,
      );

    // Create a new node:
    const newNode = new Node(value);

    // If the BST is empty, set the new node as the root:
    if (!this.root) {
      // Equivalent to `if (this.root === null)`.
      this.root = newNode;
      return true;
    }

    // Otherwise, traverse the BST to find the correct position for the new node:
    let currentNode = this.root;

    // Traverse the BST using a while loop since the depth of the BST is unknown:
    while (currentNode) {
      // If the value already exists in the BST, return false:
      if (value === currentNode.value) {
        return false;
      }
      // If the value is less than the current node's value, go left:
      if (value < currentNode.value) {
        // If there is no left child, create one:
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return true;
        }
        currentNode = currentNode.left;
      }
      // If the value is greater than the current node's value, go right:
      else {
        // If there is no right child, create one:
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return true;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
   *
   * @description - Deletes a node by value from the BST.
   * @param {number} value - The value of the node to delete.
   * @throws {Error} - If the value is not a number or if the BST is empty.
   * Time Complexity: O(log n) for balanced BST, O(n) for unbalanced BST.
   */
  delete(value) {
    // Input Validation (if the value is not a number):
    if (typeof value !== "number" || Number.isNaN(value))
      throw new Error(`Value must be a number, got ${typeof value} instead.`);

    // Edge Case (if the BST is empty, i.e., the root node is null):
    if (!this.root) throw new Error("Cannot delete from an empty BST.");

    // Call the helper method to delete the node:
    this.root = this.#deleteNodeRecursively(this.root, value);
  }

  /**
   *
   * @description - Helper method to convert the BST to a JSON string.
   * @param {Node} node - The root node of the BST.
   * @returns {string} - The JSON representation of the BST.
   * Time Complexity: O(n) where n is the number of nodes in the BST.
   */
  toJSONString(node) {
    const traverse = (node) => {
      // Base Case (if the Node is null):
      if (!node) return null;

      // Create a new object to avoid circular references:
      return {
        value: node.value,
        left: traverse(node.left), // Recursively convert the left subtree.
        right: traverse(node.right), // Recursively convert the right subtree.
      };
    };

    // Return the converted JSON object:
    return JSON.stringify(traverse(node));
  }

  /**
   *
   * @description - Helper method to delete a node recursively.
   * @param {Node} currentNode - The current node being processed.
   * @param {number} value - The value of the node to be deleted.
   * @returns {Node|null} - The updated current node after deletion.
   * Time Complexity: O(log n) for balanced BST, O(n) for unbalanced BST.
   */
  #deleteNodeRecursively(currentNode, value) {
    // 1. Traverse the BST.

    // 1.1 Base Case (if the node is null, return null):
    if (!currentNode) {
      console.log(
        `\nCould not delete node with value ${value}. Node not found.`,
      );
      return null;
    }

    // 1.2 If the target value is less than the current node's value, search the left subtree:
    if (value < currentNode.value) {
      // Recursively update the left child of the current node (remains unchanged if target node is not found):
      currentNode.left = this.#deleteNodeRecursively(currentNode.left, value);
      return currentNode;
    }

    // 1.3 If the target value is greater, search the right subtree:
    if (value > currentNode.value) {
      // Recursively update the right child of the current node (remains unchanged if target node is not found):
      currentNode.right = this.#deleteNodeRecursively(currentNode.right, value);
      return currentNode;
    }

    // 2. Node found (currentNode.value === value) - Handle deletion cases:

    // 2.1 Case - Node is a leaf (no children).
    if (!currentNode.left && !currentNode.right) {
      return null; // Remove the leaf node by returning null.
    }

    // 2.2 Case - Node has only one child.
    // 2.2.1 Only the right child exists:
    if (!currentNode.left) {
      return currentNode.right;
    }
    // 2.2.2  Only the left child exists:
    if (!currentNode.right) {
      return currentNode.left;
    }

    // 2.3 Case - If the node has two children.
    // Replace the node's value with the minimum value in the right subtree.

    // Find the inorder successor (smallest node in the right subtree):
    let minNode = currentNode.right;
    while (minNode.left) {
      // When minNode.left is null, the while loop is skipped.
      minNode = minNode.left; // Reassigns minNode to its left child.
    }

    // Update the current node's value to the minimum value:
    currentNode.value = minNode.value;

    // Recursively delete the minimum node from the right subtree to avoid duplicates:
    currentNode.right = this.#deleteNodeRecursively(
      currentNode.right,
      minNode.value,
    );

    // Return the updated node:
    return currentNode;
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
  const tree = new BinarySearchTree();
  tree.insert(5);
  tree.insert(2);
  tree.insert(10);
  tree.insert(1);
  tree.insert(3);
  tree.insert(6);
  tree.insert(11);

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
