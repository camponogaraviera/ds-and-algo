from __future__ import annotations

from typing import Generic, TypeVar, cast

AnyType = TypeVar("AnyType")  # Linked List node values can be of any data type.
NodeType = TypeVar("NodeType", bound="SinglyNode")  # type: ignore[type-arg]


class SinglyNode(Generic[AnyType]):
    """
    Class to build a node for a Singly-Linked List.

    Attributes:
        value: The value stored in the node.
        next: Pointer to the next node in the singly-linked list.
    """

    def __init__(
        self, value: AnyType, next_node: SinglyNode[AnyType] | None = None
    ) -> None:
        """
        Initialize a node with a value and a pointer to the next node.

        Args:
            value: The value stored in the node.
            next_node: The next node in the singly-linked list, if any.
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Node value cannot be None.")

        self.value = value
        self.next = next_node

    def __repr__(self) -> str:
        """Return a string representation of the node."""
        next_repr = repr(self.next) if self.next else "None"
        return f"Node {{ value: {self.value}, next: {next_repr} }}"


class SinglyLinkedList(Generic[AnyType, NodeType]):
    """
    Class to build a singly-linked list.

    Attributes:
        head: Reference to the first node in the singly-linked list.
        tail: Reference to the last node in the singly-linked list.
        length: The number of nodes in the singly-linked list.
    """

    head: NodeType | None
    tail: NodeType | None
    length: int

    def __init__(self) -> None:
        """Initialize an empty singly-linked list."""

        self.head = None
        self.tail = None
        self.length = 0

    def access(self, index: int) -> AnyType:
        """
        Access the value at a given node by index.

        Args:
            index: The index of the node to access.

        Returns:
            The value of the node at the specified index.

        Notes:
            Time complexity: O(n) in the worst case,
                as it may require traversing the entire Linked List.
        """

        # Return the node value associated with the index:
        return self._traverse_to_node(index).value

    def search(self, value: AnyType) -> int | None:
        """
        Search for the node index associated with the provided value.

        Args:
            value: The value whose node index should be found.

        Returns:
            The index of the node containing the value, or None if not found.

        Raises:
            ValueError: If the value is None.

        Notes:
            Time complexity: O(n).
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Value cannot be None.")

        # Edge Case (if the singly-linked list is empty):
        if self.length == 0:
            return None

        # Creating a reference to the Head node:
        current_node = self.head

        # Initialize the counter for the index:
        index = 0

        # Iterate over the singly-linked list until the index is found:
        while current_node is not None:
            if current_node.value == value:
                return index
            # Updating the reference to the next node while keeping the Head node
            # intact:
            current_node = current_node.next
            index += 1

        # Return None if the value dos not exist:
        return None

    def _make_node(self, value: AnyType) -> NodeType:
        """Create a new node. Subclasses override this to return their node type."""
        return SinglyNode(value)  # type: ignore[return-value]

    def insert(self, index: int, value: AnyType) -> SinglyLinkedList[AnyType, NodeType]:
        """Insert a new node at an index.

        Args:
            index: The index at which to insert the new node.
            value: The value to insert.

        Returns:
            The singly-linked list instance for method chaining.

        Raises:
            IndexError: If the index is out of bounds.

        Notes:
            Time complexity: O(n).
        """

        # Bounds check:
        if index < 0 or index > self.length:
            raise IndexError(f"Index {index} is out of bounds!")

        # Edge Case (if the index is 0):
        if index == 0:
            return self.prepend(value)

        # Edge Case (if the index is equal to the length of the list):
        if index == self.length:
            self.append(value)
            return self

        # Create the new node to be inserted:
        new_node = self._make_node(value)

        # Get the node located just before the target node at the specified index:
        previous_node = self._traverse_to_node(index - 1)

        # Save a reference to the target node at the specified index:
        target_node = previous_node.next

        # previous_node --> target_node --> next_node

        # Update the next of the previous node to point to the new node:
        # This does not change the target_node which still holds a reference to
        # the old node.
        previous_node.next = new_node

        # previous_node --> new_node --> null
        # target_node --> next_node (unchanged)

        # Update the next of the new node to point to the target node (shifting to
        # the right):
        new_node.next = target_node

        # previous_node --> new_node --> target_node --> next_node

        # Increment the length:
        self.length += 1

        return self

    def delete(self, index: int) -> NodeType:
        """Remove a node at an index.

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
            self.head = cast(
                NodeType, removed_node.next
            )  # The new Head is the next node of the current Head.
            if self.head is None:
                self.tail = None  # If the Head is null, update the Tail to null.
            self.length -= 1  # Decrement the length.
            return removed_node

        # Edge Case (if the node to be removed is the Tail):
        if index == self.length - 1:
            return self.pop()

        # General Case:

        # Get the node located just before the target node at the specified index:
        previous_node = self._traverse_to_node(index - 1)
        # Save a reference to the target node node at the specified index:
        target_node = cast(NodeType, previous_node.next)
        assert target_node is not None
        # Replace the target node with its next node:
        previous_node.next = target_node.next

        # Since the target node lost its reference, it will be automatically
        # removed from memory (garbage collection).

        # Decrement the length:
        self.length -= 1
        # Return the removed node:
        return target_node

    def prepend(self, value: AnyType) -> SinglyLinkedList[AnyType, NodeType]:
        """Add a new node to the beginning of the list.

        Args:
            value: The value of the new node.

        Returns:
            The singly-linked list instance for method chaining.

        Notes:
            Time complexity: O(1).
        """

        # Create the new node to be inserted:
        new_node = self._make_node(value)

        # Edge Case (if the singly-linked list is empty):
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length += 1
            return self

        # The following order matters.

        # Update the new_node to point forward to the current Head:
        new_node.next = self.head
        # Update the Head to be the new node while keeping the Tail node intact:
        self.head = new_node

        # Increment the length:
        self.length += 1

        return self

    def append(self, value: AnyType) -> SinglyLinkedList[AnyType, NodeType]:
        """Add a new node to the end of the list.

        Args:
            value: The value of the new node.

        Returns:
            The singly-linked list instance for method chaining.

        Notes:
            Time complexity: O(1).
        """

        # Create the new node with the value to be inserted:
        new_node = self._make_node(value)

        # Edge Case (if the singly-linked list is empty):
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            # Update the current Tail to point forward to the new node:
            assert self.tail is not None
            self.tail.next = new_node
            # Update the Tail to be the new node:
            self.tail = new_node

        # Increment the length:
        self.length += 1
        return self

    def pop(self) -> NodeType:
        """Remove and return the last node.

        Returns:
            The removed node.

        Notes:
            Time complexity: O(n).
        """

        # Edge Case (if the singly-linked list is empty):
        if self.length == 0:
            raise IndexError("Cannot pop from empty singly-linked!")

        # Type checker to make sure that the return value matches the expected type.
        assert self.tail is not None

        # Save a reference of the node to be removed:
        removed_node = self.tail

        # Edge Case (if there is only one node):
        if self.length == 1:
            self.head = self.tail = None
        else:
            # Get the second-to-last node:
            penultimate_node = self._traverse_to_node(self.length - 2)
            # The new Tail is the previous node of the current Tail:
            self.tail = penultimate_node
            # Update the new Tail to point forward to None:
            self.tail.next = None

        # Decrement the length:
        self.length -= 1

        # Return the removed node:
        return removed_node

    def _traverse_to_node(self, index: int) -> NodeType:
        """Traverse to the node at a given index.

        Args:
            index: The index of the node to find.

        Returns:
            The node at the specified index.

        Notes:
            Time complexity: O(n).
        """

        # Edge Case (if the singly-linked list is empty or index is out of range):
        if index < 0 or index >= self.length:
            raise IndexError(f"Index {index} is out of bounds!")

        # Creating a reference to the Head node:
        current_node = self.head

        # Iterate over the singly-linked list until the node is found:
        for _ in range(index):
            assert (
                current_node is not None
            )  # Sanity check to make sure it is safe to move to the next node.
            # Updating the reference to the next node while keeping the Head node
            # intact:
            current_node = current_node.next  # type: ignore[assignment]

        # Return the node:
        assert (
            current_node is not None
        )  # Sanity check to make sure that the return value matches the expected type.
        return cast(NodeType, current_node)

    def to_list(self) -> list[AnyType]:
        """Convert the list to a Python list for visualization."""

        current_node = self.head
        result: list[AnyType] = []
        while current_node:
            result.append(current_node.value)
            current_node = current_node.next
        print(" -> ".join(map(str, result)))
        return result

    def __repr__(self) -> str:
        """Return a string representation of the singly-linked list."""

        if not self.head:
            return "SinglyLinkedList { head: None, tail: None, length: 0 }"

        return (
            "SinglyLinkedList {\n"
            f"  head: {self.head},\n"
            f"  tail: {self.tail},\n"
            f"  length: {self.length}\n"
            "}"
        )


# Example usage:
if __name__ == "__main__":
    linkedList = SinglyLinkedList[float, SinglyNode[float]]()
    linkedList.prepend(0)
    linkedList.append(20)
    linkedList.append(30)
    print(linkedList)
    linkedList.to_list()  # 0 -> 20 -> 30
    linkedList.insert(2, 1.5)
    linkedList.to_list()  # 0 -> 20 -> 1.5 -> 30
    linkedList.delete(2)
    linkedList.to_list()  # 0 -> 20 -> 30
    linkedList.pop()
    linkedList.to_list()  # 0 -> 20
    print(linkedList.access(1))  # 20
    print(linkedList.search(20))  # 1
