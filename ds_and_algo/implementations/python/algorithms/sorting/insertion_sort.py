def insertion_sort(arr: list[int]) -> list[int]:
    """Insertion sort implementation.

    Args:
        arr: List of integers to be sorted.

    Returns:
        The sorted array.

    Algorithm:
        1. Start with the second element (index 1).
        2. Compare the current element with previous elements.
        3. Shift larger elements to the right.
        4. Insert the current element into its sorted position.
        5. Repeat until the array is sorted.
    """
    # Step 1:
    for i in range(1, len(arr)):
        # Current element:
        current_element = arr[i]
        # Previous index:
        j = i - 1
        print(f"\nCurrent Element: {current_element}")
        # Step 2:
        while j >= 0 and current_element < arr[j]:
            print(f"Copying element {arr[j]} to index position {j + 1}:")
            arr[j + 1] = arr[j]  # Copy the larger element to the right.
            j -= 1  # Update index to the next previous element.
            print(f"Array: {arr}")
        # Step 3:
        arr[j + 1] = (
            current_element  # The +1 is to account for the last decrement of j.
        )
        print(
            f"Placing the current element {current_element} "
            f"at index position {j + 1}: {arr}"
        )
    # Step 5:
    return arr


# Example usage:
if __name__ == "__main__":
    array = [3, 2, 1, 5]
    print("Unsorted Array:", array)
    print("\nSorted Array:", insertion_sort(array))  # Sorted Array: [1, 2, 3, 5]
