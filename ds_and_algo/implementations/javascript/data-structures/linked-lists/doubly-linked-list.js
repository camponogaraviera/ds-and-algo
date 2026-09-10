import {
  SinglyNode,
  SinglyLinkedList,
} from "#js/data-structures/linked-lists/singly-linked-list.js";

/**
 *
 * @description - Constructor function to create a node for a Doubly-Linked List.
 * It "inherits" from SinglyNode and adds a `previous` pointer.
 * @param {number} value - The value stored in the node.
 * @param {DoublyNode|null} next - The next node.
 * @param {DoublyNode|null} previous - The previous node.
 * @throws {TypeError} - If the value is undefined.
 */
function DoublyNode(value, next = null, previous = null) {
  SinglyNode.call(this, value, next);
  this.previous = previous; // Pointer to the previous node.
}

/**
 * Class to build a Doubly-Linked List.
 * @template AnyType - Linked List node values can be of any data type.
 */
class DoublyLinkedList extends SinglyLinkedList {
  /**
   * @constructs DoublyLinkedList
   */
  constructor() {
    super(); // Call the constructor of the parent class (SinglyLinkedList) to include search and access methods avoiding code repetition.
  }

  /**
   *
   * @description - Inserts a new node at the specified index in the linked list.
   * @param {number} index - The index at which to insert the new node.
   * @param {AnyType} value - The value of the new node.
   * @returns {number} - The new length of the linked list.
   * @throws {TypeError} - If the index is not an integer or if the value is undefined.
   * @throws {RangeError} - If the index is out of bounds.
   * Time Complexity - O(n) since it requires traversing to the node just before the target index.
   */
  insert(index, value) {
    // Call the base insert method from the parent class (SinglyLinkedList) to handle common cases:
    const { newNode, previousNode, targetNode } = this.__insertBase(
      index,
      value,
      (val) => new DoublyNode(val),
    );

    // __insertBase handles index 0 and index === length via prepend/push.
    if (newNode === undefined) return this.length;

    // previous_node ───> target_node ───> next_node

    // Update the next of the previous node to point to the new node:
    previousNode.next = newNode; // This does not change the target_node which still holds a reference to the old node.

    // previous_node ───> new_node ───> null
    // target_node ───> next_node (unchanged)

    // Update the newNode to point back to the previousNode:
    newNode.previous = previousNode;
    // Update the next of the new node to point to the target node (shifting to the right):
    newNode.next = targetNode;
    // Update the targetNode to point back to the newNode:
    targetNode.previous = newNode;

    // previous_node ───> <───new_node ───> <───target_node ───> next_node (unchanged)

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
    if (typeof index !== "number")
      throw new TypeError(`Expected a number, got ${typeof index}.`);

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
      if (this.head) {
        // If the new Head is not null:
        this.head.previous = null; // Update the previous node of the new Head to null.
      } else {
        this.tail = null; // If the Head is null, update the Tail to null (only one node).
      }
      this.length--; // Decrement the length.
      return removedNode.value; // Return the removed node.
    }

    // Edge Case (if the node to be removed is the Tail).
    // Time Complexity: O(1) since the Tail has a reference to the previous node.
    if (index === this.length - 1) {
      return this.pop();
    }

    // General Case (node in the middle).

    // Get the node located just before the target node at the specified index:
    const previousNode = this.#traverseToNode(index - 1);
    // Save a reference to the target node at the specified index:
    const targetNode = previousNode.next;
    // Replace the target node with its next node:
    previousNode.next = targetNode.next;
    // Update the previous pointer of the next node:
    targetNode.next.previous = previousNode;

    // Since the target node lost its reference, it will be automatically removed from memory (garbage collection).

