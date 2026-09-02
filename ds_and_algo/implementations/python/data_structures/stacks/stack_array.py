from typing import Generic, TypeVar

AnyType = TypeVar("AnyType")  # Stack items can be of any data type.


class StackArray(Generic[AnyType]):
    """Class to build a Stack data structure using a List.

    Attributes:
        _container: The list used to store the stack elements.
    """

    _container: list[AnyType]

    def __init__(self) -> None:
        """Initialize an empty stack."""

        self._container = []

    def access(self, index: int) -> AnyType:
        """Return the item at the given index.

        Args:
            index: The index of the item to access.

        Returns:
            The value at the specified index.

        Raises:
            TypeError: If index is not an integer.
            IndexError: If index is out of bounds.

        Notes:
            Time complexity: O(1).
        """

        # Input Validation (type checking):
        if not isinstance(index, int):
            raise TypeError(f"Index must be an integer, got {type(index).__name__}.")

        # Edge Case (if the Stack is empty or index is out of range):
        if index < 0 or index >= len(self._container):
            raise IndexError("Array index out of range.")

        # Return the value at index:
        return self._container[index]

    def search(self, value: AnyType) -> int:
        """Return the index of the first matching value.

        Args:
            value: The value to search for.

        Returns:
            The index of the matching value.

        Raises:
            ValueError: If the value is None or not found.

        Notes:
            Time complexity: O(n).
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Value cannot be None.")

        return self._container.index(value)

    def push(self, value: AnyType) -> None:
        """Add an item to the top of the stack.

        Args:
            value: The value to push onto the stack.

        Raises:
            ValueError: If the value is None.

        Notes:
            Time complexity: O(1).
        """

        # Input Validation (type checking):
        if value is None:
            raise ValueError("Value cannot be None.")

        self._container.append(value)

    def pop(self) -> AnyType | None:
        """Remove and return the top item.

        Returns:
            The removed item, or None if the stack is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Stack is empty):
        if not self._container:
            return None

        # Remove and return the top item:
        return self._container.pop()

    def peek(self) -> AnyType | None:
        """Return the top item without removing it.

        Returns:
            The top item, or None if the stack is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Stack is empty):
        if not self._container:
            return None

        # Return the last item without removing it:
        return self._container[-1]

    @property
    def container(self) -> list[AnyType]:
        """Return the internal container for debugging."""
        return self._container


# Example usage:
if __name__ == "__main__":
    stack = StackArray()
    print(stack.container)  # []
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(stack.container)  # [1, 2, 3]
    stack.pop()
    print(stack.container)  # [1, 2]
    print(stack.peek())  # 2
    print(stack.access(1))  # 2
    print(stack.search(2))  # 1
