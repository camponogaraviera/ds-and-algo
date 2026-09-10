/**
 *
 * @description - Sorts an array using the Merge Sort Algorithm (divide and conquer approach).
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
function mergeSort(arr) {
  /*
  Algorithm:
    1. Divide:

    - Split the Array into two equal (or nearly equal) halves (left and right sub-arrays).
    - The split is typically done at the midpoint, so if the array has an odd length, one sub-array will have one more element than the other.

    2. Conquer:

    - Recursively apply Merge Sort to the left and right sub-arrays formed by the partitioning process.
    - The recursion continues until the base case is reached.
    - Base (a.k.a stopping) case: if the sub-array has `0` or `1` elements, return it as is.

    3. Combine (Merge):

    - Combine the two sorted sub-arrays by comparing elements in order, placing the smaller one first.
    - The merging process is not recursive; it is an iterative (loop-based) step combining two already-sorted arrays.
    - Repeat until the entire array is merged into a single sorted array.
  */
  // Base case (if the array has 0 or 1 elements, it is already sorted):
  if (arr.length <= 1) {
    return arr;
  }

  // Step 1 (Divide):
  const mid = Math.floor(arr.length / 2);

  // Step 2 (Conquer):
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log("\nLeft:", left);
  console.log("Right:", right);
  left = mergeSort(left);
  right = mergeSort(right);

  // Step 3 (Combine/Merge):
  const merged = merge(left, right);
  console.log("Merged:", merged);
  return merged;
}

/**
 *
 * @description - Merges two sorted arrays into one sorted array.
 * @param {Array<number>} left - The left sorted array to merge.
 * @param {Array<number>} right - The right sorted array to merge.
 * @returns {Array<number>} - The merged sorted array.
 */
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Comparing elements from both arrays in order, placing the smaller one first:
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // If there are remaining elements in either array, add them to the result:
  return result.concat(left.slice(i), right.slice(j));
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let array = [3, 2, 1, 5];
  console.log("Unsorted array:", array);
  console.log("\nSorted array:", mergeSort(array)); // Sorted Array: [1, 2, 3, 5]
}
