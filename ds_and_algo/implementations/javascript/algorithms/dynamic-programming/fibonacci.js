/*
Dynamic programming reduces the time complexity of Naive Recursive Fibonacci from O(2^n) to O(n).
*/

// Iterative (bottom-up) approach:
/**
 *
 * @description - Computes the i-th term of the Fibonacci sequence using iterative (bottom-up) approach.
 * @param {number} index - The index of the Fibonacci sequence to compute.
 * @throws {Error} - If index is not a number.
 * @returns {{result: number, numCalls: number}} An object containing the i-th Fibonacci value and the number of iterations performed.
 * Time Complexity - O(n). Since the for loop runs n-1 times.
 * Space Complexity - O(1). Due to variable updates and assignments.
 */
function iterativeFibonacci(index) {
  // Edge case:
  if (
    typeof index !== "number" ||
    Number.isNaN(index) ||
    !Number.isInteger(index)
  ) {
    throw new TypeError("Index must be an integer");
  }
  if (index < 0) throw new Error("Index must be non-negative");
  if (index < 2) return { result: index, numCalls: 0 };

  // Initialize variables:
  let prev = 0,
    curr = 1;

  // Counter:
  let numCalls = 0;

  // Do a for loop n times, O(n):
  for (let i = 0; i < index - 1; i++) {
    let next_val = prev + curr;
    prev = curr;
    curr = next_val;
    numCalls++;
  }

  return { result: curr, numCalls };
}

// Recursive (top-down) approach:
/**
 *
 * @description - Computes the i-th term of the Fibonacci sequence using recursion (top-down) approach with memoization (caching).
 * @param {number} index - The index of the Fibonacci sequence to compute.
 * @throws {Error} - If index is not a number.
 * @returns {{ result: number, numCalls: number }} - An object containing the i-th Fibonacci value and the number of recursive calls made.
 * Time Complexity - O(n). In the worst case.
 * Space Complexity - O(n). Due to the depth of the recursive call stack and caching layer.
 */
function dynRecMemoFib(index) {
  // Input validation:
  if (
    typeof index !== "number" ||
    Number.isNaN(index) ||
    !Number.isInteger(index)
  ) {
    throw new TypeError("Index must be an integer");
  }
  if (index < 0) throw new Error("Index must be non-negative");

  /**
   *
   * @description - Internal helper for recursive computation.
   * @param {number} n - The current index in the recursion.
   * @returns {number} - The Fibonacci value at the current index.
   */
  function calculate(n) {
    // Base (stop) case:
    if (n < 2) return n;
    // Dynamic Programming:
    if (n in cache) return cache[n];
    // Update counter:
    numCalls++; // Updates numCalls via closure to track recursion depth.
    // Recursion:
    cache[n] = calculate(n - 1) + calculate(n - 2);
    return cache[n];
  }

  // Caching layer:
  let cache = {}; // Using a Hash Table as a caching layer.
  // Counter:
  let numCalls = 0;
  // Result:
  const result = calculate(index);
  return { result, numCalls }; // ES6 shorthand.
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  // Testing the functions:
  let { result, numCalls } = iterativeFibonacci(10);
  let { result: result2, numCalls: numCalls2 } = dynRecMemoFib(10);

  // Logging results:
  console.log(`Iterative approach: ${result}`); // 55
  console.log(`Number of calls: ${numCalls}`); // 9

  console.log(
    `\nDynamic Programming with Recursive (top-down) approach: ${result2}`,
  ); // 55
  console.log(`Number of calls: ${numCalls2}`); // 9
}
