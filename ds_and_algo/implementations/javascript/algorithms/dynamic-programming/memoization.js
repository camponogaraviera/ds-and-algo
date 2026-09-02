/*
Using memoization to store the results of function calls and returning the cached result for recurring indexes.
*/

/**
 *
 * @description - Uses closure and a hash table to cache results of previous computations.
 * @returns {function(number): number} - A memoized function that takes a number and returns the number plus 10.
 * Time Complexity: O(1) for the first (hash table insert) and subsequent (hash table lookup) calls.
 */
function addTo10() {
  const caching = {}; // Using a Hash Table as a caching layer.

  return function calculate(n) {
    // Using Closure to avoid defining caching in the global scope of the file.
    if (n in caching) return caching[n]; // Checking for a specific property in the object, i.e., checking if the result was already cached.
    console.log("Took some time...");
    caching[n] = n + 10;
    return caching[n];
  };
}

// Example usage:
if (import.meta.url.endsWith(process.argv[1])) {
  const memoizedAddTo10 = addTo10(); // Storing the returned function in a variable, otherwise it would reset the caching at each new call.
  console.log(memoizedAddTo10(1)); // 11
  console.log(memoizedAddTo10(1)); // 11 - This 2nd call is faster because it retrieves the cached result directly from the caching object (hash table) without performing any additional calculations.
  console.log(memoizedAddTo10(2)); // 12
}
