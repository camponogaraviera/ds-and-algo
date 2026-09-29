/*
# Built-in Plain Object Methods in JavaScript:

- object[key] = value          # Adds a new key-value pair to the Hash Table. If the key already exists, it will update.
- object[key]                  # Retrieves the value from a specific key. Returns undefined if key is not found.
- delete object[key]           # Deletes the key-value pair associated with the key.
- Object.entries(object)       # Get a list of all key-value pairs.
- Object.keys(object)          # Get a list of all keys.
- Object.values(object):       # Get a list of all values.
- Object.keys(object).length   # Get the length of the hash table. 
*/

/**
 * Class to build a Hash Table data structure using separate chaining.
 * @template AnyType - Values associated with keys can be of any data type.
 */
class HashTable {
  #container;

  /**
   *
   * @constructs HashTable
   * @param {number} size - The number of buckets in the Hash Table.
   * @property {Array<Array<[string | symbol, AnyType]> | undefined>} container - An array of fixed size to store the buckets of the Hash Table.
   * Each element is either another array containing a bucket of key-value pairs, or undefined if the bucket is empty.
   */
  constructor(size) {
    if (!Number.isInteger(size) || size <= 0) {
      throw new RangeError("Size must be a positive integer.");
    }
    this.#container = new Array(size);
  }

  /**
   *
   * @description - Access the value associated with the provided key.
   * @param {string} key - The key whose value should be found.
   * @returns {AnyType | undefined} The value associated with the key, or undefined if not found.
   * Time Complexity - O(1) without collisions, O(n) with collisions.
   */
  access(key) {
    // Get the address associated with the key:
    let address = this.#hash(key); // O(1) (Hashing function).

    // Get the bucket associated with the address:
    const bucket = this.#container[address]; // O(1) (Array Access).

    // Check if the bucket exists (i.e., if is not undefined):
    if (bucket) {
      // Loop over all entries in the bucket until the last entry:
      for (const [k, v] of bucket) {
        // O(1) for value comparison if there is only one key-value pair in the bucket, 0(n) otherwise (multiple key-value pairs in the same bucket).
        if (k === key) return v; // Check for matching keys and return the associated value.
      }
    }

    // Return undefined if the key does not exist:
    return undefined;
  }

