from __future__ import annotations

from typing import Generic, TypeVar

from ds_and_algo.implementations.python.data_structures.linked_lists.singly_linked_list import (  # noqa: E501
    SinglyNode,
)

AnyType = TypeVar("AnyType")  # Queue elements can be of any data type.


class Queue(Generic[AnyType]):
    """Class to build a Queue data structure using a Singly Linked List.

    Attributes:
        first: The first node in the queue.
        last: The last node in the queue.
        length: The number of elements in the queue.
    """

    first: SinglyNode[AnyType] | None
    last: SinglyNode[AnyType] | None
    length: int

    def __init__(self) -> None:
        self.first = None
        self.last = None
        self.length = 0

    def enqueue(self, element: AnyType) -> Queue[AnyType]:
        """Adds a new element to the end of the queue.

        Args:
            element: The element to add.

        Returns:
            The queue instance for method chaining.

        Notes:
            Time complexity: O(1).
        """

        # Input Validation (if the element is null or undefined):
        if element is None:
            raise ValueError("Cannot enqueue a None element to the Queue.")

        # Create a new node with the element to be inserted:
        new_node = SinglyNode(element)

        # If the Queue is not empty:
        if self.last:
            # Update the current last node to point forward to the new node:
            self.last.next = new_node
        else:
            # If the Queue is empty:
            self.first = new_node

        # Update the last node to be the new node:
        self.last = new_node

        # Increment the length:
        self.length += 1

        # Return the Queue:
        return self

    def dequeue(self) -> AnyType | None:
        """Removes the first element of the Queue.

        Returns:
            The value of the removed element, or None if the queue is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Queue is empty):
        if not self.length:
            return None

        # Save the node that will be removed:
        removed_node = self.first

        # Edge Case (if there is only one element):
        if self.first == self.last:
            self.clear()
        else:
            assert self.first is not None
            # Update the first element:
            self.first = self.first.next
            # Decrement the length:
            self.length -= 1

        # Return the value of the removed node:
        assert removed_node is not None
        return removed_node.value

    def peek(self) -> AnyType | None:
        """Get the first element of the Queue.

        Returns:
            The value of the first element, or None if the queue is empty.

        Notes:
            Time complexity: O(1).
        """
        # Edge Case (if the Queue is empty):
        if not self.length:
            return None

        assert self.first is not None
        return self.first.value
        # Alternative way:
        # return self.first.value if self.length else None

    def clear(self) -> Queue[AnyType]:
        """Remove all elements from the Queue.

        Returns:
            The Queue instance for method chaining.

        Notes:
            Time complexity: O(1).
        """

        self.first = None
        self.last = None
        self.length = 0
        return self

    @property
    def size(self) -> int:
        """Get the size of the Queue.

        Returns:
            The number of elements in the Queue.

        Notes:
            Time complexity: O(1).
        """
        return self.length

    @property
    def back(self) -> AnyType | None:
        """Get the last element of the Queue.

        Returns:
            The value of the last element, or null if the Queue is empty.

        Notes:
            Time complexity: O(1).
        """
        return self.last.value if self.last else None

    def __repr__(self) -> str:
        """Return a custom string representation of the queue."""

        if not self.first:
            return "Queue { first: None, last: None, length: 0 }"

        return (
            "Queue {\n"
            f"  first: {self.first},\n"
            f"  last: {self.last},\n"
            f"  length: {self.length}\n"
            "}"
        )


# Example usage:
if __name__ == "__main__":
    queue = Queue()
    print(queue)  # Queue { first: None, last: None, length: 0 }
    queue.enqueue("1st")
    queue.enqueue("2nd")
    queue.enqueue("3rd")
    print(queue)
    print(queue.peek())  # 1st
    queue.dequeue()
    print(queue.peek())  # 2nd
    print(queue.size)  # 2
    print(queue.back)  # 3rd
    queue.clear()
    print(queue.size)  # 0
