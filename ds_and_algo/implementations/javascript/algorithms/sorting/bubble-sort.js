/**
 *
 * @description - Sorts an array using the Bubble Sort algorithm.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
const bubbleSort = (arr) => {
  /*
  Algorithm:
    1. Loop over each element of the Array.
    2. In each pass through the Array, compare each pair of adjacent elements.
    3. If the current element is greater than the next element, swap their positions.
    4. Repeat steps 1 onwards until a complete pass is made without any swaps (i.e., the Array is Sorted).
  */

  // Step 1:
  for (let i = 0; i < arr.length -1; i++) {
    let swapped = false;
    console.log(`\nPass ${i + 1}: \n${arr}`);
    // Step 2:
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      // Step 3:
      if (arr[j] > arr[j + 1]) {
        // Swap condition:
        let placeholder = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = placeholder;
        swapped = true;
        console.log(`Swapped: ${arr}`);
      }
    }
    if (!swapped) {
      break;
    }
  }

  // Return the sorted array:
  return arr;
};

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  let array = [3, 2, 1, 5];
  console.log("Unsorted array:", array);
  console.log("\nSorted array:", bubbleSort(array)); // Sorted Array: [1, 2, 3, 5]
}
