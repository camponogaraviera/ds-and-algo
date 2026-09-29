/**
 * Constructor function to create a node for a Singly-Linked List.
 * @param {number} value - The value stored in the node.
 * @param {object|null} next - The next node.
 * @throws {TypeError} - If the value is undefined.
 */
export function SinglyNode(value, next = null) {
  // Input Validation (type checking):
  if (value === undefined) {
    throw new TypeError("Node value cannot be undefined.");
  }

  this.value = value;
  this.next = next; // Pointer to the next node.
}

/**
 * Class to build a Singly-Linked List.
 * @template AnyType - Linked List node values can be of any data type.
 * @param {SinglyNode|null} head - Reference to the Head node.
 * @param {SinglyNode|null} tail - Reference to the Tail node.
 * @param {number} length - Initial length of the Linked-list.
 */
export class SinglyLinkedList {
  head = null;
  tail = this.head;
  length = 0;

  /**
   *
   * @description - Access the value at a given node by index.
   * @param {number} index - The index of the node to access.
   * @returns {AnyType} - The value of the node at the specified index.
   * @throws {TypeError} - If index is not an integer.
   * @throws {RangeError} - If index is out of bounds.
   * Time Complexity - O(n) in the worst case, as it may require traversing the entire Linked List.
   */
  access(index) {
    // Input Validation (type checking):
    if (typeof index !== "number" || !Number.isInteger(index))
      throw new TypeError(`Index must be an integer, got ${typeof index}.`);

    // Edge Case (if index is out of bounds):
    if (index < 0 || index >= this.length)
      throw new RangeError(
        `Index ${index} is out of bounds for length: ${this.length}.`,
      );

    // Return the node value associated with the index:
    return this.#traverseToNode(index).value;
  }

  /**
   *
   * @description - Search for the node index associated with the provided value.
   * @param {AnyType} value - The value whose node index should be found.
   * @returns {number} - The index of the node containing the value, or -1 if not found.
   * @throws {TypeError} - If the value is undefined.
   * @example - linkedList.search("val1") // Searches for "val1" and returns its index.
   * Time Complexity - O(n) since it requires traversing to the node that matches the given value.
   */
  search(value) {
    // Input Validation (type checking):
    if (value === undefined) throw new TypeError("Value cannot be undefined.");

    // Edge Case (if the Linked List is empty):
    if (this.length === 0) return -1;

    // Creating a reference to the Head node:
    let currentNode = this.head;

    // Initialize the counter for the index:
    let index = 0;

    // Iterate over the Singly-Linked List until the index is found:
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      // Updating the reference to the next node while keeping the Head node intact:
      currentNode = currentNode.next;
      index++;
    }

