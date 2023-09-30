"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// First store the person's name in a variable
let personName = "John Doe";
// Convert and print the name in lowercase
console.log(personName.toLowerCase());
// Convert and print the name in uppercase
console.log(personName.toUpperCase());
// Convert and print the name in titlecase
console.log(personName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '));
