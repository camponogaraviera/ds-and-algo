from __future__ import annotations

from typing import Generic, TypeVar

from ds_and_algo.implementations.python.data_structures.linked_lists.singly_linked_list import (  # noqa: E501
    SinglyNode,
)

AnyType = TypeVar("AnyType")  # Stack items can be of any data type.


class StackLinkedList(Generic[AnyType]):
    """Class to build a Stack data structure using a Singly-Linked List.

    Attributes:
        bottom: The bottom node of the stack.
        top: The top node of the stack.
        size: The number of items in the stack.
    """

    bottom: SinglyNode[AnyType] | None
    top: SinglyNode[AnyType] | None
    size: int

    def __init__(self) -> None:
        """Initialize an empty stack."""

        self.bottom = None
        self.top = None
        self.size = 0

    def access(self, index: int) -> AnyType | None:
        """Return the item at a given index.

        Args:
            index: The index of the item to access.

        Returns:
            The value at the specified index, or None if not found.

        Raises:
            TypeError: If index is not an integer.
            IndexError: If index is out of bounds.

        Notes:
            Time complexity: O(n).
        """

        # Input Validation (type checking):
        if not isinstance(index, int):
            raise TypeError(f"Index must be an integer, got {type(index).__name__}.")

        # Edge Case (if index is out of bounds):
        if index < 0 or index >= self.size:
            raise IndexError(f"Index {index} is out of bounds.")

        # Start from the top:
        current_node = self.top

        # Iterate over the Stack until the specified index:
        for _ in range(self.size - 1, index, -1):
            # Make sure the node exists at the current index:
            if current_node is None:
                return None
            current_node = current_node.next

        return current_node.value if current_node else None

    def search(self, value: AnyType) -> int | None:
        """Return the index of the first matching value.

        Args:
            value: The value to search for.

        Returns:
            The index of the matching value, or None if not found.

        Raises:
            ValueError: If the value is None.

        Notes:
            Time complexity: O(n).
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Value cannot be None.")

        # Edge Case (if the Stack is empty):
        if not self.size:
            return None

        # Start from the top:
        current_node = self.top
        index = self.size - 1
        # Iterate over the Stack:
        while current_node:
            if current_node.value == value:
                return index
            current_node = current_node.next
            index -= 1

        # If the value is not found:
        return None

    def push(self, value: AnyType) -> StackLinkedList[AnyType]:
        """Add an item to the top of the stack.

        Args:
            value: The value to push onto the stack.

        Returns:
            The stack instance for method chaining.

        Raises:
            ValueError: If the value is None.

        Notes:
            Time complexity: O(1).
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Value cannot be None.")

        # Create the new node to be inserted:
        new_node = SinglyNode(value)

        # Edge Case (if the Stack is empty):
        if not self.size:
            self.bottom = new_node
            self.top = new_node
        else:
            # Create a reference to the current top:
            previous_top = self.top
            # Update the current top to be the new node:
            self.top = new_node
            # Update the top to point to the previous node:
            self.top.next = previous_top

        self.size += 1
        return self

    def pop(self) -> AnyType | None:
        """Remove and return the top item.

        Returns:
            The removed item, or None if the stack is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Stack is empty):
        if not self.size:
            return None

        # Save a reference of the node to be removed:
        removed_node = self.top

        # Edge Case (if the Stack has only one node):
        if self.bottom == self.top:
            self.bottom = None

        # Update the top to point to the next node:
        assert self.top is not None
        self.top = self.top.next

        # Decrement the size:
        self.size -= 1

        # Return the removed node:
        assert removed_node is not None
        return removed_node.value

    def peek(self) -> AnyType | None:
        """Return the top item without removing it.

        Returns:
            The top item, or None if the stack is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Stack is empty):
        if not self.size:
            return None

        # Return the value of the top item:
        assert self.top is not None
        return self.top.value

    def __repr__(self) -> str:
        return (
            "Stack {\n"
            f"  bottom: {repr(self.bottom)},\n"
            f"  top: {repr(self.top)},\n"
            f"  size: {self.size}\n"
            "}"
        )


# Example usage:
if __name__ == "__main__":
    stack = StackLinkedList()
    print(stack)  # Stack { bottom: None, top: None, size: 0 }
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(stack)
    stack.pop()
    print(stack)
    print(stack.peek())
    print(stack.access(1))
    print(stack.search(2))
