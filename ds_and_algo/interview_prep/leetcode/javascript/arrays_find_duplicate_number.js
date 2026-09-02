/* 
Find the Duplicate Number (LeetCode 287)
Fast & Slow Pointers Pattern.

The first three solutions are general duplicate-detection algorithms,
while the last solution is specialized to the LeetCode 287 constraints (n + 1 / [1, n])
to make it solvable with Floyd's cycle detection algorithm (Tortoise and Hare)
achieving O(n) TC and O(1) SC.

Tip: The trick is to reinterpret the array as a linked list where each nums[index] represents a valid node.
*/

/**
 * @description - Finds the duplicate value using nested for loops.
 * @param {number[]} array - Input array of values that support equality comparison.
 * @returns {number|undefined} - The duplicate value, or undefined if no duplicate is found.
 * Time complexity: O(n^2).
 * Space complexity: O(1).
 */
const findDuplicateWithNestedLoops = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
};

let result1 = findDuplicateWithNestedLoops([1, 3, 4, 2, 2]);
console.log(`\nResult1: ${result1}`); // 2

/**
 * @description - Finds the duplicate value using a Map.
 * @param {number[]} array - Input array of values.
 * @returns {number|undefined} - The duplicate value, or undefined if no duplicate is found.
 * Time complexity: O(n) average.
 * Space complexity: O(n).
 */
const findDuplicateWithMap = (array) => {
  const map = new Map();
  for (const item of array) {
    if (map.has(item)) {
      return item;
    }
    map.set(item, true);
  }
};

let result2 = findDuplicateWithMap([1, 3, 4, 2, 2]);
console.log(`\nResult2: ${result2}`); // 2

/**
 * @description - Finds the duplicate value using Set and Array.find.
 * @param {number[]} array - Input array of values.
 * @returns {number|undefined} - The duplicate value, or undefined if no duplicate is found.
 * Time complexity: O(n) average.
 * Space complexity: O(n).
 */
const findDuplicateWithSet = (array) => {
  /*
  This implementation uses:
  1. The arrow function syntax.
  2. A Set instead of a Map for tracking seen elements.
  3. Array.find() to return the first element that matches the test condition specified in the callback function.
  4. Checks Set.has() before adding to determine if the element is a duplicate.
  */
  const seen = new Set();
  return array.find((x) => {
    if (seen.has(x)) return true;
    seen.add(x);
    return false;
  });
};

let result3 = findDuplicateWithSet([1, 3, 4, 2, 2]);
console.log(`\nResult3: ${result3}`); // 2

/**
 * @description - Finds the duplicate value using Floyd's cycle detection algorithm.
 * @param {number[]} nums - Input array containing n + 1 integers, where each integer is in the range [1, n]. Exactly one duplicate exists.
 * @returns {number} - The duplicate value.
 * Time complexity: O(n).
 * Space complexity: O(1).
 */
const floydCycleDetection = (nums) => {
  let slow = 0;
  let fast = 0;
  let i = 1;
  console.log(`\nInitialize pointers:\n${slow}, ${fast}`);

  // Phase 1: Find the intersection point inside the cycle.
  console.log("\nPhase 1:");
  do {
    console.log(`Iteration ${i}:`);
    slow = nums[slow]; // Tortoise: Move 1 step.
    fast = nums[nums[fast]]; // Hare: Move 2 steps.
    console.log(slow, fast);
    i++;
  } while (slow !== fast);

  // Phase 2: Find the entrance to the cycle (the duplicate value).
  console.log("\nPhase 2:");
  let j = 1;
  let slow2 = 0; // Start a new pointer from the beginning of the array.
  console.log(slow, slow2);

  while (slow !== slow2) {
    console.log(`Iteration ${j}:`);
    slow = nums[slow]; // Move 1 step.
    slow2 = nums[slow2]; // Move 1 step.
    console.log(slow, slow2);
    j++;
  }

  return slow;
};

let result4 = floydCycleDetection([1, 3, 4, 2, 2]);
console.log(`\nResult4: ${result4}`); // 2