    // Decrement the length:
    this.length--;
    // Return the removed node:
    return targetNode.value;
  }

  /**
   *
   * @description - Adds a new node to the beginning of the linked list.
   * @param {AnyType} value - The value of the new node.
   * @returns {DoublyLinkedList} - The DoublyLinkedList instance for method chaining.
   * @throws {TypeError} - If the value is undefined.
   * Time Complexity: O(1) since it requires updating only the Head.
   */
  prepend(value) {
    // Input Validation (type checking):
    if (value === undefined) throw new TypeError("Value cannot be undefined.");

    // Create the new node to be inserted:
    const newNode = new DoublyNode(value);

    // Edge case (if the Linked List is empty):
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    // The following order matters.

    // Update the newNode to point forward to the current Head:
    newNode.next = this.head;
    // Update the current Head to point back to the newNode:
    this.head.previous = newNode;
    // Update the Head to be the new node:
    this.head = newNode;

    // Increment the length:
    this.length++;

    // Returns the doubly-linked list instance for method chaining.
    return this;
  }

  /**
   *
   * @description - Adds a new node to the end of the linked list.
   * @param {...AnyType} values - The value of the new node.
   * @returns {DoublyLinkedList} - The DoublyLinkedList instance for method chaining.
   * @throws {TypeError} - If the value is undefined.
   * Time Complexity - O(1) since it requires updating only the Tail.
   */
  push(...values) {
    for (const value of values) {
      // Input Validation (type checking):
      if (value === undefined)
        throw new TypeError("Value cannot be undefined.");

      // Create the new node to be inserted:
      const newNode = new DoublyNode(value);

      // Edge Case (if the Linked List is empty):
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        // The new node points back to the current Tail:
        newNode.previous = this.tail;
        // Update the current Tail to point forward to the new node:
        this.tail.next = newNode;
        // Update the Tail to be the new node:
        this.tail = newNode;
      }

      // Increment the length:
      this.length++;
    }

    // Returns the doubly-linked list instance for method chaining.
    return this;
  }

  /**
   *
   * @description - Removes the last node from the linked list.
   * @returns {AnyType} - The value of the removed node.
   * @throws {Error} - If the linked list is empty.
   * Time Complexity - O(1) since the Tail has a reference to the previous node.
   */
  pop() {
    // Edge Case (if the Linked List is empty):
    if (this.length === 0) {
      throw new Error("Cannot pop from an empty linked list.");
    }

    // Save a reference of the node to be removed:
    let removedNode = this.tail;

    // Edge Case (if there is only one node):
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // The new Tail is the previous node of the current Tail:
      this.tail = this.tail.previous;
      // Update the new Tail to point forward to null:
      this.tail.next = null;
    }

    // Decrement the length:
    this.length--;

    // Return the value of the removed node:
    return removedNode.value;
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
    // Edge Case (do not loop over an empty data structure):
    if (this.length === 0)
      throw new Error("Cannot traverse an empty Linked List.");

    if (index < 0 || index >= this.length)
      throw new Error(`Index ${index} is out of bounds.`);

    // Initialize the counter for the index:
    let counter = 0;
    // Creating a reference to the Head node:
    let currentNode = this.head;

    // Iterate over the Linked List until the node is found:
    while (counter !== index) {
      // Updating the reference to the next node while keeping the Head node intact:
      currentNode = currentNode.next;
      counter++;
    }

    // Return the node:
    return currentNode;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.prepend(0);
  doublyLinkedList.push(20, 30);
  doublyLinkedList.toArray(); // Output: 0 -> 20 -> 30
  doublyLinkedList.insert(2, 1.5);
  doublyLinkedList.toArray(); // Output: 0 -> 20 -> 1.5 -> 30
  doublyLinkedList.delete(2);
  doublyLinkedList.toArray(); // Output: 0 -> 20 -> 30
  doublyLinkedList.pop();
  doublyLinkedList.toArray(); // Output: 0 -> 20
  console.log(doublyLinkedList.access(1)); // Output: 20
  console.log(doublyLinkedList.search(20)); // Output: 1
}
