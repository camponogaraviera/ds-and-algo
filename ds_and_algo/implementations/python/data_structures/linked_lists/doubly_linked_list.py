from __future__ import annotations

from ds_and_algo.implementations.python.data_structures.linked_lists.singly_linked_list import (  # noqa: E501
    SinglyNode,
    SinglyLinkedList,
)
from typing import TypeVar

AnyType = TypeVar("AnyType")  # Linked List node values can be of any data type.


class DoublyNode(SinglyNode[AnyType]):
    """Class to build a node for a Doubly-Linked List.

    Attributes:
        value: The value stored in the node.
        next: Pointer to the next node in the doubly-linked list.
        previous: Pointer to the previous node in the doubly-linked list.
    """

    def __init__(
        self,
        value: AnyType,
        next_node: DoublyNode[AnyType] | None = None,
        previous_node: DoublyNode[AnyType] | None = None,
    ) -> None:
        """Initialize a node with pointers to the next and previous nodes.

        Args:
            value: The value of the node.
            next_node: The next node in the doubly-linked list, if any.
            previous_node: The previous node in the doubly-linked list, if any.
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Node value cannot be None.")

        self.value = value
        self.previous = previous_node
        self.next = next_node


class DoublyLinkedList(SinglyLinkedList[AnyType, DoublyNode[AnyType]]):
    """Class to build a Doubly-Linked List.

    Attributes:
        head: Reference to the first node in the doubly-linked list.
        tail: Reference to the last node in the doubly-linked list.
        length: The number of nodes in the doubly-linked list.
    """

    head: DoublyNode[AnyType] | None
    tail: DoublyNode[AnyType] | None
    length: int

    def __init__(self) -> None:
        """Initialize an empty doubly-linked list."""

        super().__init__()

        # Overwrite attributes:
        self.head = None
        self.tail = None
        self.length = 0

    def insert(self, index: int, value: AnyType) -> DoublyLinkedList[AnyType]:
        """Insert a new node at the specified index.

        Args:
            index: The index at which the new node should be inserted.
            value: The value of the new node.

        Raises:
            IndexError: If the index is out of bounds.

        Notes:
            Time complexity: O(n).
        """

        # Edge Case (if index is out of bounds):
        if index < 0 or index > self.length:
            raise IndexError(f"Index {index} is out of bounds.")

        # Edge Cases:
        if index == 0:
            return self.prepend(value)

        if index == self.length:
            return self.append(value)

        # Create the new node to be inserted:
        new_node = DoublyNode(value)
        # Get the node located just before the target node at the specified index:
        previous_node = self._traverse_to_node(index - 1)
        # Save a reference to the target node at the specified index:
        target_node = previous_node.next
        #
        assert target_node is not None

        # Update the previous node to point forward to the newNode:
        previous_node.next = new_node
        # Update the newNode to point back to the previousNode:
        new_node.previous = previous_node
        # Update the newNode to point forward to the targetNode:
        new_node.next = target_node
        # Update the targetNode to point back to the newNode:
        target_node.previous = new_node

        # Increment the length:
        self.length += 1
        return self

    def delete(self, index: int) -> DoublyNode[AnyType]:
        """Remove a node at the specified index.

        Args:
            index: The index of the node to remove.

        Returns:
            The removed node.

        Notes:
            Time complexity: O(n).
        """

        # Bounds check:
        if index < 0 or index >= self.length:
            raise IndexError(f"Index {index} is out of bounds!")

        # Edge Case (if the node to be removed is the Head):
        if index == 0:
            assert self.head is not None
            removed_node = self.head
            self.head = (
                self.head.next
            )  # The new Head is the next node of the current Head.
            if self.head:  # If the new Head is not None:
                self.head.previous = (
                    None  # Update the previous node of the new Head to None.
                )
            else:
                # If the Head is None, update the Tail to None (only one node).
                self.tail = None
            self.length -= 1  # Decrement the length.
            return removed_node  # Return the removed node.

        # Edge Case (if the node to be removed is the Tail):
        if index == self.length - 1:
            return self.pop()

        # General Case.

        # Get the node located just before the target node at the specified index:
        previous_node = self._traverse_to_node(index - 1)
        # Save a reference to the target node at the specified index:
        target_node = previous_node.next
        assert target_node is not None
        # Replace the target node with its next node:
        next_node = target_node.next
        assert isinstance(next_node, DoublyNode)
        previous_node.next = next_node
        # Update the previous pointer of the next node:
        next_node.previous = previous_node

        # Since the target node lost its reference, it will be automatically
        # removed from memory (garbage collection).

        # Decrement the length:
        self.length -= 1
        # Return the removed node:
        return target_node

    def prepend(self, value: AnyType) -> DoublyLinkedList[AnyType]:
        """Add a new node to the beginning of the list.

        Args:
            value: The value of the new node.

        Notes:
            Time complexity: O(1).
        """

        # Create the new node to be inserted:
        new_node = DoublyNode(value)

        # Edge case (if the Linked List is empty):
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length += 1
            return self

        #
        assert self.head is not None

        # The following order matters.
        # Update the new_node to point forward to the current Head:
        new_node.next = self.head
        # Update the current Head to point back to the new_node:
        self.head.previous = new_node
        # Update the Head to be the new node:
        self.head = new_node

        # Increment the length:
        self.length += 1

        return self

    def append(self, value: AnyType) -> DoublyLinkedList[AnyType]:
        """Add a new node to the end of the list.

        Args:
            value: The value of the new node.

        Notes:
            Time complexity: O(1).
        """

        # Create the new node to be inserted:
        new_node = DoublyNode(value)

        # Edge Case (if the Linked List is empty):
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            # Add assertion for type checking:
            assert self.tail is not None
            # The new node points back to the current Tail:
            new_node.previous = self.tail
            # Update the current Tail to point forward to the new node:
            self.tail.next = new_node
            # Update the Tail to be the new node:
            self.tail = new_node

        # Increment the length:
        self.length += 1
        return self

    def pop(self) -> DoublyNode[AnyType]:
        """Remove and return the last node.

        Returns:
            The removed node.

        Notes:
            Time complexity: O(1) because the tail tracks its predecessor.
        """

        # Edge Case (if the Linked List is empty):
        if self.length == 0:
            raise IndexError("Cannot pop from empty Linked List!")

        #
        assert self.tail is not None

        # Save a reference of the node to be removed:
        removed_node = self.tail

        # Edge Case (if there is only one node):
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            assert removed_node.previous is not None
            # The new Tail is the previous node of the current Tail:
            self.tail = removed_node.previous
            # Update the new Tail to point forward to None:
            self.tail.next = None

        # Decrement the length:
        self.length -= 1
        # Return the removed node:
        return removed_node

    def _make_node(self, value: AnyType) -> DoublyNode[AnyType]:
        return DoublyNode(value)

    def _traverse_to_node(self, index: int) -> DoublyNode[AnyType]:
        return super()._traverse_to_node(index)


# Example usage:
if __name__ == "__main__":
    LinkedList = DoublyLinkedList()
    LinkedList.prepend(0)
    LinkedList.append(20)
    LinkedList.append(30)
    LinkedList.to_list()  # 0 -> 20 -> 30
    LinkedList.insert(2, 1.5)
    LinkedList.to_list()  # 0 -> 20 -> 1.5 -> 30
    LinkedList.delete(2)
    LinkedList.to_list()  # 0 -> 20 -> 30
    LinkedList.pop()
    LinkedList.to_list()  # 0 -> 20
    print(LinkedList.access(1))  # 20
    print(LinkedList.search(20))  # 1
