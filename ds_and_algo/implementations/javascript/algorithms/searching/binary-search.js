/**
 *
 * @description - Performs an iterative binary search on a sorted array.
 * @param {Array<number>} arr - The sorted array to search in (must be sorted in ascending order).
 * @param {number} target - The value to search for in the array.
 * @returns {number} - The index of the target value if found, otherwise -1.
 * Time Complexity: O(log n) (worst case) or O(1) (best-case if target element is at the middle index).
 * Space Complexity: O(1). Variables are updated in-place.
 */
function binarySearchIter(arr, target) {
  // Step 1:
  let left = 0;
  let right = arr.length - 1;
  // Step 2:
  while (left <= right) {
    // 2.1:
    const mid = Math.floor((left + right) / 2);
    // 2.2:
    if (arr[mid] === target) {
      return mid; // Element found at index mid.
      // 2.3:
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right sub-array.
      // 2.4:
    } else {
      right = mid - 1; // Search in the left sub-array.
    }
  }
  // Step 3:
  return -1; // Element not found.
}

/**
 *
 * @description - Performs a recursive binary search on a sorted array.
 * @param {Array<number>} arr - The sorted array to search in (must be sorted in ascending order).
 * @param {number} target - The value to search for in the array.
 * @param {number} left - The left sub-array.
 * @param {number} right - The right sub-array.
 * @returns {number} - The index of the target value if found, otherwise -1.
 * Time Complexity: O(log n) (worst case) or O(1) (best-case if target element is at the middle index).
 * Space Complexity: O(log n). Due to the depth of the recursive call stack.
 */
function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
  // Base case (target not found):
  if (left > right) return -1;

  // Calculate the middle index:
  const mid = Math.floor((left + right) / 2);

  // Step 1.1 (target found at index mid):
  if (arr[mid] === target) {
    return mid;
  }
  // Step 1.2:
  if (arr[mid] < target) {
    // Step 2 (conquer/search in the right sub-array):
    return binarySearchRec(arr, target, mid + 1, right);
  }
  // Step 2 (conquer/search in the left sub-array):
  return binarySearchRec(arr, target, left, mid - 1);
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  // Iterative:
  const arr = [1, 2, 3, 4, 5];
  let index = binarySearchIter(arr, 4);
  console.log("Iterative Approach:", index); // 3

  // Recursive:
  index = binarySearchRec(arr, 4);
  console.log("Recursive Approach:", index); // 3
}
