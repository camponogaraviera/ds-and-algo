/**
 * Factory function for building a Max Binary Heap.
 */
import { createMaxBinaryHeap } from "./binary-heap.js";

/*
Create a max. BH with the following values:
    5
   / \
  4   2
 / \
1   3
*/

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const maxBinaryHeap = createMaxBinaryHeap();

  // Push tasks with different priorities:
  const tasks = [
    { priority: 3 },
    { priority: 4 },
    { priority: 2 },
    { priority: 1 },
    { priority: 5 }, // Highest priority
  ];

  for (const task of tasks) maxBinaryHeap.push(task);

  console.log("\nMax. Binary Heap Container:", maxBinaryHeap.container);
  console.log("\nHeap length:", maxBinaryHeap.length);
  console.log("\nPeek at the highest priority:", maxBinaryHeap.peek());

  console.log("\nPopping elements in priority order:");
  console.log(maxBinaryHeap.pop());
  console.log(maxBinaryHeap.pop());
  console.log(maxBinaryHeap.pop());
  console.log(maxBinaryHeap.pop());
  console.log(maxBinaryHeap.pop());

  console.log("\nHeap after popping the root:", maxBinaryHeap.container);

  console.log("\nIs the Heap empty?", maxBinaryHeap.isEmpty());
}
