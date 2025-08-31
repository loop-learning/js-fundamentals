// ========================================
// QUIZ 2: CONTROL FLOW AND FUNCTIONS
// Topics: Loops, Control Structures, Functions
// ========================================

// SECTION A: Loops
// ========================================

// Question 1: For Loop Practice
// Write for loops to:
// - Count from 1 to 10
// - Count backwards from 5 to 1  
// - Display only even numbers from 0 to 20

// Question 2: Array Iteration Methods
// Given: let cities = ['Tokyo', 'London', 'New York', 'Paris'];
// Write code to display all cities using:
// - Traditional for loop with index
// - For-of loop
// Which method is more readable and why?

// Question 3: While Loop Debug
// Fix this infinite loop by adding the missing code:
// let num = 1;
// while(num <= 5) {
//     console.log('Number: ' + num);
//     // What's missing here to prevent infinite loop?
// }

// ========================================
// SECTION B: Control Structures
// ========================================

// Question 4: Grade Classification System
// Create if-else-if statements for grade classification:
// Given: let score = 87;
// Grade ranges:
// - 90-100: Grade A
// - 80-89: Grade B  
// - 70-79: Grade C
// - 60-69: Grade D
// - Below 60: Grade F
// What grade does score = 87 receive?

// Question 5: Access Control Logic
// Create an access control system using logical operators:
// Given: let age = 17; let hasPermission = true; let hasID = false;
// Grant access if: (age >= 18) OR (age >= 16 AND hasPermission AND hasID)
// Should the person above get access? Explain why or why not.

// ========================================
// SECTION C: Functions
// ========================================

// Question 6: Function Creation Practice
// Create these functions:
// - calculateTax(amount, rate) - returns amount * rate / 100
// - greetUser(name, timeOfDay) - returns 'Good [timeOfDay], [name]!'
// Test both functions with sample values

// Question 7: Arrow Function Conversion
// Convert these traditional functions to arrow functions:
// - function square(num) { return num * num; }
// - function isPositive(num) { return num > 0; }
// Write both regular arrow function and concise versions

// Question 8: Array Processing Challenge
// Create a function 'findLargest(arr)' that:
// - Takes an array of numbers as parameter
// - Returns the largest number in the array
// - Handles empty array case appropriately
// Test with: [5, 23, 8, 15, 42, 7]

// Question 9: Calculator Function Challenge
// Build a calculator function that:
// - Takes three parameters: num1, num2, operation
// - Supports: 'add', 'subtract', 'multiply', 'divide'
// - Uses switch statement for operation selection
// - Handles division by zero error
// - Test with: calculator(10, 5, 'multiply')