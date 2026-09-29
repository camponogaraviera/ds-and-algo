def bubble_sort(array: list[int]) -> list[int]:
    """Bubble sort implementation.

    Args:
        array: List of integers to be sorted.

    Returns:
        The sorted array.

    Algorithm:
        1. Loop over each element of the Array.
        2. In each pass through the Array, compare each pair of adjacent elements.
        3. If the current element is greater than the next element,
            swap their positions.
        4. Repeat steps 1 onwards until a complete pass is made without any swaps
            (i.e., the Array is Sorted).
    """
    # Step 1:
    n = len(array)
    for i in range(n - 1):  # Range(4): 0, 1, 2, 3.
        swapped = False
        print(f"\nPass {i + 1}: \n{array}")
        # Step 2:
        for j in range(0, n - i - 1):  # Range(3): 0, 1, 2.
            print(f"Comparing {array[j]} and {array[j + 1]}")
            # Step 3:
            if array[j] > array[j + 1]:
                # Swap condition:
                placeholder = array[j]
                array[j] = array[j + 1]
                array[j + 1] = placeholder
                print(f"Swapped: {array}")
                swapped = True

        if not swapped:
            break

    # Return the sorted Array:
    return array


# Example usage:
if __name__ == "__main__":
    array = [3, 2, 1, 5]
    print("Unsorted Array:", array)
    print("\nSorted Array:", bubble_sort(array))  # Sorted Array: [1, 2, 3, 5]
