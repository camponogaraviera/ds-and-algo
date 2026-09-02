/**
 *
 * @description - Sorts an array using the Insertion Sort algorithm.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
function insertionSort(arr) {
  /*
    Algorithm:
        1. Start with the second element (index 1).
        2. Compare the current element with previous elements.
        3. Shift larger elements to the right.
        4. Insert the current element into its sorted position.
        5. Repeat until the array is sorted.
  */

  // Step 1:
  for (let i = 1; i < arr.length; i++) {
    // Current element:
    let currentElement = arr[i];
    // Previous index:
    let j = i - 1;
    console.log(`\nCurrent element: ${currentElement}`);
    // Step 2:
    while (j >= 0 && currentElement < arr[j]) {
      console.log(`Copying element ${arr[j]} to index position ${j + 1}:`);
      arr[j + 1] = arr[j]; // Copy the larger element to the right.
      j--; // Update index to the next previous element.
      console.log(`Array: [${arr}]`);
    }
    // Step 3:
    arr[j + 1] = currentElement; // The +1 is to account for the last decrement of j.
    console.log(
      `Placing the current element ${currentElement} at index position ${
        j + 1
      }: [${arr}]`,
    );
  }
  // Step 5:
  return arr;
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let array = [3, 2, 1, 5];
  console.log("Unsorted array:", array);
  console.log("\nSorted array:", insertionSort(array)); // Sorted Array: [1, 2, 3, 5]
}
