/**
 * Class to build a Stack data structure using an Array.
 * @template AnyType - Stack items can be of any data type.
 */
class StackArray {
  #container;

  /**
   * @constructs StackArray
   */
  constructor() {
    // Uses an Array as a container to store the stack items:
    this.#container = [];
  }

  /**
   *
   * @description - Lookup by value and return the index.
   * @param {AnyType} value - The value to search for.
   * @returns {number} - The index of the value or -1 if value is not found.
   * Time Complexity - O(n).
   */
  search(value) {
    return this.#container.indexOf(value); // Returns -1 if the value is not found.
  }

  /**
   *
   * @description - Add one or more items to the top of the Stack.
   * @param {...AnyType} values - The values to push onto the Stack.
   * @returns {StackArray} - The StackArray instance for method chaining.
   * Time Complexity - O(1).
   */
  push(...values) {
    this.#container.push(...values);
    return this;
  }

  /**
   *
   * @description - Remove the item from the top of the Stack.
   * @returns {AnyType | null} - The removed item, or null if the Stack is empty.
   * Time Complexity - O(1).
   */
  pop() {
    // Edge Case (if the Stack is empty):
    if (!this.#container.length) return null; // Overwrites the default return of "undefined" from Array.pop() method.

    // Remove and return the top item:
    return this.#container.pop();
  }

  /**
   *
   * @description - Retrieve the top item without removing it.
   * @returns {AnyType | null} - The top item, or null if the Stack is empty.
   * Time Complexity - O(1).
   */
  peek() {
    return this.#container.at(-1) ?? null;
  }

  /**
   *
   * @description - Get the internal container of the Stack. Useful for debugging.
   * @returns {Array} - An array containing the elements of the Stack.
   */
  get container() {
    return this.#container;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const stack = new StackArray();
  console.log(stack.container); // output: []
  stack.push(1, 2, 3);
  console.log(stack.container); // output: [ 1, 2, 3 ]
  stack.pop();
  console.log(stack.container); // output: [ 1, 2 ]
  console.log(stack.peek()); // output: 2
  console.log(stack.search(2)); // output: 1
}
