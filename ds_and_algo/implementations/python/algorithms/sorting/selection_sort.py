def selection_sort(arr: list[int]) -> list[int]:
    """Selection sort implementation.

    Args:
        arr: List of integers to be sorted in ascending order.

    Returns:
        The sorted array.

    Algorithm:
        1. Loop over each element of the array.
        2. Assume the current element is the minimum.
        3. Scan the remaining (unsorted) elements for a smaller value.
        4. If found, update the minimum index.
        5. Swap the minimum element with the current element.
    """
    # Step 1:
    for i in range(len(arr)):
        # Step 2:
        min_index = i
        placeholder = arr[i]
        print(f"\nPass {i + 1}: \nArray state: {arr}")
        # Step 3:
        for j in range(i + 1, len(arr)):
            print(f"Comparing {arr[j]} with {arr[min_index]}")
            # Step 4:
            if arr[j] < arr[min_index]:
                min_index = j
        # Step 5:
        arr[i] = arr[min_index]
        arr[min_index] = placeholder

    # Return the sorted array:
    return arr


# Example usage:
if __name__ == "__main__":
    array = [3, 2, 1, 5]
    print("Unsorted Array:", array)
    print("\nSorted Array:", selection_sort(array))  # Sorted Array: [1, 2, 3, 5]
