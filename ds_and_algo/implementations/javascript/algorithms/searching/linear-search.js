// Arrays

const array = ["a", false, 5];

console.log(array.indexOf("a")); // 0
console.log(array.findIndex((item) => typeof item === "boolean")); // 1
console.log(array.find((item) => item > 3)); // 5
console.log(array.includes("a")); // true

// Hash Tables

/*
General Recipe:

1. Convert the Hash Table into an Array.
2. Apply built-in Array methods.

- To use `.find()` and `.findIndex()`, convert the object into an Array of entries using `Object.entries()`.

- To use `.indexOf` and `.includes()`, convert the object to an Array of values using `Object.values()`.
*/

const people = {
  1: { name: "Alice", age: 20 },
  2: { name: "Bob", age: 25 },
  3: { name: "Charlie", age: 30 },
};

// Find the person whose age is greater than 25:
let foundPerson = Object.entries(people).find(([, person]) => person.age > 25);
console.log(foundPerson); // [ '3', { name: 'Charlie', age: 30 } ]

// Find the ID of the person whose name is Bob:
let foundIndex = Object.keys(people).find((key) => people[key].name === "Bob");
console.log(foundIndex); // 2

// Check for a given name:
let nameExists = Object.values(people)
  .map((person) => person.name)
  .includes("Bob");

console.log(nameExists); // true
