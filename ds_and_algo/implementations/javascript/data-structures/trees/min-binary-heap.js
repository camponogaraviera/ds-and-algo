/**
 * Factory function for building a Min Binary Heap.
 */
import { createMinBinaryHeap } from "./binary-heap.js";

/*
Create a min. BH with the following values:
    1
   / \
  2   3
 / \
4   5
*/

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const minBinaryHeap = createMinBinaryHeap();

  // Push tasks with different priorities:
  const tasks = [
    { priority: 3 },
    { priority: 4 },
    { priority: 2 },
    { priority: 1 }, // Highest priority
    { priority: 5 },
  ];

  for (const task of tasks) minBinaryHeap.push(task);

  console.log("\nMin. Binary Heap Container:", minBinaryHeap.container);
  console.log("\nHeap length:", minBinaryHeap.length);
  console.log("\nPeek at the highest priority:", minBinaryHeap.peek());

  console.log("\nPopping elements in priority order:");
  console.log(minBinaryHeap.pop());
  console.log(minBinaryHeap.pop());
  console.log(minBinaryHeap.pop());
  console.log(minBinaryHeap.pop());
  console.log(minBinaryHeap.pop());

  console.log("\nHeap after popping the root:", minBinaryHeap.container);

  console.log("\nIs the Heap empty?", minBinaryHeap.isEmpty());
}
