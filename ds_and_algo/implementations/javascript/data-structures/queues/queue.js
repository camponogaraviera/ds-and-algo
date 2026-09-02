import { SinglyNode } from "#js/data-structures/linked-lists/singly-linked-list.js";

/**
 * Class implementing a Queue data structure using a Singly-Linked List node.
 * @template AnyType - Queue elements can be of any data type.
 * @param {SinglyNode<AnyType> | null} first - The first node in the queue.
 * @param {SinglyNode<AnyType> | null} last - The last node in the queue.
 * @param {number} last - The number of elements in the queue.
 */
export class Queue {
  first = null;
  last = null;
  length = 0;

  /**
   *
   * @description - Adds a new element to the end of the Queue.
   * Akin to the append method of a Singly-Linked List.
   * @param {AnyType} element - The element to add.
   * @returns {Queue} - The Queue instance for method chaining.
   * @throws {Error} - If the element is null or undefined.
   * Time Complexity - O(1).
   */
  enqueue(element) {
    // Input Validation (if the element is null or undefined):
    if (element == null)
      // Loose equality to cover both null and undefined.
      throw new Error(
        "Cannot enqueue a null or undefined element to the Queue.",
      );

    // Create a new node with the element to be inserted:
    const newNode = new SinglyNode(element);

    // If the Queue is not empty:
    if (this.last) {
      // Update the current last node to point forward to the new node:
      this.last.next = newNode;
    } else {
      // If the Queue is empty:
      this.first = newNode;
    }

    // Update the last node to be the new node:
    this.last = newNode;

    // Increment the length:
    this.length++;

    // Return the Queue:
    return this;
  }

  /**
   *
   * @description - Removes the first element of the Queue.
   * @returns {AnyType} - The value of the removed element, or null if the Queue is empty.
   * Time Complexity - O(1).
   */
  dequeue() {
    // Edge Case (if the Queue is empty):
    if (!this.length) return null;

    // Save the node that will be removed:
    const removedNode = this.first;

    // Edge Case (if there is only one element):
    if (this.first === this.last) {
      this.clear();
    } else {
      // Update the first element:
      this.first = this.first.next;
      // Decrement the length:
      this.length--;
    }
    return removedNode.value;
  }

  /**
   *
   * @description - Get the first element of the Queue.
   * @returns {AnyType} - The value of the first element, or null if the Queue is empty.
   * Time Complexity - O(1).
   */
  peek() {
    // Edge Case (if the Queue is empty):
    if (!this.length) return null;
    return this.first.value;
    // Alternative way using a ternary operator:
    //return this.length ? this.first.value : null;
  }

  /**
   *
   * @description - Remove all elements from the Queue.
   * @returns {Queue} - The Queue instance for method chaining.
   * Time Complexity - O(1).
   */
  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
    return this;
  }

  /**
   *
   * @description - Get the size of the Queue.
   * @returns {number} - The number of elements in the Queue.
   * Time Complexity - O(1).
   */
  get size() {
    return this.length;
  }

  /**
   *
   * @description - Get the last element of the Queue.
   * @returns {AnyType} - The value of the last element, or null if the Queue is empty.
   * Time Complexity - O(1).
   */
  get rear() {
    return this.last ? this.last.value : null;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const queue = new Queue();
  console.log(queue); // Output: Queue { first: null, last: null, length: 0 }
  queue.enqueue("1st");
  queue.enqueue("2nd");
  queue.enqueue("3rd");
  console.log(queue); // Output: Queue { first: Node { value: '1st', next: Node { value: '2nd', next: [Node] } }, last: Node { value: '3rd', next: null }, length: 3 }
  console.log(queue.peek()); // Output: 1st
  queue.dequeue();
  console.log(queue.peek()); // Output: 2nd
  console.log(queue.size); // Output: 2
  console.log(queue.rear); // Output: 3rd
  queue.clear();
  console.log(queue.size); // Output: 0
}
