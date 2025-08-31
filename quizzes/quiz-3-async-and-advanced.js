// ========================================
// QUIZ 3: ASYNC PROGRAMMING AND ADVANCED FEATURES
// Topics: Promises, Async/Await, ES6+ Features, Modules, Error Handling, Debugging
// ========================================

// SECTION A: Promises
// ========================================

// Question 1: Promise Creation
// Create a promise that:
// - Resolves with 'Data loaded successfully' after 1 second
// - Has a 30% chance to reject with 'Loading failed'
// - Handle both success and error cases with .then() and .catch()

// Question 2: Promise Chain Understanding
// Predict what this code will output:
// Promise.resolve('Start')
//   .then(result => result + ' -> Step 1')
//   .then(result => result + ' -> Step 2')
//   .then(result => console.log(result));

// ========================================
// SECTION B: Async/Await
// ========================================

// Question 3: Promise to Async/Await Conversion
// Convert this promise-based code to use async/await:
// function fetchUserData() {
//   return fetch('https://api.example.com/user')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error));
// }

// Question 4: Async Error Handling
// Write an async function that:
// - Simulates an API call that might fail (70% success rate)
// - Uses try-catch for error handling
// - Returns appropriate success or error messages
// - Includes a 1-2 second delay

// ========================================
// SECTION C: ES6+ Features
// ========================================

// Question 5: Destructuring and Template Literals
// Given: let user = { name: 'Sarah', age: 28, city: 'Boston', job: 'Developer' };
// - Use destructuring to extract name, age, and city
// - Use template literal to create: 'Hi, I'm Sarah, 28 years old from Boston'
// - Try destructuring with default values for missing properties

// Question 6: Spread Operator and Default Parameters
// - Combine arrays [1, 2] and [3, 4, 5] using spread operator
// - Create function greet(name = 'Guest', greeting = 'Hello') with default parameters
// - Test the function with: greet(), greet('John'), greet('Jane', 'Hi')

// ========================================
// SECTION D: Modules
// ========================================

// Question 7: Module Import/Export Understanding
// Given these module files:
// 
// math.js:
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// 
// greet.js:
// const greet = (name) => `Hello ${name}`;
// export default greet;
// 
// Write the correct import statements to use both modules in main.js

// ========================================
// SECTION E: Error Handling
// ========================================

// Question 8: Try-Catch Scenarios
// Write try-catch blocks to handle these errors:
// - Calling a function that doesn't exist
// - Parsing invalid JSON: JSON.parse('invalid json')
// - Accessing property of null: null.property
// Handle each error with appropriate error messages

// ========================================
// SECTION F: Debugging
// ========================================

// Question 9: Type Checking Challenge
// Predict the typeof result for these expressions:
// - typeof '5' + 2
// - typeof (5 + '2')
// - typeof Number('123')
// - typeof Boolean('')
// - typeof undefined

// Question 10: Bug Hunting
// Find and fix the bugs in this function:
// function processData(arr) {
//     let result = [];
//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i] > 10) {
//             result.push(arr[i] * 2);
//         }
//     }
//     return result;
// }
// What issues do you see and how would you fix them?