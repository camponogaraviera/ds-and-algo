"""
Find the Duplicate Number (LeetCode 287)
Fast & Slow Pointers Pattern.

The first three solutions are general duplicate-detection algorithms,
while the last solution is specialized to the LeetCode 287 constraints (n + 1 / [1, n])
to make it solvable with Floyd's cycle detection algorithm (Tortoise and Hare)
achieving O(n) TC and O(1) SC.

Tip: The trick is to reinterpret the array as a linked list where each nums[index]
represents a valid node.
"""

from typing import Hashable, List, Optional, TypeVar

T = TypeVar("T")  # Unconstrained data type.
H = TypeVar("H", bound=Hashable)  # Hashable data type.


def find_duplicate_with_nested_loops(array: List[T]) -> Optional[T]:
    """
    Finds the duplicate value using nested for loops.

    Args:
        array: Input array of values that support equality comparison.

    Returns:
        The duplicate value, or None if no duplicate is found.

    Time complexity: O(n^2).
    Space complexity: O(1).
    """
    for i in range(len(array)):
        for j in range(i + 1, len(array)):
            if array[i] == array[j]:
                return array[i]


result1 = find_duplicate_with_nested_loops([1, 3, 4, 2, 2])
print(f"\nResult1: {result1}")  # 2


def find_duplicate_with_map(array: List[H]) -> Optional[H]:
    """
    Finds the duplicate value using a dictionary.

    Args:
        array: Input array of hashable values.

    Returns:
        The duplicate value, or None if no duplicate is found.

    Time complexity: O(n).
    Space complexity: O(n).
    """
    seen = {}
    for item in array:
        if item in seen:
            return item
        seen[item] = True


result2 = find_duplicate_with_map([1, 3, 4, 2, 2])
print(f"\nResult2: {result2}")  # 2


def find_duplicate_with_set(array: List[H]) -> Optional[H]:
    """
    Finds the duplicate value using a set.

    Args:
        array: Input array of hashable values.

    Returns:
        The duplicate value, or None if no duplicate is found.

    Time complexity: O(n).
    Space complexity: O(n).
    """
    seen = set()
    for item in array:
        if item in seen:
            return item
        seen.add(item)


result3 = find_duplicate_with_set([1, 3, 4, 2, 2])
print(f"\nResult3: {result3}")  # 2


def floyd_cycle_detection(nums: List[int]) -> int:
    """
    Finds the duplicate value using Floyd's cycle detection algorithm.

    Args:
        nums: Input array containing n + 1 integers,
        where each integer is in the range [1, n].
        Exactly one duplicate exists.

    Returns:
        The duplicate value.

    Time complexity: O(n)
    Space complexity: O(1)
    """
    slow = 0
    fast = 0
    i = 1

    print(f"\nInitialize pointers:\n{slow}, {fast}")

    # Phase 1: Find the intersection point inside the cycle.
    print("\nPhase 1:")

    while True:
        print(f"Iteration {i}:")
        slow = nums[slow]  # Tortoise: Move 1 step.
        fast = nums[nums[fast]]  # Hare: Move 2 steps.
        print(slow, fast)
        i += 1
        if slow == fast:
            break

    # Phase 2: Find the entrance to the cycle (the duplicate value).
    print("\nPhase 2:")

    j = 1
    slow2 = 0  # Start a new pointer from the beginning of the array.
    print(slow, slow2)

    while slow != slow2:
        print(f"Iteration {j}:")
        slow = nums[slow]  # Move 1 step.
        slow2 = nums[slow2]  # Move 1 step.
        print(slow, slow2)
        j += 1

    return slow


result4 = floyd_cycle_detection([1, 3, 4, 2, 2])
print(f"\nResult4: {result4}")  # 2
