/**
 *
 * @description - Sorts an array using the Selection Sort Algorithm.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
const selectionSort = (arr) => {
  /*
  Algorithm:
    1. Loop over each element of the array.
    2. Assume the current element is the minimum.
    3. Scan the remaining (unsorted) elements for a smaller value.
    4. If found, update the minimum index.
    5. Swap the minimum element with the current element.
  */

  // Step 1:
  for (let i = 0; i < arr.length; i++) {
    // Step 2:
    let min_index = i;
    let placeholder = arr[i];
    console.log(`\nPass ${i + 1}: \nArray state: ${arr}`);
    // Step 3:
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Comparing ${arr[j]} with ${arr[min_index]}`);
      // Step 4:
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    // Step 5:
    arr[i] = arr[min_index];
    arr[min_index] = placeholder;
  }
  // Return the sorted Array:
  return arr;
};

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let array = [3, 2, 1, 5];
  console.log("Unsorted array:", array);
  console.log("\nSorted array:", selectionSort(array)); // Sorted Array: [1, 2, 3, 5]
}
