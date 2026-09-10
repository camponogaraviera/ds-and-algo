from collections.abc import Callable


def add_to_10() -> Callable[[int], int]:
    """Demonstrate memoization for repeated computations.

    Notes:
        Memoization stores results of function calls and reuses them
            for recurring inputs.
    """
    caching: dict[int, int] = {}  # Using a dictionary as a caching layer.

    def calculate(n: int) -> int:
        # Using Closure to avoid defining caching in the global scope of the file.
        if n in caching:
            return caching[n]  # Checking for a specific key in the dictionary, i.e.,
            # checking if the result was already cached.
        print("Took some time...")
        caching[n] = n + 10
        return caching[n]

    return calculate


# Example usage:
if __name__ == "__main__":
    memoized_add_to_10 = (
        add_to_10()
    )  # Storing the returned function in a variable, otherwise it would reset the
    # caching at each new call.
    print(memoized_add_to_10(1))  # 11
    print(
        memoized_add_to_10(1)
    )  # 11 - This 2nd call is faster because it retrieves the cached result directly
    # from the caching object (hash table) without performing any additional
    # calculations.
    print(memoized_add_to_10(2))  # 12
