// ========================================
// QUIZ 2 SOLUTIONS: CONTROL FLOW AND FUNCTIONS
// Topics: Loops, Control Structures, Functions
// ========================================

// SECTION A: Loops - SOLUTIONS
// ========================================

// Question 1: For Loop Practice - SOLUTION

// Count from 1 to 10
for(let i = 1; i <= 10; i++) {
    // This will count: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// Count backwards from 5 to 1  
for(let i = 5; i >= 1; i--) {
    // This will count: 5, 4, 3, 2, 1
}

// Display only even numbers from 0 to 20
for(let i = 0; i <= 20; i += 2) {
    // This will show: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}

// Question 2: Array Iteration Methods - SOLUTION
let cities = ['Tokyo', 'London', 'New York', 'Paris'];

// Traditional for loop with index
for(let i = 0; i < cities.length; i++) {
    // Access each city: cities[i]
}

// For-of loop  
for(let city of cities) {
    // Directly access each city: city
}

// For-of is more readable because:
// - No need to manage index variable
// - No risk of index out of bounds
// - Cleaner, more intuitive syntax

// Question 3: While Loop Debug - SOLUTION
// Missing code: num++ to increment the counter
let num = 1;
while(num <= 5) {
    // Process the number
    num++; // This was missing - prevents infinite loop
}

// ========================================
// SECTION B: Control Structures - SOLUTIONS
// ========================================

// Question 4: Grade Classification System - SOLUTION
let score = 87;
let grade;

if(score >= 90) {
    grade = 'A';
} else if(score >= 80) {
    grade = 'B';  // score = 87 falls here
} else if(score >= 70) {
    grade = 'C';
} else if(score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
// Result: score = 87 receives Grade B

// Question 5: Access Control Logic - SOLUTION
let age = 17; 
let hasPermission = true; 
let hasID = false;

// Access condition: (age >= 18) OR (age >= 16 AND hasPermission AND hasID)
let hasAccess = (age >= 18) || (age >= 16 && hasPermission && hasID);

// Result: false
// Reason: Person is 17 (not >= 18) and lacks ID despite having permission
// Need ALL three: age >= 16 AND hasPermission AND hasID

// ========================================
// SECTION C: Functions - SOLUTIONS
// ========================================

// Question 6: Function Creation Practice - SOLUTION

function calculateTax(amount, rate) {
    return amount * rate / 100;
}

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

// Testing:
// calculateTax(100, 8.5) returns 8.5
// greetUser("Alice", "morning") returns "Good morning, Alice!"

// Question 7: Arrow Function Conversion - SOLUTION

// Traditional to Arrow Functions:

// Regular arrow function
const square = (num) => {
    return num * num;
};

// Concise arrow function  
const squareConcise = num => num * num;

// Regular arrow function
const isPositive = (num) => {
    return num > 0;
};

// Concise arrow function
const isPositiveConcise = num => num > 0;

// Question 8: Array Processing Challenge - SOLUTION
function findLargest(arr) {
    // Handle empty array case
    if(arr.length === 0) {
        return null; // or undefined, or throw error
    }
    
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Testing:
// findLargest([5, 23, 8, 15, 42, 7]) returns 42
// findLargest([]) returns null

// Question 9: Calculator Function Challenge - SOLUTION
function calculator(num1, num2, operation) {
    switch(operation.toLowerCase()) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if(num2 === 0) {
                return 'Error: Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operation';
    }
}

// Testing:
// calculator(10, 5, 'multiply') returns 50
// calculator(10, 0, 'divide') returns "Error: Cannot divide by zero"