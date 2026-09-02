def merge_sort(arr: list[int]) -> list[int]:
    """Merge sort implementation.

    Args:
        arr: List of integers to be sorted.

    Returns:
        The sorted array.

    Algorithm:
        1. Divide:

        - Split the Array into two equal (or nearly equal)
            halves (left and right sub-arrays).
        - The split is typically done at the midpoint,
            so if the array has an odd length,
        one sub-array will have one more element than the other.

        2. Conquer:

        - Recursively apply Merge Sort to the left and right sub-arrays
            formed by the partitioning process.
        - The recursion continues until the base case is reached.
        - Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements,
            return it as is.

        3. Combine (Merge):

        - Combine the two sorted sub-arrays by comparing elements in order,
            placing the smaller one first.
        - The merging process is not recursive; it is an iterative (loop-based) step
        combining two already-sorted arrays.
        - Repeat until the entire array is merged into a single sorted array.
    """
    # Base case (if the array has 0 or 1 elements, it is already sorted):
    if len(arr) <= 1:
        return arr

    # Step 1 (Divide):
    mid = len(arr) // 2

    # Step 2 (Conquer):
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # Step 3 (Combine):
    return merge(left, right)


def merge(left: list[int], right: list[int]) -> list[int]:
    result = []
    i, j = 0, 0

    # Comparing elements from both arrays in order, placing the smaller one first:
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # If there are remaining elements in the left array, add them to the result:
    return result + left[i:] + right[j:]


# Example usage:
if __name__ == "__main__":
    array = [3, 2, 1, 5]
    print("Unsorted Array:", array)
    print("\nSorted Array:", merge_sort(array))  # Sorted Array: [1, 2, 3, 5]
