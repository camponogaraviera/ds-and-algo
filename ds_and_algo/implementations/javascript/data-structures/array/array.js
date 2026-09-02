/*
# Built-in Array Methods in JavaScript 

- array[index] = item                           # Assigns/Updates a item of a particular element at index. If the index is out of bounds, it expands the array without error.
- array[index]                                  # Returns the item at a given index. Returns undefined if the index is out of bounds.
- array.indexOf(item)                           # Returns the index of the first occurrence of a item, or -1 if not found. 
- array.unshift(item)                           # Inserts a new element at the beginning of the array and returns the new length.
- array.splice(start, deleteCount, item1, ...)  # Add or remove elements from a start position onwards. The deleteCount defines the number of elements to remove. Returns removed elements or [].
- array.push(item1, item2..)                    # Push/Append one or more elements to the end of the array and returns the new length.
- array.shift()                                 # Removes the first element and returns the removed element. 
- array.pop()                                   # Removes the last element and returns the removed element, or undefined if the array is empty.
- array.length                                  # Returns the number of elements in the array.
- array.concat(array2, array3, …)               # Returns a new array by merging multiple arrays.
- array.slice(start, end)                       # Returns a shallow copy of a portion of the array (excluding end).
- array.reverse()                               # Reverses the array in place and returns the reversed array.
- array.sort(compareFn)                         # Sorts the array in place using the provided comparator function.
- array.map(callbackFn)                         # Returns a new array with the results of applying a function to each element.
- array.forEach(callbackFn)                     # Iterates over each element, executing a function. Returns undefined.
*/

/**
 * Class to build a dynamic Array data structure using an object.
 * @template AnyType - Generic type parameter for the elements stored in the Array (e.g., number, string, object).
 */
class CustomArray {
  #container; // Private field to hide complex implementation details (abstraction).

  /**
   *
   * @constructs CustomArray
   * @property {{[key: number]: AnyType}} container - Internal storage (object-based) to hold the elements of the array,
   * where keys are array indices. Avoids native array behavior, which defeats the purpose of learning.
   * @property {number} length - The number of elements in the array.
   */
  constructor() {
    this.#container = {}; // Faster than Object.create(null) in Chrome's V8 engine.
    this.length = 0;
  }

  /**
   *
   * @description - Access the item at the given index.
   * This method is designed to match array[index].
   * @param {number} index - The index of the element to access.
   * @returns {AnyType | undefined} - The item stored at the index, or undefined if the index is not an integer or is out of bounds.
   * @example - array.access(2)
   * Time Complexity: O(1) due to direct access by index.
   */
  access(index) {
    // Input Validation (type checking):
    if (!Number.isInteger(index)) {
      return undefined;
    }

    // Edge Case (valid negative index):
    if (index < 0) index += this.length;

    // Edge Case (if index is out of bounds):
    if (index < 0 || index >= this.length) return undefined;

    // Return the item at index:
    return this.#container[index];
  }

