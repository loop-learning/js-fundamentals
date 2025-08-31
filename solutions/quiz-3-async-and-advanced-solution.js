// ========================================
// QUIZ 3 SOLUTIONS: ASYNC PROGRAMMING AND ADVANCED FEATURES
// Topics: Promises, Async/Await, ES6+ Features, Modules, Error Handling, Debugging
// ========================================

console.log("=== QUIZ 3 SOLUTIONS ===\n");

// SECTION A: Promises
console.log("SECTION A SOLUTIONS: PROMISES\n");

console.log("1. Promise Creation - SOLUTION:");
function createDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 70% chance to resolve, 30% chance to reject
            if(Math.random() > 0.3) {
                resolve('Data loaded successfully');
            } else {
                reject('Loading failed');
            }
        }, 1000);
    });
}

// Handle both cases
createDataPromise()
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

console.log();

console.log("2. Promise Chain Analysis - SOLUTION:");
console.log("The code will output: 'Start -> Step 1 -> Step 2'");
console.log("Demonstrating the chain:");

Promise.resolve('Start')
    .then(result => result + ' -> Step 1')
    .then(result => result + ' -> Step 2')
    .then(result => console.log("Chain result:", result));

console.log();

// SECTION B: Async/Await
console.log("SECTION B SOLUTIONS: ASYNC/AWAIT\n");

console.log("3. Async Function Creation - SOLUTION:");
console.log("Converted to async/await:");

async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

console.log("Key changes:");
console.log("- Added 'async' before function");
console.log("- Used 'await' instead of .then()");
console.log("- Used try-catch instead of .catch()");
console.log();

console.log("4. Error Handling with Async/Await - SOLUTION:");

async function simulateApiCall() {
    // Simulate API call that might fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve({ data: 'API data received', status: 200 });
            } else {
                reject(new Error('API call failed'));
            }
        }, 1000);
    });
}

async function handleApiCall() {
    try {
        console.log("Making API call...");
        const result = await simulateApiCall();
        return `Success: ${result.data}`;
    } catch (error) {
        return `Failure: ${error.message}`;
    }
}

// Test the function
handleApiCall().then(result => console.log(result));
console.log();

// SECTION C: ES6+ Features
console.log("SECTION C SOLUTIONS: ES6+ FEATURES\n");

console.log("5. Template Literals and Destructuring - SOLUTION:");
let user = { name: 'Sarah', age: 28, city: 'Boston', job: 'Developer' };

// a) Destructuring
const { name, age, city } = user;
console.log("Destructured values:", { name, age, city });

// b) Template literal
const introduction = `Hi, I'm ${name}, ${age} years old from ${city}`;
console.log("Introduction:", introduction);

// c) Destructuring with default values
const { name: userName, country = 'USA', salary = 'Not specified' } = user;
console.log("With defaults:", { userName, country, salary });
console.log();

console.log("6. Spread Operator and Default Parameters - SOLUTION:");

// a) Combining arrays with spread operator
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

// b) Function with default parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// c) Testing the function
console.log("greet():", greet());                          // "Hello, Guest!"
console.log("greet('John'):", greet('John'));              // "Hello, John!"
console.log("greet('Jane', 'Hi'):", greet('Jane', 'Hi')); // "Hi, Jane!"
console.log();

// SECTION D: Modules and Error Handling
console.log("SECTION D SOLUTIONS: MODULES AND ERROR HANDLING\n");

console.log("7. Module Understanding - SOLUTION:");
console.log("Import statements for main.js:");
console.log();
console.log("// Import named exports from math.js");
console.log("import { add, multiply } from './math.js';");
console.log();
console.log("// Import default export from greet.js");
console.log("import greet from './greet.js';");
console.log();
console.log("// Usage:");
console.log("console.log(add(5, 3));        // 8");
console.log("console.log(multiply(4, 6));   // 24");
console.log("console.log(greet('Alice'));   // 'Hello Alice'");
console.log();

console.log("8. Error Handling Scenarios - SOLUTION:");

// a) Calling a function that doesn't exist
console.log("a) Handling non-existent function:");
try {
    nonExistentFunction();
} catch (error) {
    console.log("Caught error:", error.message);
}

// b) Parsing invalid JSON
console.log("\nb) Handling invalid JSON:");
try {
    JSON.parse('invalid json');
} catch (error) {
    console.log("JSON parse error:", error.message);
}

// c) Accessing property of null
console.log("\nc) Handling null property access:");
try {
    console.log(null.property);
} catch (error) {
    console.log("Null access error:", error.message);
}
console.log();

// SECTION E: Debugging
console.log("SECTION E SOLUTIONS: DEBUGGING\n");

console.log("9. Type Checking and Conversion - SOLUTION:");
console.log("a) typeof '5' + 2");
console.log("   Result: 'string2' (string concatenation)");
console.log("   typeof result: 'string'");

console.log("\nb) typeof (5 + '2')");
console.log("   Result: 'string' (5 becomes '52')");

console.log("\nc) typeof Number('123')");
console.log("   Result: 'number' (string converted to number)");

console.log("\nd) typeof Boolean('')");
console.log("   Result: 'boolean' (empty string converts to false)");

console.log("\ne) typeof undefined");
console.log("   Result: 'undefined'");

// Demonstrating actual results:
console.log("\nActual demonstrations:");
console.log("typeof '5' + 2 =", typeof '5' + 2);
console.log("typeof (5 + '2') =", typeof (5 + '2'));
console.log("typeof Number('123') =", typeof Number('123'));
console.log("typeof Boolean('') =", typeof Boolean(''));
console.log("typeof undefined =", typeof undefined);
console.log();

console.log("10. Debugging Challenge - SOLUTION:");
console.log("Bugs found in the code:");
console.log("1. Loop condition: i <= arr.length should be i < arr.length");
console.log("2. No null check for arr parameter");
console.log();

console.log("Fixed function:");
function processData(arr) {
    // Add null/undefined check
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

// Test the fixed function
console.log("Testing fixed function:");
console.log("processData([5, 15, 8, 20]):", processData([5, 15, 8, 20])); // [30, 40]
console.log("processData([]):", processData([]));                          // []
console.log("processData(null):", processData(null));                      // []

console.log("\n=== END OF QUIZ 3 SOLUTIONS ===");