  /**
   *
   * @description - Search for the key associated with the provided value.
   * This implementation uses separate chaining, i.e., in the worst case, all n entries hash to the same bucket, leaving the other buckets empty.
   * @param {AnyType} value - The value whose key should be found.
   * @returns {string | undefined} - The first key associated with the value, or undefined if not found.
   * Time complexity - O(M + n) -> O(n) (if M ≤ n), because each entry is visited only once, even with collisions.
   */
  search(value) {
    // Edge Case (empty Hash Table):
    if (!this.#container.length) return undefined;

    // Loop over all M buckets in the Hash Table (O(M)):
    for (const bucket of this.#container) {
      // Check if the bucket is undefined before iterating over it:
      if (bucket) {
        // Loop over all N entries in the bucket (O(N)):
        for (const [k, v] of bucket) {
          if (v === value) return k; // Use strict equality check for value and type, and return the associated key (O(1)).
        }
      }
    }

    // If the value is not found:
    return undefined;
  }

  /**
   *
   * @description - Adds a new key-value pair to the Hash Table or updates it if the key already exists.
   * @param {string} key - The key to insert or update.
   * @param {AnyType} value - The value associated with the key.
   * Time complexity - O(1) if there are no collisions, or O(n) if there are collisions.
   */
  insert(key, value) {
    // Get the address associated with the key:
    let address = this.#hash(key); // O(1) (Hashing function).

    // Get the bucket associated with the address:
    let bucket = this.#container[address]; // O(1) (Array Access).

    // If bucket at address is undefined, create an empty bucket:
    if (!bucket) {
      bucket = []; // This reassignment will break the reference to this.#container[address].
      this.#container[address] = bucket; // Now both this.#container[address] and bucket share a common reference (they point to the same newly created array).
    }

    // If the key already exists, update its value (the loop is skipped when the bucket is an empty Array):
    for (let pair of bucket) {
      // O(n) in case of collisions.
      if (pair[0] === key) {
        pair[1] = value; // Updates the value inside the bucket. Pair is a reference to the inner array, so modifying pair[1] updates the bucket in place.
        return;
      }
    }

    // Otherwise, push/append the new key-value pair to the end of the bucket:
    bucket.push([key, value]); // This modifies this.#container[address].
  }

  /**
   *
   * @description - Deletes a key-value pair from the Hash Table.
   * @param {string} key - The key to be deleted.
   * @returns {boolean} - True if the key-value pair was successfully deleted.
   * @throws {Error} - If the bucket does not exist or the key was not found.
   * Time complexity - O(1) if there are no collisions, or O(n) if there are collisions.
   */
  delete(key) {
    // Get the address associated with the key:
    let address = this.#hash(key); // O(1) (Hashing function).

    // Get the bucket associated with the address:
    const bucket = this.#container[address]; // O(1) (Array Access).

    // Raise an exception if the bucket does not exists (i.e., if is undefined):
    if (!bucket) throw new Error("Bucket does not exist in the Hash Table.");

    // Step 1. Find the index of the key:
    let indexToDelete = -1;
    // Loop over all entries inside the bucket:
    for (let i = 0; i < bucket.length; i++) {
      // O(n) in case of collisions (key is at the end of the bucket).
      if (bucket[i][0] === key) {
        indexToDelete = i; // Store the index of the key to be deleted.
        //delete bucket[i]; // Removes the key-value pair, but does not re-index the bucket.
        break; // Stop the loop once the key is found.
      }
    }

    // Raise an exception if the key was not found:
    if (indexToDelete === -1)
      throw new Error(`${key} not found in the Hash Table.`);

    // Step 2. Remove the key-value pair and shift (re-index) remaining elements in the bucket to the left:
    bucket.splice(indexToDelete, 1); // Introduces an overhead of O(n).
    return true;
  }

  /**
   *
   * @description - Returns all keys in the hash table.
   * @returns {Array<string>} - An array containing all keys in the hash table.
   * Time Complexity - O(n) where n is the size of the hash table.
   */
  keys() {
    // Create a container for keys:
    const keysArray = [];

    // Loop over all M buckets in the Hash Table:
    for (const bucket of this.#container) {
      // Check if the bucket is undefined before iterating over it:
      if (bucket) {
        // Handle collisions (multiple key-value pairs in the same bucket):
        for (const [key] of bucket) {
          keysArray.push(key);
        }
      }
    }

    // Return the Array with keys:
    return keysArray;
  }

  /**
   *
   * @description - Returns all values in the hash table.
   * @returns {Array<AnyType>} - An array containing all values in the hash table.
   * Time Complexity - O(n) where n is the size of the hash table.
   */
  values() {
    // Create a container for values:
    const valuesArray = [];

    // Loop over all M buckets in the Hash Table:
    for (const bucket of this.#container) {
      // Check if the bucket is undefined before iterating over it:
      if (bucket) {
        // Handle collisions (multiple key-value pairs in the same bucket):
        for (const [, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }

    // Return the Array with values:
    return valuesArray;
  }

  /**
   *
   * @description - Get the internal container of the Hash Table. Useful for debugging.
   * @returns {Array} - An array containing the buckets of the Hash Table.
   */
  get container() {
    return this.#container;
  }

  /**
   *
   * @description - A hashing function that maps a key string to an index (number).
   * representing the address of a memory slot where a key-value pair will be stored.
   * @param {string} key - The key to hash.
   * @returns {number} - The corresponding hashed value (slot address).
   * Time Complexity - O(len(key)).
   */
  #hash(key) {
    let hashValue = 0;
    const hash_table_size = this.#container.length;
    const base = 31;
    if (typeof key !== "string") {
      throw new TypeError("HashTable keys must be strings.");
    }
    for (const char of key) {
      hashValue = (hashValue * base + char.codePointAt(0)) % hash_table_size;
    }
    return hashValue;
  }
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const size = 11; // In a real-world scenario, the size should be a large prime number.
  const hashTable = new HashTable(size);
  console.log(hashTable.container); // [ <11 empty items> ]
  hashTable.insert("key1", 100);
  hashTable.insert("key2", 200);
  hashTable.insert("key1", "qwert"); // Updating existing key.
  let res = hashTable.access("key2");
  console.log(res); // 200
  res = hashTable.search(200);
  console.log(res); // key2
  res = hashTable.keys();
  console.log(res); // [ 'key1', 'key2' ]
  res = hashTable.values();
  console.log(res); // [ 'qwert', 200 ]
  hashTable.delete("key1");
  console.log(hashTable.container); // [ <4 empty items>, [], [ [ 'key2', 200 ] ], <5 empty items> ]
}
