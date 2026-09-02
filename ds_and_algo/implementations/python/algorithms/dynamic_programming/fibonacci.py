def dyn_rec_memo_fib(index: int) -> dict[str, int]:
    """Compute the i-th Fibonacci number.
    Uses Dynamic Programming with Recursive (Top-down) approach
        combined with Memoization.
    This implementation reduces the complexity of naive recursive
        approach from O(2^n) to O(n).

    Args:
        index: Zero-based index in the Fibonacci sequence.

    Returns:
        A mapping with the result and the number of recursive calls.

    Notes:
        Time complexity: O(n).
        Space complexity: O(n) for the call stack and memoization cache.
    """

    if not isinstance(index, int):
        raise TypeError("Index must be an integer.")
    if index < 0:
        raise ValueError("Index must be non-negative.")

    # Counter:
    num_calls = 0
    # Caching layer:
    cache = {}  # Using a dictionary as a caching layer.

    def calculate(n: int) -> int:
        """Enables closure, i.e., allows a nested function to modify a variable
        from its enclosing (outer) function's scope (not global).
        """
        nonlocal num_calls

        # Stop case:
        if n < 2:
            return n
        # Dynamic Programming:
        if n in cache:
            return cache[n]
        # Update counter:
        num_calls += 1
        # Recursion:
        cache[n] = calculate(n - 1) + calculate(n - 2)
        return cache[n]

    result = calculate(index)
    return {"result": result, "num_calls": num_calls}


# Example usage:
if __name__ == "__main__":
    # Logging results:
    result_dict = dyn_rec_memo_fib(10)
    result1 = result_dict["result"]
    num_calls1 = result_dict["num_calls"]

    print(f"\nDynamic Programming with Recursive (Top-down) approach: {result1}")  # 55
    print(f"Number of calls: {num_calls1}")  # 9
