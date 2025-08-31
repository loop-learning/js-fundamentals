// JavaScript Basics

// Import statements for modular code (For Modules Lecture)
import { add, multiply } from "./math.js";
import greet from "./greet.js";

// ========================================
// 1. VARIABLES AND DATA TYPES
// ========================================

// Variable declarations - let vs const
let firstName = "John"; // Mutable variable
const age = 25; // Immutable constant

// Variables can be reassigned (let) but constants cannot
firstName = "Mike";
// age = 26;  // This would cause an error

console.log(firstName);

// JavaScript Data Types
let lastName = "This is John"; // String
let score = 99.65; // Number
let isOnline = true; // Boolean
let temperature = null; // Null - explicitly empty
let map; // Undefined - not assigned

console.log(temperature);

// ========================================
// 2. ARRAYS - ORDERED COLLECTIONS
// ========================================

// Array basics - creating and accessing
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[1]); // Access by index

// Modifying arrays
fruits[1] = "Kiwi"; // Update element
fruits.push("Pineapple"); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
fruits.unshift("blue"); // Add to beginning

console.log(fruits);
console.log(fruits.length); // Array size

// Working with array methods
let colors = ["red", "green", "yellow"];
colors.push("Blue");
colors.pop();
colors.shift();
colors.unshift("blue");
console.log(colors);

// ========================================
// 3. OBJECTS - KEY-VALUE PAIRS
// ========================================

// Object creation and property access
let person = {
  name: "John",
  isStudent: true,
  age: 25,
};

console.log(person);
console.log(person.name); // Dot notation
console.log(person["isStudent"]); // Bracket notation

// Modifying objects
person.age = 29; // Update property
person.city = "New York"; // Add new property

console.log(person);

// Object utility methods
let user = {
  name: "john",
  age: 25,
};

console.log(Object.keys(user)); // Get all keys
console.log(Object.values(user)); // Get all values
console.log(Object.entries(user)); // Get key-value pairs

// ========================================
// 4. STRING METHODS
// ========================================

let message = "Hello, Blockchain World!";

// String properties and methods
console.log(message);
console.log(message.length); // String length
console.log(message.toUpperCase()); // Convert to uppercase
console.log(message.toLowerCase()); // Convert to lowercase
console.log(message.includes("Hello")); // Check if contains substring
console.log(message.indexOf("Blockchain")); // Find position of substring

// ========================================
// 5. LOOPS - REPETITION CONTROL
// ========================================

// For loop - counting backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// For loop with arrays - traditional approach
let loopColors = ["red", "green", "blue"];
for (let i = 0; i <= 2; i++) {
  console.log(loopColors[i]);
}

// For-of loop - modern array iteration
for (let color of loopColors) {
  console.log(color);
}

// While loop - condition-based repetition
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// ========================================
// 6. CONTROL STRUCTURES - CONDITIONALS
// ========================================

// Simple if statement
let testScore = 85;
if (testScore < 50) {
  console.log("Student Failed");
} else {
  console.log("Student Passed");
}

// If-else statement
let voterAge = 17;
if (voterAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// If-else-if chain
let temp = 10;
if (temp > 35) {
  console.log("It's really hot");
} else if (temp > 25) {
  console.log("It's warm.");
} else {
  console.log("It's cool");
}

// Logical operators
let checkAge = 20;
let hadID = true;

// OR operator - either condition can be true
if (checkAge >= 18 || hadID) {
  console.log("Access granted");
}

// ========================================
// 7. FUNCTIONS - REUSABLE CODE BLOCKS
// ========================================

// Basic function declaration
function greetBasic() {
  console.log("Hello there!");
  console.log("Hi there!");
}

// Calling functions multiple times
greetBasic();
greetBasic();

// Functions with parameters
function greetUser(name) {
  console.log("My name is " + name + "!");
}

greetUser("John");
greetUser("Michael");
greetUser("Emmy");

// Functions with return values
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3));

// Arrow function without parameters
const greetArrow = () => {
  console.log("Hi, there!");
};
greetArrow();

// Arrow function with parameters
const multiplyArrow = (a, b) => {
  return a * b;
};
console.log(multiplyArrow(4, 5));

// Concise arrow function (implicit return)
const square = (num) => num * num;
console.log(square(8));

// ========================================
// 8. PROMISES
// ========================================

// Promises - handling asynchronous operations
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task Completed");
  } else {
    reject("Something went wrong!");
  }
});

// Promise handling with then/catch
myPromise
  .then((result) => {
    console.log("Success: " + result);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// Promise with setTimeout - simulating delays
let delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded after 2 seconds!");
  }, 2000);
});

delayedPromise.then((data) => console.log(data));

// ========================================
// 9. ASYNC AWAIT
// ========================================

// Async/Await - modern promise handling
async function greetAsync() {
  return "Hello there!";
}

greetAsync().then((result) => console.log(result));

// Async function with await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded!");
    }, 2000);
  });
}

async function loadData() {
  console.log("Loading...");
  const result = await getData();
  console.log(result);
}

loadData();

// Async error handling
async function fetchDataWithError() {
  try {
    let response = await Promise.reject("Oops! Something went wrong.");
    console.log(response);
  } catch (error) {
    console.log("error: ", error);
  }
}

fetchDataWithError();

// ========================================
// 10. ES6+ FEATURES - MODERN JAVASCRIPT
// ========================================

// Template literals - string interpolation
let product = "Laptop";
let price = 100;
console.log(`The ${product} costs $${price}`);

// Destructuring - extracting values from objects
const userObj = { name: "John", city: "New York" };
const { name, city } = userObj;
console.log(city);

// Array destructuring
const colorArray = ["red", "green", "blue"];
const [first, second] = colorArray;
console.log(second);

// Spread operator - expanding arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

// Default parameters
function greetWithDefault(name = "Guest") {
  console.log("hello " + name);
}
greetWithDefault("john");
greetWithDefault(); // Uses default value

// ========================================
// 11. MODULES
// ========================================

// Using imported functions from modules
console.log(add(2, 6)); // From math.js module
console.log(greet("John")); // From greet.js module

// ========================================
// 12. ERROR HANDLING
// ========================================

// Try-catch for synchronous errors
try {
  let result = 10 / 0; // This works in JS (returns Infinity)
  console.log(result);
} catch (error) {
  console.log("Something went wrong", error);
}

// Catching function call errors
try {
  helloWorld(); // This function doesn't exist
} catch (error) {
  console.log("Error is: ", error);
}

// Real-world async error handling
async function fetchData() {
  try {
    let response = await fetch("http://invalid-url.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetching failed: ", error.message);
  }
}

// ========================================
// 13. DEBUGGING
// ========================================

// Checking variable types
let nameVar = "John";
let ageVar = 25;
let isOnlineVar = true;

console.log(typeof nameVar); // "string"
console.log(typeof ageVar); // "number"
console.log(typeof isOnlineVar); // "boolean"

// Type coercion - automatic type conversion
let result = "5" + 2; // String concatenation
console.log(typeof result); // "string"

// Explicit type conversion
let fixed = "5" + String(2);
console.log(fixed);

// Debugging with debugger statement
function testDebug() {
  let x = 10;
  debugger; // Breakpoint for debugging
  let y = x + 5;
  console.log(y);
}

testDebug();