  /**
   *
   * @description - Search for the index of the provided item.
   * This method is designed to match array.indexOf(item).
   * @param {AnyType} item - The item to search for.
   * @returns {number} - The index of the matching item, or -1 if not found.
   * @example - array.search("item1")
   * Time Complexity: O(n) since it requires traversing to the index that matches the given item.
   */
  search(item) {
    // Loop over all elements in the Array:
    for (let i = 0; i < this.length; i++) {
      if (this.#container[i] === item) return i; // Check for matching items and return the index.
    }

    return -1;
  }

  /**
   *
   * @description - Inserts an element at a specified position, shifting existing elements to the right.
   * This method is designed to match array.splice(index, 0, item).
   * @param {number} index - The position where the new item should be inserted.
   * @param {AnyType} item - The element to be inserted at the specified index.
   * @returns {number} - The new length of the array.
   * @example - array.insert(0, "item0")
   * Time Complexity: O(n) in the worst case, as shifting elements requires linear time.
   */
  insert(index, item) {
    // Type coercion:
    index = Math.trunc(index);

    // Input validation:
    if (Number.isNaN(index)) index = 0;

    // Edge Case (if index is negative):
    if (index < 0) {
      index = this.length + index; // Normalize the negative index relative to the end.
      if (index < 0) index = 0; // If still negative, insert at the start.
    }

    // Edge Case (if index is out of bounds):
    if (index >= this.length) {
      return this.push(item); // If index exceeds the current length, insert at the end.
    }

    // From the index position onwards, shift all elements to the right (update container indices):
    this.#rightShift(index);
    // Insert the item at index:
    this.#container[index] = item;
    // Increment the length:
    this.length++;

    return this.length;
  }

  /**
   *
   * @description - Deletes an element at a specific index, shifting existing elements to the left.
   * This method is akin to array.splice(index, 1), but returns undefined instead of [].
   * @param {number} index - The index of the element to delete.
   * @returns {AnyType | undefined} - The removed element, or undefined if array is empty or index is out of bounds.
   * @example - array.delete(2)
   * Time Complexity: O(n) in the worst case, as shifting elements requires linear time.
   */
  delete(index) {
    // Input Validation (type checking):
    if (!Number.isInteger(index)) {
      return undefined;
    }

    // Edge Case (if the array is empty):
    if (this.length === 0) return undefined;

    // Edge Case (valid negative index):
    if (index < 0) {
      index = this.length + index; // Normalize negative indexes relative to the end.
      if (index < 0) index = 0; // If still negative, delete the first element.
    }

    // Edge Case (if index is out of bounds):
    if (index >= this.length) return undefined;

    // Save the element to be removed in memory:
    const removedElement = this.#container[index];

    // Edge Case (if index is the last one):
    if (index === this.length - 1) {
      delete this.#container[this.length - 1]; // Remove the last element. O(1) time complexity.
      this.length--;
      return removedElement;
    }

    // From the index position onwards, shift all elements to the left:
    this.#leftShift(index); // O(n) time complexity.

    // Decrement the length:
    this.length--;

    // Returns the removed element:
    return removedElement;
  }

  /**
   *
   * @description - Removes a specific item from the array.
   * @param {AnyType} item - The item to remove.
   * @returns {AnyType | undefined} - The removed item, or undefined if not found.
   * @example - array.remove("val1")
   * Time Complexity: O(n) in the worst case, as shifting elements requires linear time.
   */
  remove(item) {
    // Get the index of the item to be removed:
    const index = this.search(item);

    // Edge Case (if item is not found):
    if (index === -1) return undefined;

    // Remove the item at the index and return the removed item:
    return this.delete(index); // O(n).
  }

  /**
   *
   * @description - Append (push) one or more items to the end of the Array.
   * This method is designed to match array.push(item) with support to multiple arguments.
   * @param {...AnyType} items - The items to be added to the end of the Array.
   * @returns {number} - The new length of the array.
   * @example - array.push("item1", "item2")
   * Time Complexity: O(1).
   */
  push(...items) {
    // Loop over all arguments:
    for (const item of items) {
      // Insert the item at the end:
      this.#container[this.length] = item;

      // Increment the length:
      this.length++;
    }

    // Return the new length of the Array:
    return this.length;
  }

  /**
   *
   * @description - Removes the last element from the array.
   * This method is designed to match array.pop().
   * @returns {AnyType | undefined} - The removed element, or undefined if the array is empty.
   * @example - array.pop()
   * Time Complexity: O(1) for removing the last element.
   */
  pop() {
    // Edge Case (if the array is empty):
    if (this.length === 0) return undefined;

    // Save the last element in memory:
    const removedElement = this.#container[this.length - 1];

    // Remove the last element:
    delete this.#container[this.length - 1];

    // Decrement the length:
    this.length--;

    // Return the removed element:
    return removedElement;
  }

  /**
   *
   * @description - Get the internal container of the Array. Useful for debugging.
   * @returns {{[key: number]: AnyType}} - An object containing the elements of the Array.
   */
  get container() {
    return this.#container;
  }

  /**
   *
   * @private
   * @description - Shifts all elements from the given index to the right by one position.
   * @param {number} index - The index at which to shift elements.
   * Time Complexity: O(n) in the worst case.
   */
  #rightShift(index) {
    // Loop backwards through the Hash Table from self.length until the index position:
    for (let i = this.length; i > index; i--) {
      this.#container[i] = this.#container[i - 1];
    }
  }

  /**
   *
   * @private
   * @description - Shifts all elements from the given index to the left by one position.
   * @param {number} index - The index at which to shift elements.
   * Time Complexity: O(n) in the worst case.
   */
  #leftShift(index) {
    // Loop forward through the Hash Table from the index position until the second-to-last element:
    for (let i = index; i < this.length - 1; i++) {
      this.#container[i] = this.#container[i + 1]; // Left shift elements.
    }

    // Delete the last duplicate element:
    delete this.#container[this.length - 1];
  }

  /**
   * @description - Iterable protocol implementation to allow for...of loops, spread, etc.
   * @returns {object} - An iterator object.
   */
  [Symbol.iterator]() {
    let i = 0;
    const length = this.length;
    const container = this.#container;

    // Return an iterator object with a 'next' method using object literal and arrow function syntax.
    // Each call to next() returns an object of the form { value, done }.
    return {
      next: () =>
        i < length ? { value: container[i++], done: false } : { done: true },
    };
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let arr = new CustomArray();
  console.log(arr.container); // output: {}
  for (let i = 0; i < 5; i++) {
    arr.push(i + 1);
  }
  console.log(arr.container); // output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  arr.insert(-5, "item0");
  console.log([...arr]); // output: ["item0", 1, 2, 3, 4, 5]
  console.log(arr.access(0)); // output: "item0"
  console.log(arr.search("item0")); // output: 0
  arr.delete(0);
  console.log([...arr]); // output: [1, 2, 3, 4, 5]
  arr.remove(5);
  console.log([...arr]); // output: [1, 2, 3, 4]
  arr.pop();
  console.log([...arr]); // output: [1, 2, 3]
  console.log(arr.length); // output: 3
}
