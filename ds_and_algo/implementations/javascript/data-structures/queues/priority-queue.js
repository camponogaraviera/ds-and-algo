import { BinaryHeap } from "#js/data-structures/trees/binary-heap.js";

/**
 * Class to build a Priority Queue data structure using a Min Binary Heap.
 * @template AnyType - Queue elements can be of any data type.
 */
class PriorityQueue {
  #heap;
  #sequence;

  /**
   *
   * @constructs PriorityQueue
   * @property {BinaryHeap} heap - An instance of BinaryHeap to hold the elements of the Priority Queue.
   */
  constructor() {
    this.#heap = new BinaryHeap((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.order - b.order; // Preserve FIFO for equal priorities.
    });
    this.#sequence = 0;
  }

  /**
   *
   * @description - Pushes a new element into the Priority Queue with a given priority.
   * @param {AnyType} element - The element to be added to the Priority Queue.
   * @param {number} priority - The priority of the element.
   * @returns {PriorityQueue} - The instance of the Priority Queue for method chaining.
   * Time Complexity - O(log n) if based on a Binary Heap.
   */
  push(element, priority) {
    this.#heap.push({ element, priority, order: this.#sequence++ });
    return this;
  }

  /**
   *
   * @description - Removes the element with the highest priority.
   * Elements with the same priority are popped out in FIFO order.
   * @returns {AnyType} - The element with the highest priority, or null if the Priority Queue is empty.
   * Time Complexity - O(log n) if based on a Binary Heap.
   */
  pop() {
    // Edge Case (if the Priority Queue is empty):
    if (this.#heap.isEmpty()) return null;

    return this.#heap.pop().element;
  }

  /**
   *
   * @description - Returns the root (top) element from the Priority Queue without removing it.
   * @returns {AnyType} - The element with the highest priority, or null if the Priority Queue is empty.
   * Time Complexity - O(1) if based on a Binary Heap.
   */
  peek() {
    // Edge Case (if the Priority Queue is empty):
    if (this.#heap.isEmpty()) return null;

    return this.#heap.peek().element;
  }

  /**
   *
   * @description - Checks if the Priority Queue is empty.
   * @returns {boolean} - True if the Priority Queue is empty, otherwise False.
   * Time Complexity - O(1) if based on a Binary Heap.
   */
  isEmpty() {
    return this.#heap.isEmpty();
  }

  /**
   *
   * @description - Get the internal container of the Priority Queue. Useful for debugging.
   * @returns {Array} - An array containing the elements of the Priority Queue in their current order.
   */
  get container() {
    return this.#heap.container;
  }

  /**
   * @description - Get the length of the Priority Queue.
   * @returns {number} - The number of elements in the Priority Queue.
   */
  get length() {
    return this.#heap.length;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const pq = new PriorityQueue();

  // Push tasks with different priorities:
  const tasks = [
    ["Task A", 3],
    ["Task B", 1], // Highest priority.
    ["Task C", 2],
    ["Task D", 1], // Same priority as task B.
  ];

  for (const [task, priority] of tasks) pq.push(task, priority);

  console.log("\nPriority Queue Container:\n", pq.container);
  console.log("\nPriority Queue Length:", pq.length);
  console.log("\nPeek at the highest priority task:", pq.peek());

  console.log("\nPopping elements in priority order:");
  console.log(pq.pop()); // Output: task B (priority 1, first inserted).
  console.log(pq.pop()); // Output: task D (priority 1, second inserted).
  console.log(pq.pop()); // Output: task C (priority 2).
  console.log(pq.pop()); // Output: task A (priority 3).

  console.log(
    "\nPriority Queue Container after popping the root:",
    pq.container,
  );

  console.log("\nIs the Priority Queue empty?", pq.isEmpty());
}
