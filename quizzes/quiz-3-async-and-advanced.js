// ========================================
// QUIZ 3: ASYNC PROGRAMMING AND ADVANCED FEATURES
// Topics: Promises, Async/Await, ES6+ Features, Modules, Error Handling, Debugging
// ========================================

console.log("=== ASYNC PROGRAMMING AND ADVANCED FEATURES QUIZ ===\n");

// SECTION A: Promises (Questions 1-2)
console.log("SECTION A: PROMISES\n");

console.log("1. Promise Creation");
console.log("   Create a promise that:");
console.log("   - Resolves with 'Data loaded successfully' after 1 second");
console.log("   - Has a random chance to reject with 'Loading failed'");
console.log("   - Handle both success and error cases with .then() and .catch()\n");

console.log("2. Promise Chain Analysis");
console.log("   What will this code output?");
console.log("   Promise.resolve('Start')");
console.log("     .then(result => result + ' -> Step 1')");
console.log("     .then(result => result + ' -> Step 2')");
console.log("     .then(result => console.log(result));");
console.log("   Predict the final output\n");

// SECTION B: Async/Await (Questions 3-4)
console.log("SECTION B: ASYNC/AWAIT\n");

console.log("3. Async Function Creation");
console.log("   Convert this promise-based code to async/await:");
console.log("   function fetchUserData() {");
console.log("     return fetch('https://api.example.com/user')");
console.log("       .then(response => response.json())");
console.log("       .then(data => console.log(data))");
console.log("       .catch(error => console.log('Error:', error));");
console.log("   }\n");

console.log("4. Error Handling with Async/Await");
console.log("   Write an async function that:");
console.log("   - Simulates an API call that might fail");
console.log("   - Uses try-catch for error handling");
console.log("   - Returns different messages for success and failure\n");

// SECTION C: ES6+ Features (Questions 5-6)
console.log("SECTION C: ES6+ FEATURES\n");

console.log("5. Template Literals and Destructuring");
console.log("   let user = { name: 'Sarah', age: 28, city: 'Boston', job: 'Developer' };");
console.log("   a) Use destructuring to extract name, age, and city");
console.log("   b) Use template literal to create: 'Hi, I'm Sarah, 28 years old from Boston'");
console.log("   c) Destructure with default values for missing properties\n");

console.log("6. Spread Operator and Default Parameters");
console.log("   a) Combine these arrays: [1, 2] and [3, 4, 5] using spread operator");
console.log("   b) Create a function greet(name = 'Guest', greeting = 'Hello') using default parameters");
console.log("   c) Test the function with: greet(), greet('John'), greet('Jane', 'Hi')\n");

// SECTION D: Modules and Error Handling (Questions 7-8)
console.log("SECTION D: MODULES AND ERROR HANDLING\n");

console.log("7. Module Understanding");
console.log("   Given these module files:");
console.log("   // math.js");
console.log("   export const add = (a, b) => a + b;");
console.log("   export const multiply = (a, b) => a * b;");
console.log("   ");
console.log("   // greet.js");
console.log("   const greet = (name) => `Hello ${name}`;");
console.log("   export default greet;");
console.log("   ");
console.log("   Write the import statements to use both modules in main.js\n");

console.log("8. Error Handling Scenarios");
console.log("   Write try-catch blocks for these scenarios:");
console.log("   a) Calling a function that doesn't exist");
console.log("   b) Parsing invalid JSON: JSON.parse('invalid json')");
console.log("   c) Accessing property of null: null.property");
console.log("   Handle each error appropriately\n");

// SECTION E: Debugging (Questions 9-10)
console.log("SECTION E: DEBUGGING\n");

console.log("9. Type Checking and Conversion");
console.log("   Predict the typeof and value for:");
console.log("   a) typeof '5' + 2");
console.log("   b) typeof (5 + '2')");
console.log("   c) typeof Number('123')");
console.log("   d) typeof Boolean('')");
console.log("   e) typeof undefined\n");

console.log("10. Debugging Challenge");
console.log("    Find and fix the bugs in this code:");
console.log("    function processData(arr) {");
console.log("        let result = [];");
console.log("        for(let i = 0; i <= arr.length; i++) {");
console.log("            if(arr[i] > 10) {");
console.log("                result.push(arr[i] * 2);");
console.log("            }");
console.log("        }");
console.log("        return result;");
console.log("    }");
console.log("    What's wrong and how do you fix it?\n");

console.log("=== END OF QUIZ 3 ===");
console.log("Total: 10 questions covering Promises, Async/Await, ES6+, Modules, Error Handling, and Debugging");
console.log("Check your answers in the solutions file!");