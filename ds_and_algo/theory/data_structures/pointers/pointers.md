<div align='center'>
  <h1> Pointers </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Key Concepts](#key-concepts)

# About

A pointer in programming is a variable that stores the memory address of another variable.

Instead of holding a direct value like a regular variable, a pointer "points" to the location in memory where that value is stored.

Pointers enable dynamic memory allocation, the creation of complex data structures like linked lists, and efficient manipulation of arrays and other data structures.

Note: **dynamic memory allocation** is the process of allocating memory during the runtime of a program, as opposed to static memory allocation, which happens at compile time. This allows a program to request memory from the operating system as needed and makes it possible to handle variable-sized data structures whose length may not be known beforehand, such as dynamic arrays, vectors, linked lists, and trees that can grow and shrink dynamically in length.

# Key Concepts

- Memory Address: Every variable is stored in a specific location in memory, which has an address. A pointer holds this address.
  
- Dereferencing: Accessing the value stored at the memory address held by a pointer.

- Types of Pointers: In programming languages such as C++, pointers can point to various data types, like integers, characters, arrays, or even other pointers.
