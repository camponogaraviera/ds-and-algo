import { SinglyNode } from "#js/data-structures/linked-lists/singly-linked-list.js";

/**
 * Class to build a Stack data structure using a Singly-Linked List.
 * @template AnyType - Stack items can be of any data type.
 * @param {SinglyNode|null} bottom - The bottom node of the stack.
 * @param {SinglyNode|null} top - The top node of the stack.
 * @param {number} size - The number of elements in the stack.
 */
class StackLinkedList {
  bottom = null;
  top = null;
  size = 0;

  /**
   *
   * @description - Lookup (search) by value and return the index.
   * @param {AnyType} value - The value to search for.
   * @returns {number} - The index of the value or -1 if value is not found.
   * Time Complexity - O(n).
   */
  search(value) {
    // Start from the top:
    let currentNode = this.top;
    let index = this.size - 1;
    // Iterate over the Stack:
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index--;
    }
    // If the value is not found:
    return -1;
  }

  /**
   *
   * @description - Add an item to the top of the Stack.
   * @param {...AnyType} values - The value of the item to push onto the stack.
   * @returns {StackLinkedList} - The StackLinkedList instance for method chaining.
   * Time Complexity - O(1).
   */
  push(...values) {
    // Iterate over all values to be pushed:
    for (const value of values) {
      // Create the new node to be inserted:
      const newNode = new SinglyNode(value);

      // If the Stack is not empty:
      if (this.size) {
        // Create a reference to the current top:
        const previousTop = this.top;
        // Update the current top to be the new node:
        this.top = newNode;
        // Update the top to point to the previous node:
        this.top.next = previousTop;
      } else {
        // If the Stack is empty, both bottom and top point to the new node:
        this.bottom = newNode;
        this.top = newNode;
      }
      // Increment the size:
      this.size++;
    }
    return this;
  }

  /**
   *
   * @description - Remove the item from the top of the stack.
   * @returns {AnyType | null} - The removed item, or null if the stack is empty.
   * Time Complexity - O(1).
   */
  pop() {
    // Edge Case (if the Stack is empty):
    if (!this.size) return null;

    // Edge Case (if the Stack has only one node):
    if (this.bottom === this.top) {
      this.bottom = null;
    }

    // Save a reference of the node to be removed:
    const poppedNode = this.top;

    // Update the top node to point to the next node:
    this.top = this.top.next;
    // Decrement the Stack size:
    this.size--;
    // Return the value of the removed node:
    return poppedNode.value;
  }

  /**
   *
   * @description - Retrieve the top item without removing it.
   * @returns {AnyType | null} - The top item, or null if the stack is empty.
   * Time Complexity - O(1).
   */
  peek() {
    // Edge Case (if the Stack is empty):
    if (!this.size) return null;

    // Return the value of the top item:
    return this.top.value;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const stack = new StackLinkedList();
  console.log(stack); // StackLinkedList { bottom: null, top: null, size: 0 }
  stack.push(1, 2, 3);
  console.log("\n", stack);
  /* 
  StackLinkedList {
    bottom: SinglyNode { value: 1, next: null },
    top: SinglyNode {
      value: 3,
      next: SinglyNode { value: 2, next: [SinglyNode] }
    },
    size: 3
  }
  */
  stack.pop();
  console.log("\n", stack);
  /*
  StackLinkedList {
    bottom: SinglyNode { value: 1, next: null },
    top: SinglyNode { value: 2, next: SinglyNode { value: 1, next: null } },
    size: 2
  }
  */
  console.log(stack.peek()); // 2
  console.log(stack.search(2)); // 1
}