    // Return -1 if the value does not exist:
    return -1;
  }

  /**
   *
   * @description - Inserts a new node at the specified index in the linked list.
   * @param {number} index - The index at which to insert the new node.
   * @param {AnyType} value - The value of the new node to be inserted.
   * @returns {number} - The new length of the linked list.
   * @throws {TypeError} - If the index is not an integer or if the value is undefined.
   * @throws {RangeError} - If the index is out of bounds.
   * Time Complexity - O(n) since it requires traversing to the node just before the target index.
   */
  insert(index, value) {
    const { result, newNode, previousNode, targetNode } = this.__insertBase(
      index,
      value,
    );

    if (result !== undefined) return this.length;

    // previous_node ───> target_node ───> next_node

    // Update the next of the previous node to point to the new node:
    previousNode.next = newNode; // This does not change the target_node which still holds a reference to the old node.

    // previous_node ───> new_node ───> null
    // target_node ───> next_node (unchanged)

    // Update the next of the new node to point to the target node (shifting to the right):
    newNode.next = targetNode;

    // previous_node ───> new_node ───> target_node ───> next_node (unchanged)

    // Increment the length:
    this.length++;

    // Return the new length of the Linked List:
    return this.length;
  }

  /**
   *
   * @description - Deletes a node at the specified index in the linked list.
   * @param {number} index - The index of the node to delete.
   * @returns {AnyType} - The value of the deleted node.
   * @throws {TypeError} - If the index is not a number.
   * @throws {Error} - If the linked list is empty.
   * @throws {RangeError} - If the index is out of bounds.
   * Time Complexity - O(n) in the worst case since it requires traversing to the node just before the target index.
   */
  delete(index) {
    // Input Validation (type checking):
    if (typeof index !== "number" || !Number.isInteger(index))
      throw new TypeError(`Expected an integer, got ${typeof index}.`);

    // Edge Case (empty linked list):
    if (this.length === 0)
      throw new Error("Cannot delete from an empty linked list.");

    // Edge Case (if index is out of bounds):
    if (index < 0 || index >= this.length)
      throw new RangeError(
        `Index ${index} is out of bounds for length: ${this.length}.`,
      );

    // Edge Case (if the node to be removed is the Head).
    // Time Complexity: O(1) since it requires updating only the Head.
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next; // The new Head is the next node of the current Head.
      this.length--; // Decrement the length.
      if (this.length === 0) {
        this.tail = null; // Both Head and Tail should be null if the Linked List is empty.
      }
      return removedNode.value; // Return the value of the removed node.
    }

    // Edge Case (if the node to be removed is the Tail).
    // Time Complexity: O(n) since it requires traversing to the second-to-last node.
    if (index === this.length - 1) {
      const removedNode = this.tail;
      const penultimateNode = this.#traverseToNode(index - 1);
      penultimateNode.next = null; // Remove reference to the old Tail.
      this.tail = penultimateNode; // Update the Tail.
      this.length--; // Decrement the length.
      return removedNode.value;
    }

    // General Case (node in the middle).

    // Get the node located just before the target node at the specified index:
    const previousNode = this.#traverseToNode(index - 1);
    // Save a reference to the target node at the specified index:
    const targetNode = previousNode.next;
    // Replace the target node with its next node (bypass the target):
    previousNode.next = targetNode.next;

    targetNode.next = null; // This is not required in JS. Since the target node lost its reference, it will be automatically removed from memory (garbage collection) to prevent memory leak.

    // Decrement the length:
    this.length--;
    // Return the value of the removed node:
    return targetNode.value;
  }

  /**
   *
   * @description - Adds a new node to the beginning of the linked list.
   * @param {AnyType} value - The value of the new node.
   * @returns {SinglyLinkedList} - The SinglyLinkedList instance for method chaining.
   * @throws {TypeError} - If the value is undefined.
   * Time Complexity: O(1) since it requires updating only the Head.
   */
  prepend(value) {
    // Input Validation (type checking):
    if (value === undefined) throw new TypeError("Value cannot be undefined.");

    // Create the new node to be inserted:
    const newNode = new SinglyNode(value);

    // Edge case (if the Linked List is empty):
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // The following order matters.
      // Update the newNode to point forward to the current Head:
      newNode.next = this.head;
      // Update the Head to be the new node:
      this.head = newNode;
    }

    // Increment the length:
    this.length++;

    // Returns the linked-list instance for method chaining.
    return this;
  }

  /**
   *
   * @description - Adds a new node to the end of the linked list.
   * @param {...AnyType} values - The values of the new node.
   * @returns {SinglyLinkedList} - The SinglyLinkedList instance for method chaining.
   * @throws {TypeError} - If the value is undefined.
   * Time Complexity - O(1) since it requires updating only the Tail.
   */
  push(...values) {
    for (const value of values) {
      // Input Validation (type checking):
      if (value === undefined)
        throw new TypeError("Value cannot be undefined.");

      // Create the new node to be inserted:
      const newNode = new SinglyNode(value);

      // Edge Case (if the Linked List is empty):
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Update the current Tail to point forward to the new node:
        this.tail.next = newNode;
        // Update the Tail to be the new node:
        this.tail = newNode;
      }

      // Increment the length:
      this.length++;
    }

    // Returns the linked-list instance for method chaining.
    return this;
  }

  /**
   *
   * @description - Removes the last node from the linked list.
   * @returns {AnyType} - The value of the removed node.
   * @throws {Error} - If the linked list is empty.
   * Time Complexity - O(n) since it requires traversing from the Head until the second-to-last node.
   */
  pop() {
    // Edge Case (if the Linked List is empty):
    if (this.length === 0)
      throw new Error("Cannot pop from an empty linked list.");

    // Save a reference of the node to be removed:
    const removedNode = this.tail;

    // Edge Case (if there is only one node):
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      // Get the second-to-last node:
      const penultimateNode = this.#traverseToNode(this.length - 2);
      penultimateNode.next = null; // Remove the reference to the old tail.
      this.tail = penultimateNode; // Update the Tail.
    }

    // Decrement the length:
    this.length--;

    // Return the value of the removed node:
    return removedNode.value;
  }

  /**
   *
   * @description - Helper method to convert the linked list into an array for debugging and visualization.
   * @returns {Array} - The array representation of the linked list.
   * Time Complexity - O(n) since it requires traversing the entire linked list.
   */
  toArray() {
    let currentNode = this.head;
    let result = [];
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(result.join(" -> "));
    return result;
  }

  /**
   *
   * @description - Base method to handle the insertion of a new node at a specific index.
   * @param {number} index - The index at which to insert the new node.
   * @param {AnyType} value - The value of the new node.
   * @param {(value: AnyType) => SinglyNode} createNode - A constructor function that returns a new node instance.
   * @returns {object} - An object containing the new node, previous node, and target node.
   * @throws {TypeError} - If the index is not an integer or if the value is undefined.
   * @throws {RangeError} - If the index is out of bounds.
   */
  __insertBase(index, value, createNode = (val) => new SinglyNode(val)) {
    // Input Validation (type checking):
    if (typeof index !== "number" || !Number.isInteger(index))
      throw new TypeError(`Index must be an integer, got ${typeof index}.`);

    // Input Validation (type checking):
    if (value === undefined) throw new TypeError("Value cannot be undefined.");

    // Edge Case (if index is out of bounds):
    if (index < 0 || index > this.length)
      throw new RangeError(
        `Index ${index} is out of bounds for length: ${this.length}.`,
      );

    // Edge Case (if inserting at the beginning):
    if (index === 0) return { result: this.prepend(value) };

    // Edge Case (if inserting at the end):
    if (index === this.length) return { result: this.push(value) };

    // Create the new node to be inserted:
    if (typeof createNode !== "function")
      throw new TypeError(
        `createNode must be a function, got ${typeof createNode}.`,
      );
    const newNode = createNode(value);
    // Get the node located just before the target node at the specified index:
    const previousNode = this.#traverseToNode(index - 1);
    // Save a reference to the target node at the specified index:
    const targetNode = previousNode.next; // target_node and previous_node.next both point to the same node in memory.

    // previous_node ───> target_node ───> next_node

    return { newNode, previousNode, targetNode };
  }

  /**
   *
   * @description - Helper method to traverse to a specific node in the linked list.
   * @param {number} index - The index of the node to traverse to.
   * @returns {SinglyNode} - The node at the specified index.
   * @throws {Error} - If the linked list is empty.
   * Time Complexity - O(n) for traversing to a node.
   */
  #traverseToNode(index) {
    // Edge Case (if the Linked List is empty or index is out of range):
    if (index < 0 || index >= this.length)
      throw new Error(`Index ${index} is out of bounds.`);

    // Initialize the counter for the index:
    let counter = 0;
    // Creating a reference to the Head node:
    let currentNode = this.head;

    // Iterate over the linked list until the node is found:
    while (counter !== index) {
      // Updating the reference to the next node while keeping the Head node intact:
      currentNode = currentNode.next;
      counter++;
    }

    // Return the removed node:
    return currentNode;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const linkedList = new SinglyLinkedList();
  linkedList.prepend(0);
  linkedList.push(20, 30);
  linkedList.toArray(); // Output: 0 -> 20 -> 30
  linkedList.insert(2, 1.5);
  linkedList.toArray(); // Output: 0 -> 20 -> 1.5 -> 30
  linkedList.delete(2);
  linkedList.toArray(); // Output: 0 -> 20 -> 30
  linkedList.pop();
  linkedList.toArray(); // Output: 0 -> 20
  console.log(linkedList.access(1)); // Output: 20
  console.log(linkedList.search(20)); // Output: 1
}
