/*
When an immutable data type (e.g., number, string, boolean, undefined, null, symbol, bigint) is assigned to another variable 
in JavaScript, a copy (rather than a reference) of the same value is created. This means that changes made to one variable 
will not affect the other variable.

When a mutable data type (array, hash table, map, set, functions) is assigned to another variable in JavaScript, 
another reference (pointer) to the same data structure in memory is created. Both variables will point to the same memory 
location where the data structure is stored. This means that any changes made to the data through one variable will be 
reflected in the other variable as well.
*/

console.log("\n######## Immutable Objects ########\n");

console.log("Assigning immutable data types to variables:\n");

let val1 = 10;
let val2 = val1;
console.log(`val1 = ${val1}`);
console.log(`val2 = ${val2}`);

console.log("\nUpdating one variable does not update the other:\n");

val1 *= 2;
console.log(`val1 = ${val1}`);
console.log(`val2 = ${val2}`);

console.log("\n######## Mutable Objects ########\n");

console.log(
  "Assigning mutable data types to variables, i.e., creating a new reference that points to the same object in memory:\n",
);

let d1 = { key1: 0 };
let d2 = d1;
console.log(`d1 = ${JSON.stringify(d1)} \nd2 = ${JSON.stringify(d2)}`);

console.log("\nUpdating `d1` also updates `d2`:");
d1.key1 = 1;
console.log(`d1 = ${JSON.stringify(d1)} \nd2 = ${JSON.stringify(d2)}`);

console.log("\nUpdating `d2` also updates `d1`:");
d2.key1 = 2;
console.log(`d1 = ${JSON.stringify(d1)} \nd2 = ${JSON.stringify(d2)}`);

console.log("\nReassigning either variable removes the reference:");

d1 = {};
console.log(`d1 = ${JSON.stringify(d1)} \nd2 = ${JSON.stringify(d2)}`);
