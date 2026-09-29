def iterative_fibonacci(index: int) -> dict[str, int]:
    """Compute the i-th Fibonacci number using iteration.
    Iterative Approach.

    Args:
        index: Zero-based index in the Fibonacci sequence.

    Returns:
        A mapping with the result and the number of loop iterations.

    Notes:
        Time complexity: O(n).
        Space complexity: O(1).
    """

    # Edge case:
    if not isinstance(index, int):
        raise TypeError("Index must be an integer.")
    if index < 0:
        raise ValueError("Index must be non-negative.")
    if index < 2:
        return {"result": index, "numCalls": 0}

    # Initialize variables:
    prev = 0
    curr = 1

    # Counter:
    num_calls = 0

    # Do a for loop n times, O(n):
    for _ in range(index - 1):
        next_val = prev + curr
        prev = curr
        curr = next_val
        num_calls += 1

    return {"result": curr, "numCalls": num_calls}


def recursive_fibonacci(index: int) -> dict[str, int]:
    """Compute the i-th Fibonacci number using naive recursion.
    Naive Recursive approach (without Dynamic Programming).

    Args:
        index: Zero-based index in the Fibonacci sequence.

    Returns:
        A mapping with the result and the number of recursive calls.

    Notes:
        Time complexity: O(2^n).
        Space complexity: O(n) due to the recursive call stack.
    """

    def calculate(index: int) -> int:
        # Using closure to avoid defining num_calls in the global scope of the file.
        nonlocal num_calls

        # Base (stop) case:
        if index < 2:
            return index
        # Update counter:
        num_calls += 1
        # Recursion:
        return calculate(index - 1) + calculate(index - 2)

    if not isinstance(index, int):
        raise TypeError("Index must be an integer.")
    if index < 0:
        raise ValueError("Index must be non-negative.")

    # Counter:
    num_calls = 0
    result = calculate(index)
    return {"result": result, "numCalls": num_calls}


# Example usage:
if __name__ == "__main__":
    # Testing the functions:
    result1 = iterative_fibonacci(10)
    result2 = recursive_fibonacci(10)

    # Logging results:
    print(f"Iterative approach: {result1['result']}")  # 55
    print(f"Number of calls: {result1['numCalls']}")  # 9

    print(f"\nNaive Recursive approach: {result2['result']}")  # 55
    print(f"Number of calls: {result2['numCalls']}")  # 88
