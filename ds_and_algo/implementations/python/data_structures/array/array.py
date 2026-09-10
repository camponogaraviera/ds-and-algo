"""Examples of built-in list operations in Python.

Notes:
    - array[index] = item: Assign or update an item by index.
    - array[index]: Return the item at a given index.
    - array.index(item): Return the index of the first matching item.
    - array.insert(index, item): Insert at an index and shift elements right.
    - del array[index]: Delete an item and shift elements left.
    - array.remove(item): Remove the first matching item.
    - array.append(item): Append a new item to the end of the array.
    - array.pop(index): Remove and return the item at an index.
"""

from typing import Generic, TypeVar

AnyType = TypeVar("AnyType")  # Array items can be of any data type.


class Array(Generic[AnyType]):
    """
    Class to build a Dynamic Array using a list as a data container.

    Attributes:
        _capacity: The maximum number of elements the array can hold.
        _container: Internal storage (list-based) to hold
            the elements of the array, where indices are array positions.
        _length: The number of elements in the array.
    """

    _capacity: int
    _container: list[AnyType | None]
    _length: int

    def __init__(self) -> None:
        """Initialize an empty array."""

        self._capacity = 10
        self._container = [None] * self._capacity
        self._length = 0

    def _resize(self):
        self._capacity *= 2
        new: list[AnyType | None] = [None] * self._capacity

        for i in range(self._length):
            new[i] = self._container[i]

        self._container = new

    def access(self, index: int) -> AnyType:
        """
        Access the item at the given index.

        Args:
            index: The index of the item to access.

        Returns:
            The item at the index.

        Raises:
            TypeError: If index is not an integer.
            IndexError: If index is out of range.

        Notes:
            Time complexity: O(1).
        """

        # Input Validation (type checking):
        if type(index) is not int:
            raise TypeError(f"Index must be an integer, got {type(index).__name__}.")

        # Edge Case (valid negative index):
        if index < 0:
            index += self._length

        # Edge Case (if the Array is empty or index is out of range):
        if index < 0 or index >= self._length:
            raise IndexError("Array index out of range.")

        # Return the item at index:
        return self._container[index]  # type: ignore

    def search(self, item: AnyType) -> int:
        """
        Search for the index of the provided item.

        Args:
            item: The item to search for.

        Returns:
            The index of the matching item.

        Raises:
            ValueError: If the item is not found in the array.

        Notes:
            Time complexity: O(n).
        """

        # Loop over all elements in the Array:
        for i in range(self._length):
            if self._container[i] == item:  # Check for matching items.
                return i  # Return the index.

        raise ValueError(f"{item} is not in Array.")

    def insert(self, index: int, item: AnyType) -> None:
        """
        Insert an item at an index and shift elements to the right.
        This method is akin to the built-in array.insert(index, item) operation.

        Args:
            index: The position where the item should be inserted.
            item: The item to insert.

        Notes:
            Time complexity: O(n) in the worst case.
        """

        # Input Validation (type checking):
        if type(index) is not int:
            raise TypeError(f"Index must be an integer, got {type(index).__name__}.")

        # Edge Case (if index is negative):
        if index < 0:
            index += self._length  # Normalize negative indices.
            if index < 0:
                index = 0  # If the normalized index is still negative, set it to 0.

        # Edge Case (if index is out of range):
        if index >= self._length:
            # If index exceeds the current length, insert at the end:
            self.append(item)
        else:
            if self._length == self._capacity:
                self._resize()

            # From the index position onwards, shift all elements to the right
            # (update container indices):
            self.__right_shift(index)

            # Insert the item at index:
            self._container[index] = item

            # Increment the length:
            self._length += 1

    def delete(self, index: int) -> None:
        """
        Delete the element at an index and shift elements to the left.
        This method is akin to the built-in del array[index] operation.

        Args:
            index: The index of the element to delete.

        Raises:
            IndexError: If the array is empty or the index is out of range.

        Notes:
            Time complexity: O(n) in the worst case.
        """

        # Input Validation (type checking):
        if type(index) is not int:
            raise TypeError(f"Index must be an integer, got {type(index).__name__}.")

        # Edge Case (if the Array is empty):
        if self._length == 0:
            raise IndexError("List assignment index out of range!")

        # Edge Case (valid negative index):
        if index < 0:
            index += self._length

        # Edge Case (if index is out of range):
        if index < 0 or index >= self._length:
            raise IndexError("List index out of range!")

        # Edge Case (if removing the last element):
        if index == self._length - 1:
            self._container[index] = None  # Remove the last element. O(1) time.
        else:
            # Otherwise, from the index position, shift all elements to the left:
            self.__left_shift(index)  # O(n) time complexity.

        # Decrement the length:
        self._length -= 1

    def remove(self, item: AnyType) -> None:
        """
        Remove the first matching item from the array.

        Args:
            item: The item to remove.

        Raises:
            ValueError: If the item is not found in the array.

        Notes:
            Time complexity: O(n) in the worst case.
        """

        index = self.search(item)  # This will raise ValueError if item is not found.
        self.delete(index)  # O(n).

    def append(self, item: AnyType) -> None:
        """
        Append an item to the end of the array.

        Args:
            item: The item to append.

        Notes:
            Time complexity: O(1).
        """

        # Resize if full:
        if self._length == self._capacity:
            self._resize()

        # Insert the item at the end:
        self._container[self._length] = item

        # Increment the length:
        self._length += 1

    def pop(self) -> AnyType:
        """
        Remove and return the last item.

        Returns:
            The last item in the array.

        Raises:
            IndexError: If the array is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Array is empty):
        if self._length == 0:
            raise IndexError("Cannot pop from empty Array!")

        # Save the last item in memory:
        removed_item = self._container[self._length - 1]

        # Remove the last item from the array:
        self._container[self._length - 1] = None

        # Decrement the length:
        self._length -= 1

        # Return the removed item:
        return removed_item  # type: ignore

    def __delitem__(self, index: int) -> None:
        """Enables the `del array[index]` syntax to delete an element at an index."""
        self.delete(index)

    def __right_shift(self, index: int) -> None:
        """
        Shift elements to the right starting at the given index.

        Args:
            index: The position from which to shift elements.

        Notes:
            Time complexity: O(n).
        """

        # Loop backwards through the Hash Table until the index position:
        for i in range(self._length, index, -1):
            self._container[i] = self._container[i - 1]  # Right shift elements.

    def __left_shift(self, index: int) -> None:
        """
        Shift elements to the left starting at the given index.

        Args:
            index: The position from which to shift elements.

        Notes:
            Time complexity: O(n).
        """

        # Loop forward through the Hash Table from the index position until the
        # second-to-last element:
        for i in range(index, self._length - 1):
            self._container[i] = self._container[i + 1]  # Left shift elements.

        # Remove the last duplicated item:
        self._container[self._length - 1] = None

    def __len__(self) -> int:
        """Return the number of elements and enables `len(array)` syntax."""
        return self._length

    def __repr__(self) -> str:
        """Return a string representation of the array."""
        return str([self._container[i] for i in range(self._length)])


# Example usage:
if __name__ == "__main__":
    array = Array()
    print(array)  # []
    for i in range(5):
        array.append(i + 1)
    print(array)  # [1, 2, 3, 4, 5]
    array.insert(-5, "item0")
    print(array)  # ['item0', 1, 2, 3, 4, 5]
    print(array.access(0))  # item0
    print(array.search("item0"))  # 0
    array.delete(0)
    print(array)  # [1, 2, 3, 4, 5]
    array.remove(5)
    print(array)  # [1, 2, 3, 4]
    array.pop()
    print(array)  # [1, 2, 3]
    print(array._capacity)  # 10
    print(len(array))  # 3
