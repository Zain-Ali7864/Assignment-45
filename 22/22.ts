// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Intentional error: Access an out-of-bounds index
let indexToAccess = 10;

// Attempt to access the element (intentional error)
const element = numbers[indexToAccess];

// Correcting the error by checking if the index is valid
if (indexToAccess >= 0 && indexToAccess < numbers.length) {
  console.log("Element at index", indexToAccess, ":", numbers[indexToAccess]);
} else {
  console.log("Index", indexToAccess, "is out of bounds.");
}
