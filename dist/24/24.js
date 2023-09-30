// First test string
let string1 = "Hello";
let string2 = "World";
let string3 = "Hello";
// Equality test
console.log(string1 === string3); // true
// Inequality test
console.log(string1 !== string2); // true
// Now second test is lowercase
let text = "Hello World";
let lowercaseText = text.toLowerCase();
// Check if the lowercase text is "hello world"
console.log(lowercaseText === "hello world"); // true
// Now third test equality test
let x = 5;
let y = 10;
// Equality test
console.log(x === y); // false
// Inequality test
console.log(x !== y); // true
// Greater than test
console.log(x > y); // false
// Less than test
console.log(x < y); // true
// Greater than or equal to test
console.log(x >= y); // false
// Less than or equal to test
console.log(x <= y); // true
// now forth test bolean test
let a = true;
let b = false;
// "and" operator
console.log(a && b); // false
// "or" operator
console.log(a || b); // true
// now fifth test of arrary  
let Array = [1, 2, 3, 4, 5];
let item = 3;
// Check if item is in Array
console.log(Array.includes(item)); // true
// now sixth test 
let Array1 = [1, 2, 3, 4, 5];
let item1 = 8;
// Check if itemToCheck is not in myArray
console.log(Array1.includes(item1)); // false
export {};
