def factorial_iterative(n: int) -> int | bool:
    """Compute a factorial iteratively.
    Iterative approach.

    Args:
        n: Integer to compute the factorial for.

    Returns:
        The factorial of `n`. Returns `False` for negative inputs.

    Notes:
        Time complexity: O(n).
        Space complexity: O(1).
    """

    # Edge case:
    if not isinstance(n, int):
        raise TypeError("Input must be an integer!")
    if n < 0:
        return False
    if n == 0:
        return 1
    if n <= 2:
        return n

    # Placeholder:
    result = 1

    # O(n) iterations:
    while n > 1:  # E.g., 4! = 4 * 3 * 2
        result = result * n
        n -= 1

    return result


def factorial_recursive(n: int) -> int | bool:
    """Compute a factorial using naive recursion.
    Naive Recursive approach (without Dynamic Programming).

    Args:
        n: Integer to compute the factorial for.

    Returns:
        The factorial of `n`. Returns `False` for negative inputs.

    Notes:
        Time complexity: O(n).
        Space complexity: O(n) due to the recursive call stack.
    """

    # Edge case:
    if not isinstance(n, int):
        raise TypeError("Input must be an integer!")
    if n < 0:
        return False
    # Base (stop) case:
    if n == 0:
        return 1
    # Base (stop) case:
    if n <= 2:
        return n

    # Recursion:
    return n * factorial_recursive(n - 1)


# Example usage:
if __name__ == "__main__":
    result = factorial_iterative(5)
    print("Iterative approach:", result)  # 120

    result = factorial_recursive(5)
    print("\nNaive Recursive approach:", result)  # 120
