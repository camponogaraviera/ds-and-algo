from __future__ import annotations
import json
from typing import TypeAlias
import math

NumberType: TypeAlias = int | float  # The data stored in a BST must be comparable.
_SENTINEL = object()  # To distinguish between omitted argument and explicit None.


class Node:
    """
    Class to build a node for a binary search tree.

    Attributes:
        value: The value stored in the node.
        left: Pointer to the left child node, if any.
        right: Pointer to the right child node, if any.
    """

    def __init__(
        self,
        value: NumberType,
        left_node: Node | None = None,
        right_node: Node | None = None,
    ) -> None:
        """
        Args:
            value: The value stored in the node.
            left_node: The left child node, if any.
            right_node: The right child node, if any.
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Node value cannot be None.")

        self.value = value
        self.left = left_node
        self.right = right_node


class BinarySearchTree:
    """Class to build a Binary Search Tree.

    Attributes:
        root: The root node of the binary search tree.
    """

    root: Node | None

    def __init__(self) -> None:
        """Initialize a binary search tree."""
        self.root = None

    def search(self, value: NumberType) -> Node | None:
        """Search for a node with the given value.

        Args:
            value: The value to search for.

        Returns:
            The node if found, otherwise None.

        Raises:
            ValueError: If the input is not a number.

        Notes:
            Time complexity: O(log n) for balanced BSTs, O(n) for unbalanced BSTs.
        """

        # Input Validation (if the value is not a number):
        if not isinstance(value, (int, float)) or math.isnan(value):
            raise ValueError(
                f"Value must be a number, got {type(value).__name__} instead."
            )

        # Create a pointer to the root node:
        current_node = self.root

        # Loop through the BST (skipped when current_node = None):
        while current_node:
            if value < current_node.value:
                current_node = current_node.left
            elif value > current_node.value:
                current_node = current_node.right
            else:
                # if value == current_node.value
                return current_node

        # If the value could not be found:
        return None

    def insert(self, value: NumberType) -> BinarySearchTree | None:
        """Insert a new node with the given value.

        Args:
            value: The value to insert.

        Returns:
            The tree instance if inserted, or None if the value already exists.

        Notes:
            Time complexity: O(n) for unbalanced BSTs, O(log n) for balanced BSTs.
        """

        # Input Validation (if the value is not a number):
        if not isinstance(value, (int, float)) or math.isnan(value):
            raise ValueError(f"Value must be a number, got {type(value)} instead.")

        # Create a new node:
        new_node = Node(value)

        # If the BST is empty, set the new node as the root:
        if not self.root:  # Equivalent to `if self.root is None`.
            self.root = new_node
            return self

        # Otherwise, traverse the BST to find the correct position for the new node:
        current_node = self.root

        # Traverse the BST using a while loop since the depth of the BST is unknown:
        while current_node:
            # If the value already exists in the BST, return None:
            if value == current_node.value:
                return None
            # If the value is less than the current node's value, go left:
            if value < current_node.value:
                # If there is no left child, create one:
                if current_node.left is None:
                    current_node.left = new_node
                    return self
                current_node = current_node.left
            # If the value is greater than the current node's value, go right:
            else:
                # If there is no right child, create one:
                if current_node.right is None:
                    current_node.right = new_node
                    return self
                current_node = current_node.right

    def delete(self, value: NumberType) -> None:
        """Delete a node by value from the tree.

        Args:
            value: The value to delete.

        Raises:
            ValueError: If the input is not a number or the tree is empty.

        Notes:
            Time complexity: O(log n) for balanced BSTs, O(n) for unbalanced BSTs.
        """

        # Input Validation (if the value is not a number):
        if not isinstance(value, (int, float)) or math.isnan(value):
            raise ValueError(f"Value must be a number, got {type(value)} instead.")

        # Edge Case (if the BST is empty, i.e., the root node is None):
        if not self.root:
            raise ValueError("Cannot delete from an empty BST.")

        # Call the helper method to delete the node:
        self.root = self._delete_node_recursively(self.root, value)

    def _delete_node_recursively(
        self, current_node: Node | None, value: NumberType
    ) -> Node | None:
        """Delete a node recursively and return the updated subtree root."""

        # 1. Traverse the BST.

        # 1.1 Base Case (if the node is None, return None):
        if not current_node:
            print(f"\nCould not delete node with value {value}. Node not found.")
            return None

        # 1.2 If the target value < current node's value, search the left subtree:
        if value < current_node.value:
            # Recursively update the left child of the current node
            # (remains unchanged if target node is not found):
            current_node.left = self._delete_node_recursively(current_node.left, value)
            return current_node

        # 1.3 If the target value is greater, search the right subtree:
        if value > current_node.value:
            # Recursively update the right child of the current node
            # (remains unchanged if target node is not found):
            current_node.right = self._delete_node_recursively(
                current_node.right, value
            )
            return current_node

        # 2. Node found (currentNode.value === value) - Handle deletion cases:

        # 2.1 Case - Node is a leaf (no children).
        if not current_node.left and not current_node.right:
            return None  # Remove the leaf node by returning null.

        # 2.2 Case - Node has only one child.
        # 2.2.1 Only the right child exists:
        elif not current_node.left:
            return current_node.right
        # 2.2.2 Only the left child exists:
        elif not current_node.right:
            return current_node.left

        # 2.3 Case - If the node has two children.
        # Replace the node's value with the minimum value in the right subtree.

        # Find the inorder successor (smallest node in the right subtree):
        else:
            min_node = current_node.right
            while (
                min_node.left
            ):  # When min_node.left is None, the while loop is skipped.
                min_node = min_node.left  # Reassigns minNode to its left child.

            # Update the current node's value to the minimum value:
            current_node.value = min_node.value

            # Recursively delete the minimum node from the right subtree to avoid
            # duplicates:
            current_node.right = self._delete_node_recursively(
                current_node.right, min_node.value
            )

            # Return the updated node:
            return current_node

    def to_json(self, node: Node | None | object = _SENTINEL) -> str:
        """
        Convert a BST subtree to a JSON string.

        Args:
            node: The root node of the subtree.

        Returns:
            A JSON string representing the subtree.
        """

        # Semantic check:
        if node is _SENTINEL:  # If no argument is provided.
            target = self.root
        elif node is None:  # If the argument is explicitly None.
            return "null"
        else:  # If argument is a Node instance.
            target = node

        def node_to_dict(node: Node) -> dict[str, object] | None:
            """Recursively convert a node and its subtrees into a dictionary."""

            # Create a new object to avoid circular references:
            tree = {
                "value": node.value,
                "left": (
                    node_to_dict(node.left) if node.left else None
                ),  # Recursively traverse the left subtree.
                "right": (
                    node_to_dict(node.right) if node.right else None
                ),  # Recursively traverse the right subtree.
            }

            # Return the new object:
            return tree

        # Return the converted JSON object:
        return json.dumps(node_to_dict(target))


# Create a BST with the following values:
#      5
#   2    10
# 1  3  6  11

# Example usage:
if __name__ == "__main__":
    tree = BinarySearchTree()
    # Insert values:
    for value in [5, 2, 10, 1, 3, 6, 11]:
        tree.insert(value)

    target_node = 10

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
