// Iterative approach:

/**
 *
 * @description - This function uses a loop to multiply integers from n down to 1.
 * @param {number} n - A non-negative integer whose factorial is to be computed.
 * @throws {TypeError} If the input is not a number.
 * @returns {number} The factorial of the input number.
 * Space Complexity: O(1). Due to variable updates and assignments.
 * Time Complexity: O(n). The loop runs n times.
 */
function factorialIterative(n) {
  // Input validation:
  if (typeof n !== "number" || Number.isNaN(n) || !Number.isInteger(n))
    throw new TypeError("Input must be an integer!");
  // Edge case:
  if (n < 0) throw new RangeError("Input must be non-negative!");
  if (n === 0) return 1;
  if (n <= 2) return n;

  // Placeholder:
  let result = 1;

  // O(n) iterations:
  while (n > 1) {
    result = result * n;
    n--;
  }

  return result;
}

// Naive Recursive approach (without Dynamic Programming):
/**
 *
 * @description - This function recursively calls itself, multiplying the current number by the next factorial (e.g., 5! = 5 * 4!).
 * @param {number} n - A non-negative integer whose factorial is to be computed.
 * @throws {TypeError} If the input is not a number.
 * @returns {number} The factorial of the input number.
 * Space Complexity: O(n). Given the depth of the recursive call stack.
 * Time Complexity: O(n). Due to n recursive calls before reaching the base case.
 */
function factorialRecursive(n) {
  // Input Validation:
  if (typeof n !== "number" || Number.isNaN(n) || !Number.isInteger(n))
    throw new TypeError("Input must be an integer");
  // Edge case:
  if (n < 0) throw new RangeError("Input must be non-negative");
  // Base (stop) case:
  if (n === 0) return 1;
  // Base (stop) case:
  if (n <= 2) return n;

  // Recursion:
  return n * factorialRecursive(n - 1);
}

/**
 *
 * @description - This function utilizes tail call optimization (TCO) to calculate factorial, minimizing stack usage.
 * @param {number} n - A non-negative integer whose factorial is to be computed.
 * @param {number} accumulator - An accumulator for holding the intermediate result during recursion.
 * @returns {number} The factorial of the input number.
 * @throws {TypeError} If the input is not a number.
 * @throws {Error} If the input is negative.
 * Space Complexity: O(1) if TCO is applied. Otherwise O(n) in non-TCO engines (e.g. V8/Node.js).
 * Time Complexity: O(n). Due to n recursive calls before reaching the base case.
 */
function factorialTailCall(n, accumulator) {
  "use strict"; // Directive prologue must appear before any other statements.
  // Input validation:
  if (typeof n !== "number" || Number.isNaN(n) || !Number.isInteger(n))
    throw new TypeError("Input must be an integer");
  if (n < 0) throw new Error("Input must be non-negative");
  // Base (stop) case:
  if (n === 0) return accumulator;
  // Recursion Tail Call:
  return factorialTailCall(n - 1, n * accumulator);
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let result = factorialIterative(5);
  console.log("Iterative approach:", result); // 120

  result = factorialRecursive(5);
  console.log("\nNaive Recursive approach:", result); // 120

  result = factorialTailCall(5, 1);
  console.log("\nTail Call Recursive approach:", result); // 120
}
