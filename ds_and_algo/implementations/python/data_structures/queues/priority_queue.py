from __future__ import annotations

import heapq  # Python's built-in module.
from typing import Generic, TypeVar

AnyType = TypeVar("AnyType")  # Queue elements can be of any data type.


class PriorityQueue(Generic[AnyType]):
    """
    Class to build a Priority Queue using a min-heap.
    The smallest number indicates the highest priority.

    Attributes:
        _queue: The internal container for the heap.
    """

    _queue: list[tuple[int, int, AnyType]]

    def __init__(self) -> None:
        self._queue = []
        self._counter = 0  # To maintain FIFO order for elements with the same priority.

    def push(self, element: AnyType, priority: int) -> PriorityQueue[AnyType]:
        """
        Push an element into the queue with a given priority.

        Args:
            element: The element to add.
            priority: The priority of the element.

        Returns:
            The priority queue instance for method chaining.

        Notes:
            Time complexity: O(log n).
        """
        heapq.heappush(self._queue, (priority, self._counter, element))
        self._counter += 1

        return self

    def pop(self) -> AnyType:
        """
        Remove and return the highest-priority element from the queue (min-heap).

        Returns:
            The element with the highest priority.

        Raises:
            IndexError: If the priority queue is empty.

        Notes:
            Time complexity: O(log n).
        """

        # Edge Case (if the Priority Queue is empty):
        if self.is_empty():
            raise IndexError("Cannot pop from empty Queue!")

        return heapq.heappop(self._queue)[-1]

    def peek(self) -> tuple[int, AnyType] | None:
        """
        Return the root (priority, element) without removing it.

        Returns:
            The `(priority, element)` pair at the root, or None if the queue is empty.

        Notes:
            Time complexity: O(1).
        """

        # Edge Case (if the Priority Queue is empty):
        if self.is_empty():
            return None

        priority, _, element = self._queue[0]
        return (priority, element)

    def is_empty(self) -> bool:
        """
        Return True if the queue is empty.

        Notes:
            Time complexity: O(1).
        """

        return len(self._queue) == 0

    @property
    def container(self) -> list[tuple[int, int, AnyType]]:
        """Return the internal container for debugging."""
        return self._queue

    def __len__(self) -> int:
        """
        Return the number of elements in the queue.

        Notes:
            Time complexity: O(1).
        """

        return len(self._queue)


# Example usage:
if __name__ == "__main__":
    pq = PriorityQueue()

    # Push tasks with different priorities:
    pq.push("Task A", 3)
    pq.push("Task B", 1)
    # Highest priority.
    pq.push("Task C", 2)
    pq.push("Task D", 1)
    # Same priority as task B.

    print("\nPriority Queue Container:\n", pq.container)
    print("\nPriority Queue Length:", len(pq))
    print("\nPeek at the highest priority task:", pq.peek())

    print("\nPopping elements in priority order:")
    print(pq.pop())  # task B (priority 1, first inserted).
    print(pq.pop())  # task D (priority 1, second inserted).
    print(pq.pop())  # task C (priority 2).
    print(pq.pop())  # task A (priority 3).

    print("\nPriority Queue Container after popping the root:", pq.container)

    print("\nIs the Priority Queue empty?", pq.is_empty())
