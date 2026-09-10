/**
 * Parent class for building Min or Max Binary Heaps using an Array.
 * @template AnyType - Generic type parameter for the elements stored in the node of a Binary Heap (e.g., number, string, object).
 */
export class BinaryHeap {
  #container;
  #compare;

  /**
   *
   * @constructs BinaryHeap
   * @param {(a: AnyType, b: AnyType) => number} comparator - A function that compares two elements.
   * @property {Array} container - An array to hold the elements of the Binary Heap.
   */
  constructor(comparator) {
    this.#compare = comparator;
    this.#container = [];
  }

  /**
   *
   * @description - Adds a new element to the Binary Heap.
   * @param {AnyType} element - The element to be added to the Binary Heap.
   * @returns {BinaryHeap} - The instance of the Binary Heap for method chaining.
   * @throws {Error} - If the element is null or undefined.
   * Time Complexity - O(log n) due to the height of the Binary Heap (always balanced).
   */
  push(element) {
    // Edge Case (if the element is null or undefined):
    if (element == undefined)
      throw new Error("Cannot push an undefined element to the Binary Heap.");

    // Add the new element to the end of the heap:
    this.#container.push(element);

    // Restore the heap property by bubbling up the new element:
    this.#bubbleUp(this.#container.length - 1); // O(log n).
    return this;
  }

  /**
   * @description - Removes the root (top) element from the Binary Heap.
   * @returns {AnyType} - The root element of the Binary Heap, or null if the Heap is empty.
   * Time Complexity - O(log n) due to the height of the Binary Heap (always balanced).
   */
  pop() {
    // Edge Case (if the Binary Heap is empty):
    if (this.#container.length === 0) return null;

    // Save the root element that will be removed:
    const removedNode = this.#container[0];
    // Remove and save the last element from the heap:
    const last = this.#container.pop(); // O(1).

    // Check if the heap is empty after popping the last element:
    if (this.#container.length > 0) {
      // Replace the root with the last element:
      this.#container[0] = last;
      // Restore the heap property by sinking down the new root element:
      this.#sinkDown(0); // O(log n).
    }

    return removedNode;
  }

  /**
   *
   * @description - Returns the root (top) element from the Binary Heap.
   * @returns {AnyType} - The element with the highest priority, or null if the Heap is empty.
   * Time Complexity - O(1).
   */
  peek() {
    // Edge Case (if the Binary Heap is empty):
    if (this.#container.length === 0) return null;

    return this.#container[0];
  }

  /**
   *
   * @description - Checks if the Binary Heap is empty.
   * @returns {boolean} - True if the Binary Heap is empty, otherwise false.
   * Time Complexity - O(1).
   */
  isEmpty() {
    return this.#container.length === 0;
  }

  /**
   *
   * @description - Get the internal container of the Binary Heap. Useful for debugging.
   * @returns {Array} - An array containing the elements of the Binary Heap in their current order.
   */
  get container() {
    return this.#container;
  }

  /**
   * @description - Get the length of the Binary Heap.
   * @returns {number} - The number of elements in the Binary Heap.
   * Time Complexity - O(1) if based on a Binary Heap.
   */
  get length() {
    return this.#container.length;
  }

  /**
   *
   * @description - Helper method to restore the heap property by moving an element up.
   * @param {number} index - The index of the element to bubble up.
   */
  #bubbleUp(index) {
    const element = this.#container[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.#container[parentIndex];
      if (this.#compare(element, parent) >= 0) break;
      this.#container[index] = parent;
      index = parentIndex;
    }
    this.#container[index] = element;
  }

  /**
   *
   * @description - Helper method to restore the heap property by moving an element down.
   * @param {number} index - The index of the element to sink down.
   */
  #sinkDown(index) {
    const length = this.#container.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.#compare(
          this.#container[leftChildIndex],
          this.#container[smallest],
        ) < 0
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.#compare(
          this.#container[rightChildIndex],
          this.#container[smallest],
        ) < 0
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.#container[index], this.#container[smallest]] = [
        this.#container[smallest],
        this.#container[index],
      ];
      index = smallest;
    }
  }
}

/**
 * Creates a min binary heap (lowest priority at the top).
 * @returns {BinaryHeap} A new min binary heap instance.
 */
export function createMinBinaryHeap() {
  return new BinaryHeap((a, b) => a.priority - b.priority);
}

/**
 * Creates a max binary heap (highest priority at the top).
 * @returns {BinaryHeap} A new max binary heap instance.
 */
export function createMaxBinaryHeap() {
  return new BinaryHeap((a, b) => b.priority - a.priority);
}
