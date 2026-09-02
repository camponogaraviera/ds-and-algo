"""Breadth-first traversal for a Binary Search Tree."""

from ds_and_algo.implementations.python.data_structures.trees.binary_search_tree import (  # noqa: E501
    BinarySearchTree,
)
from ds_and_algo.implementations.python.data_structures.queues.queue import Queue

from typing import TypeAlias

NumberType: TypeAlias = int | float


class BinarySearchTreeWithTraversal(BinarySearchTree):
    """Class extending a Binary Search Tree with BFT and BFS."""

    def breadth_first_traversal(self) -> list[NumberType]:
        """Traverses the BST in breadth-first order.

        Returns:
            A list of values in the order they were visited.

        Notes:
            Time complexity: O(n) for balanced or unbalanced BSTs.
                A traversal visits all nodes.
        """

        # Edge Case (if the BST is empty):
        if not self.root:
            return []

        # Create a Queue to store the nodes to be visited:
        queue = Queue()  # Using a custom Queue.
        # Add the root node to the Queue:
        queue.enqueue(self.root)
        # Create a List to store the values of the nodes in the order they were visited:
        results = []

        # Traverse the BST using a while loop since the depth of the BST is unknown:
        while queue.size > 0:
            # Remove the first node from the Queue and store it:
            current_node = queue.dequeue()

            if current_node is None:
                raise RuntimeError("Queue returned None while not empty.")

            # Add the value of the current node to the results List:
            results.append(current_node.value)

            # If the node has a left child, add it to the Queue:
            if current_node.left:
                queue.enqueue(current_node.left)

            # If the node has a right child, add it to the Queue:
            if current_node.right:
                queue.enqueue(current_node.right)

        # Return the list of values in the order they were visited:
        return results

    def breadth_first_search(self, target: NumberType):
        """
        Find a node using BFS (not optimal for BST, but included for completeness).
        """
        if not self.root:
            return None

        queue = Queue()
        queue.enqueue(self.root)

        while queue.size > 0:
            current_node = queue.dequeue()

            if current_node is None:
                raise RuntimeError("Queue returned None while not empty.")

            if current_node.value == target:
                return current_node

            if current_node.left:
                queue.enqueue(current_node.left)

            if current_node.right:
                queue.enqueue(current_node.right)


# Create a BST with the following values:
#      5
#   2    10
# 1  3  6  11

# Example usage:
if __name__ == "__main__":
    tree = BinarySearchTreeWithTraversal()
    # Insert values:
    for value in [5, 2, 10, 1, 3, 6, 11]:
        tree.insert(value)

    target_node = 10

    print("BFT:", tree.breadth_first_traversal())

    # Full tree:
    print("\nBST:\n", tree.to_json())

    # BST search (optimal):
    print(
        f"\nBST search for node {target_node}:\n",
        tree.to_json(tree.search(target_node)),
    )

    # BFS (not optimal for a BST):
    print(
        f"\nBFS for node {target_node}:\n",
        tree.to_json(tree.breadth_first_search(target_node)),
    )

    # Delete node:
    tree.delete(target_node)
    print(f"\nBST after deleting node {target_node}:\n", tree.to_json())

    # Search after deletion:
    print(
        f"\nSearch result for node {target_node} after deleting it:",
        tree.search(target_node),
    )

# To run the code in your browser:
# 1. Open developer tools (F12 or ctrl+shift+i).
# 2. Open console.
# 3. Copy and paste the code.
