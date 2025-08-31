// ========================================
// QUIZ 3 SOLUTIONS: ASYNC PROGRAMMING AND ADVANCED FEATURES
// Topics: Promises, Async/Await, ES6+ Features, Modules, Error Handling, Debugging
// ========================================

// SECTION A: Promises - SOLUTIONS
// ========================================

// Question 1: Promise Creation - SOLUTION
function createDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 70% success rate (30% failure)
            if(Math.random() > 0.3) {
                resolve('Data loaded successfully');
            } else {
                reject('Loading failed');
            }
        }, 1000);
    });
}

// Handle with .then() and .catch()
createDataPromise()
    .then(result => {
        // Handle success
    })
    .catch(error => {
        // Handle error
    });

// Question 2: Promise Chain Understanding - SOLUTION
// The code will output: 'Start -> Step 1 -> Step 2'
// Each .then() receives the result from the previous step and adds to it

// ========================================
// SECTION B: Async/Await - SOLUTIONS
// ========================================

// Question 3: Promise to Async/Await Conversion - SOLUTION
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        // Handle data
    } catch (error) {
        // Handle error
    }
}

// Key changes:
// - Added 'async' before function
// - Used 'await' instead of .then()
// - Used try-catch instead of .catch()

// Question 4: Async Error Handling - SOLUTION
async function simulateApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3) { // 70% success rate
                resolve({ data: 'API data received', status: 200 });
            } else {
                reject(new Error('API call failed'));
            }
        }, Math.random() * 1000 + 1000); // 1-2 second delay
    });
}

async function handleApiCall() {
    try {
        const result = await simulateApiCall();
        return `Success: ${result.data}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// ========================================
// SECTION C: ES6+ Features - SOLUTIONS
// ========================================

// Question 5: Destructuring and Template Literals - SOLUTION
let user = { name: 'Sarah', age: 28, city: 'Boston', job: 'Developer' };

// Destructuring to extract properties
const { name, age, city } = user;

// Template literal
const introduction = `Hi, I'm ${name}, ${age} years old from ${city}`;

// Destructuring with default values
const { name: userName, country = 'USA', salary = 'Not specified' } = user;

// Question 6: Spread Operator and Default Parameters - SOLUTION

// Combining arrays with spread operator
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]

// Function with default parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// Testing:
// greet() returns "Hello, Guest!"
// greet('John') returns "Hello, John!"  
// greet('Jane', 'Hi') returns "Hi, Jane!"

// ========================================
// SECTION D: Modules - SOLUTIONS
// ========================================

// Question 7: Module Import/Export Understanding - SOLUTION

// Import statements for main.js:

// Import named exports from math.js
import { add, multiply } from './math.js';

// Import default export from greet.js  
import greet from './greet.js';

// Usage examples:
// add(5, 3) returns 8
// multiply(4, 6) returns 24
// greet('Alice') returns 'Hello Alice'

// ========================================
// SECTION E: Error Handling - SOLUTIONS
// ========================================

// Question 8: Try-Catch Scenarios - SOLUTION

// Calling a function that doesn't exist
try {
    nonExistentFunction();
} catch (error) {
    // Handle ReferenceError
}

// Parsing invalid JSON
try {
    JSON.parse('invalid json');
} catch (error) {
    // Handle SyntaxError
}

// Accessing property of null
try {
    let result = null.property;
} catch (error) {
    // Handle TypeError
}

// ========================================
// SECTION F: Debugging - SOLUTIONS
// ========================================

// Question 9: Type Checking Challenge - SOLUTION

// Predictions:
// typeof '5' + 2 → 'string2' (string concatenation)
// typeof (5 + '2') → 'string' (5 becomes '52')
// typeof Number('123') → 'number' (string converted to number)
// typeof Boolean('') → 'boolean' (empty string becomes false)
// typeof undefined → 'undefined'

// Question 10: Bug Hunting - SOLUTION
// Original problematic function has these issues:
// 1. Loop condition: i <= arr.length should be i < arr.length
// 2. No validation for arr parameter

// Fixed version:
function processData(arr) {
    // Add input validation
    if (!arr || !Array.isArray(arr)) {
        return [];
    }
    
    let result = [];
    // Fix loop condition: change <= to <
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}

// Issues fixed:
// - Prevents index out of bounds error
// - Handles null/undefined input
// - Validates input is actually an array