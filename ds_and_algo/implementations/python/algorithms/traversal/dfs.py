"""Depth-first traversal variants for a binary search tree."""

from ds_and_algo.implementations.python.data_structures.trees.binary_search_tree import (  # noqa: E501
    BinarySearchTree,
    Node,
)

from typing import TypeAlias

NumberType: TypeAlias = int | float


class BinarySearchTreeWithDFS(BinarySearchTree):
    """Class extending a Binary Search Tree with DFS."""

    def depth_first_search_pre_order(self) -> list[NumberType]:
        """Traverse the BST in depth-first pre-order.

        Notes:
            Time complexity: O(n) for balanced or unbalanced BSTs.
        """

        return self._traverse_pre_order(self.root, [])

    def depth_first_search_in_order(self) -> list[NumberType]:
        """Traverse the BST in depth-first in-order.

        Notes:
            Time complexity: O(n) for balanced or unbalanced BSTs.
        """

        return self._traverse_in_order(self.root, [])

    def depth_first_search_post_order(self) -> list[NumberType]:
        """Traverse the BST in depth-first post-order.

        Notes:
            Time complexity: O(n) for balanced or unbalanced BSTs.
        """

        return self._traverse_post_order(self.root, [])

    def _traverse_pre_order(
        self, node: Node | None, results: list[NumberType]
    ) -> list[NumberType]:
        """Traverse the BST in pre-order."""
        if node is None:
            return results

        # Push first:
        results.append(node.value)

        if node.left:
            self._traverse_pre_order(node.left, results)

        if node.right:
            self._traverse_pre_order(node.right, results)

        return results

    def _traverse_in_order(
        self, node: Node | None, results: list[NumberType]
    ) -> list[NumberType]:
        """Traverse the BST in in-order."""
        if node is None:
            return results

        if node.left:
            self._traverse_in_order(node.left, results)

        # Push at the middle:
        results.append(node.value)

        if node.right:
            self._traverse_in_order(node.right, results)

        return results

    def _traverse_post_order(
        self, node: Node | None, results: list[NumberType]
    ) -> list[NumberType]:
        """Traverse the BST in post-order."""
        if node is None:
            return results

        if node.left:
            self._traverse_post_order(node.left, results)

        if node.right:
            self._traverse_post_order(node.right, results)

        # Push last:
        results.append(node.value)

        return results


# Create a BST with the following values:
#      5
#   2    10
# 1  3  6  11

# Example usage:
if __name__ == "__main__":
    tree = BinarySearchTreeWithDFS()
    # Insert values:
    for value in [5, 2, 10, 1, 3, 6, 11]:
        tree.insert(value)

    target_node = 10

    print("\nDFS pre-order:", tree.depth_first_search_pre_order())
    print("\nDFS in-order:", tree.depth_first_search_in_order())
    print("\nDFS post-order:", tree.depth_first_search_post_order())

    # Full tree:
    print("\nBST:\n", tree.to_json())

    # BST search:
    print(
        f"\nBST search for node {target_node}:\n",
        tree.to_json(tree.search(target_node)),
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
