"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = 'subaru';
// Test 1
console.log("This car is == 'subaru'?"); // I predictcd True.
console.log(car == 'subaru'); // True
// Test 2
console.log("This car is == 'ford'?"); // I predict False.
console.log(car == 'ford'); // False
// Test 3
console.log("This car is === 'subaru'?"); // I predict True.
console.log(car === 'subaru'); // True
// Test 4
console.log("This car is === 'Subaru'?"); // I predict False.
console.log(car === 'Subaru'); // False (strict equality)
// Test 5
console.log("This car is !== 'honda'? I predict True.");
console.log(car !== 'honda'); // True
// Test 6
console.log("This car is !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// Test 7
let age = 25;
console.log("If Ali's age is > 18? I predict True.");
console.log(age > 18); // True
// Test 8
console.log("If Aslam's is age < 18? I predict False.");
console.log(age < 18); // False
// Test 9
let Student = true;
console.log("If Student === true? I predict this is True.");
console.log(Student === true); // True
// Test 10
console.log("If Student !== false? I predict this will be True.");
console.log(Student !== false); // True
