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
