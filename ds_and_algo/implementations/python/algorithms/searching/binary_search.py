def binary_search_iter(arr: list[int], target: int) -> int:
    """
    Performs an iterative binary search on a sorted array.

    Args:
        arr: A sorted list of integers.
        target: The integer value to search for.

    Returns:
        The index of the target element if found, otherwise -1.

    Time complexity: O(log n).
    Space complexity: O(1) for iterative.
    """

    # Step 1:
    left = 0
    right = len(arr) - 1
    # Step 2:
    while left <= right:
        # 2.1:
        mid = (left + right) // 2
        # 2.2:
        if arr[mid] == target:
            return mid  # Element found at index mid.
        # 2.3:
        elif arr[mid] < target:
            left = mid + 1  # Search in the right sub-array.
        # 2.4:
        else:
            right = mid - 1  # Search in the left sub-array.
    # Step 3:
    return -1  # Element not found.


def binary_search_rec(
    arr: list[int],
    target: int,
    left: int = 0,
    right: int | None = None,
) -> int:
    """
    Performs a recursive binary search on a sorted array.

    Args:
        arr: A sorted list of integers.
        target: The integer value to search for.
        left: The leftmost index of the sub-array to search in.
        right: The rightmost index of the sub-array to search in.

    Returns:
        The index of the target element if found, otherwise -1.

    Time complexity: O(log n).
    Space complexity: O(log n) for recursive due to the call stack.
    """

    # Initialize the right sub-array index:
    if right is None:
        right = len(arr) - 1

    # Base case (target not found):
    if left > right:
        return -1

    # Calculate the middle index:
    mid = (left + right) // 2

    # Step 1.1 (target found at index mid):
    if arr[mid] == target:
        return mid
    # Step 1.2:
    if arr[mid] < target:
        # Step 2 (conquer/search in the right sub-array):
        return binary_search_rec(arr, target, mid + 1, right)
    # Step 2 (conquer/search in the left sub-array):
    return binary_search_rec(arr, target, left, mid - 1)


# Example usage:
if __name__ == "__main__":
    # Iterative:
    arr = [1, 2, 3, 4, 5]
    index = binary_search_iter(arr, 4)
    print("Iterative Approach:", index)  # 3

    # Recursive:
    index = binary_search_rec(arr, 4)
    print("Recursive Approach:", index)  # 3
