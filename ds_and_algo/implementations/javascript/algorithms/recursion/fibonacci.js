// Naive Recursive Approach (without memoization):

/**
 *
 * @description - Computes the i-th term of the Fibonacci sequence using naive recursion without memoization.
 * @param {number} index - The index of the Fibonacci sequence to compute.
 * @throws {Error} - If index is not a number.
 * @returns {{ result: number, numCalls: number }} - An object containing the i-th Fibonacci value and the number of recursive calls made.
 * Time Complexity - O(2^n). Each call spawns two more calls, creating an exponential growth pattern.
 * Space Complexity - O(n). Due to the depth of the recursive call stack.
 */
function recursiveFibonacci(index) {
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
    // Update counter:
    numCalls++; // Updates numCalls via closure to track recursion depth.
    // Recursion:
    return calculate(n - 1) + calculate(n - 2);
  }

  // Counter:
  let numCalls = 0;
  // Result:
  const result = calculate(index);
  return { result, numCalls }; // ES6 shorthand.
}

// Recursion with Tail Call Optimization:
/**
 *
 * @description - Computes the i-th term of the Fibonacci sequence using tail call optimization.
 * @param {number} index - The index of the Fibonacci sequence to compute.
 * @throws {Error} - If index is not a number.
 * @returns {{ result: number, numCalls: number }} - An object containing the i-th Fibonacci value and the number of recursive calls made.
 * Time Complexity: O(n). It makes n recursive calls.
 * Space Complexity: O(1) if TCO is applied (no extra stack frames). Otherwise, O(n) in non-TCO engines.
 */
function tailCallOptFib(index) {
  "use strict"; // Directive prologue must appear before any other statements.
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
   * @description -  Internal tail-recursive helper function.
   * @param {number} n - Steps remaining in the recursion.
   * @param {number} a - The current Fibonacci number in the sequence (initially F(0) = 0).
   * @param {number} b - The next Fibonacci number in the sequence (initially F(1) = 1).
   * @returns {number} - The Fibonacci number at the original index (when n === 0).
   */
  function calculate(n, a = 0, b = 1) {
    // Base case:
    if (n === 0) return a;
    // Update counter:
    numCalls++; // Updates numCalls via closure to track recursion depth.
    // Recursion Tail Call:
    return calculate(n - 1, b, a + b);
  }

  // Counter:
  let numCalls = 0;
  // Result:
  const result = calculate(index);
  return { result, numCalls }; // ES6 shorthand.
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  // Testing the functions:
  let { result, numCalls } = recursiveFibonacci(10);
  let { result: result2, numCalls: numCalls2 } = tailCallOptFib(10);

  // Logging results:
  console.log(`\nNaive Recursive approach: ${result}`); // 55
  console.log(`Number of calls: ${numCalls}`); // 88

  console.log(`\nTail Call Optimization: ${result2}`); // 55
  console.log(`Number of recursive calls: ${numCalls2}`); // 10
}
