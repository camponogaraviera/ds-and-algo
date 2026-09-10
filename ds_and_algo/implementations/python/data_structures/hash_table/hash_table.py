"""Hash table basics using Python's built-in dictionary operations.

Notes:
    - hash_table[key] = value: Add or update a key-value pair.
    - hash_table[key]: Retrieve a value by key.
    - del hash_table[key]: Delete a key-value pair.
    - hash_table.items(): Get all key-value pairs.
    - hash_table.keys(): Get all keys.
    - hash_table.values(): Get all values.
    - len(hash_table): Get the number of stored entries.
"""

from typing import Generic, TypeVar, cast

AnyType = TypeVar("AnyType")  # Values associated with keys can be of any data type.


class HashTable(Generic[AnyType]):
    """
    Class to build a Hash Table data structure using separate chaining.

    Attributes:
        _container: An array of fixed size to store the buckets of the Hash Table.
        Each element is either another array with a tuple of (key, value) pairs,
            or an empty bucket.
    """

    _container: list[list[tuple[str, AnyType]]]

    def __init__(self, size: int) -> None:
        """
        Initialize a hash table with the given number of buckets.

        Args:
            size: The number of buckets in the hash table.
        """
        if not isinstance(size, int) or size <= 0:
            raise ValueError("Size must be a positive integer.")
        self._container = [[] for _ in range(size)]

    def access(self, key: str) -> AnyType:
        """
        Access the value associated with the provided key.

        Args:
            key: The key whose value should be found.

        Returns:
            The value associated with the key.

        Raises:
            KeyError: If the key is not found in the hash table.

        Notes:
            Time complexity: O(1) without collisions, O(n) with collisions.
        """

        # Get the address associated with the key:
        address = self.__hash(key)  # O(1) (Hashing function).

        # Get the memory slot (bucket) associated with the address:
        bucket = self._container[address]  # O(1) (Array Access).

        # Loop over all entries in the bucket:
        for k, v in bucket:
            # O(1) if there is only one key-value pair in the bucket, 0(n) otherwise.
            if k == key:  # Check for matching keys.
                return cast(AnyType, v)  # Return the associated value.

        # Raise an exception if the key does not exist:
        raise KeyError(f"{key} not found in the Hash Table.")

    def search(self, value: AnyType) -> str | None:
        """
        Search for the key associated with the provided value.

        Args:
            value: The value whose key should be found.

        Returns:
            The first key associated with the value, or None if not found.

        Notes:
            This implementation uses separate chaining.
            Time complexity: O(M + n) -> O(n) (if M ≤ n).
                Because each entry is visited only once, even with collisions.
        """

        # Edge Case (empty Hash Table):
        if not self._container:
            return None

        # Loop over all M buckets in the Hash Table (O(M)):
        for bucket in self._container:
            # Loop over all N entries in the bucket (O(N)):
            for k, v in bucket:
                if v == value:  # Check for matching values (O(1)).
                    return cast(str, k)  # Return the associated key.

        # If the value is not found:
        return None

    def insert(self, key: str, value: AnyType) -> None:
        """Add a key-value pair or update the value for an existing key.

        Args:
            key: The key to insert or update.
            value: The value associated with the key.

        Notes:
            Time complexity: O(1) without collisions, O(n) with collisions.
        """

        # Get the address associated with the key:
        address = self.__hash(key)  # O(1) (Hashing function).

        # Get the memory slot (bucket) associated with the address:
        bucket = self._container[address]  # O(1) (Array Access).

        # If the key already exists, update its value
        # (the loop is skipped when bucket is an empty List):
        for i, pair in enumerate(bucket):
            # O(n) in case of collisions (multiple key-value pairs in the same bucket).
            if pair[0] == key:
                bucket[i] = (
                    # Replace the tuple at index i with a new tuple.
                    key,
                    value,
                )
                return

        # Otherwise, push/append the new key-value pair to the end of the bucket:
        bucket.append((key, value))  # O(1). This modifies self._container[address].

    def delete(self, key: str) -> bool:
        """Delete a key-value pair from the hash table.

        Args:
            key: The key to delete.

        Returns:
            True if the key-value pair was deleted.

        Raises:
            KeyError: If the bucket does not exist or the key was not found.

        Notes:
            Time complexity: O(1) without collisions, O(n) with collisions.
        """

        # Get the address associated with the key:
        address = self.__hash(key)  # O(1) (Hashing function).

        # Get the memory slot (bucket) associated with the address:
        bucket = self._container[address]  # O(1) (Array Access).

        # Raise an exception if the bucket does not exist (i.e., if is None or
        # empty list):
        if not bucket:
            raise KeyError("Bucket does not exist or is empty.")

        # Step 1. Find the index of the key:
        index_to_delete = -1
        # Loop over all entries inside the bucket:
        for i, (k, _) in enumerate(bucket):
            # O(n) in case of collisions (key is at the end of the bucket).
            if k == key:
                index_to_delete = i  # Store the index of the key to be deleted.
                break  # Stop the loop once the key is found.

        # Raise an exception if the key was not found:
        if index_to_delete == -1:
            raise KeyError(f"{key} not found in the Hash Table.")

        # Step 2. Remove the key-value pair and shift (re-index) remaining
        # elements in the bucket to the left:
        del bucket[index_to_delete]
        return True

    def keys(self) -> list[str]:
        """Return all keys in the hash table.

        Returns:
            A list of keys.

        Notes:
            Time complexity: O(n).
        """

        # Create a container for keys:
        keys_array = []

        # Loop over all buckets in the Hash Table:
        for bucket in self._container:
            # Handle collisions (multiple key-value pairs in the same bucket):
            for key, _ in bucket:
                # Push keys to keys_array:
                keys_array.append(key)

        # Return the Array with keys:
        return keys_array

    def values(self) -> list[AnyType]:
        """Return all values in the hash table.

        Returns:
            A list of values.

        Notes:
            Time complexity: O(n).
        """

        # Create a container for values:
        values_array = []

        # Loop over all buckets in the Hash Table:
        for bucket in self._container:
            # Handle collisions (multiple key-value pairs in the same bucket):
            for _, value in bucket:
                # Push values to values_array:
                values_array.append(value)

        return values_array

    def __hash(self, key: str) -> int:
        """A hashing function that maps a key string to an index (number).

        Args:
            key: The key to hash.

        Returns:
            The hashed bucket index.

        Notes:
            Time complexity: O(len(key)).
        """

        hash_value = 0
        hash_table_size = len(self._container)
        base = 31
        for char in key:
            hash_value = (hash_value * base + ord(char)) % hash_table_size
        return hash_value


# Example usage:
if __name__ == "__main__":
    size = 11  # In a real-world scenario, the size should be a large prime number.
    hash_table = HashTable(size)
    print(hash_table._container)  # [[], [], [], [], [], [], [], [], [], [], []]
    hash_table.insert("key1", 100)
    hash_table.insert("key2", 200)
    hash_table.insert("key1", "qwert")  # Updating existing key.
    res = hash_table.access("key2")
    print(res)  # 200
    res = hash_table.search(200)
    print(res)  # key2
    res = hash_table.keys()
    print(res)  # ['key1', 'key2']
    res = hash_table.values()
    print(res)  # ['qwert', 200]
    hash_table.delete("key1")
    print(
        hash_table._container
    )  # [[], [], [], [], [], [['key2', 200]], [], [], [], [], []]
