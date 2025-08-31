// ========================================
// QUIZ 2 SOLUTIONS: CONTROL FLOW AND FUNCTIONS
// Topics: Loops, Control Structures, Functions
// ========================================

console.log("=== QUIZ 2 SOLUTIONS ===\n");

// SECTION A: Loops
console.log("SECTION A SOLUTIONS: LOOPS\n");

console.log("1. For Loop Challenges - SOLUTION:");
// a) Count from 1 to 10
console.log("a) Count 1 to 10:");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// b) Count backwards from 5 to 1
console.log("\nb) Count backwards 5 to 1:");
for(let i = 5; i >= 1; i--) {
    console.log(i);
}

// c) Display only even numbers from 0 to 20
console.log("\nc) Even numbers 0 to 20:");
for(let i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log();

console.log("2. Array Iteration - SOLUTION:");
let cities = ['Tokyo', 'London', 'New York', 'Paris'];

// a) Traditional for loop
console.log("a) Traditional for loop:");
for(let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// b) For-of loop
console.log("\nb) For-of loop:");
for(let city of cities) {
    console.log(city);
}

console.log("\nc) For-of is more readable because:");
console.log("- No need to manage index variable");
console.log("- No risk of index out of bounds errors");
console.log("- Cleaner, more intuitive syntax");
console.log();

console.log("3. While Loop Practice - SOLUTION:");
console.log("The missing code is: num++");
console.log("Fixed while loop:");
let num = 1;
while(num <= 5) {
    console.log('Number: ' + num);
    num++; // This was missing - prevents infinite loop
}
console.log();

// SECTION B: Control Structures
console.log("SECTION B SOLUTIONS: CONTROL STRUCTURES\n");

console.log("4. Grade Calculator - SOLUTION:");
let score = 87;
let grade;

if(score >= 90) {
    grade = 'A';
} else if(score >= 80) {
    grade = 'B';
} else if(score >= 70) {
    grade = 'C';
} else if(score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`Score ${score} gets grade: ${grade}`);
console.log();

console.log("5. Access Control System - SOLUTION:");
let age = 17;
let hasPermission = true;
let hasID = false;

// Condition: (age >= 18) OR (age >= 16 AND hasPermission AND hasID)
let hasAccess = (age >= 18) || (age >= 16 && hasPermission && hasID);

console.log("Person details: age=17, hasPermission=true, hasID=false");
console.log("Access granted:", hasAccess); // false - needs ID even with permission
console.log("Reason: Person is under 18 and doesn't have ID despite having permission");
console.log();

// SECTION C: Functions
console.log("SECTION C SOLUTIONS: FUNCTIONS\n");

console.log("6. Function Creation - SOLUTION:");

// a) calculateTax function
function calculateTax(amount, rate) {
    return amount * rate / 100;
}

// b) greetUser function
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

// c) Test both functions
console.log("Tax on $100 at 8.5%:", calculateTax(100, 8.5));
console.log("Greeting:", greetUser("Alice", "morning"));
console.log();

console.log("7. Arrow Function Conversion - SOLUTION:");

// Original functions converted to arrow functions

// a) square function
console.log("a) Square function:");
console.log("Regular arrow: const square = (num) => { return num * num; }");
console.log("Concise arrow: const square = num => num * num;");
const square = num => num * num;
console.log("Test square(5):", square(5));

// b) isPositive function  
console.log("\nb) isPositive function:");
console.log("Regular arrow: const isPositive = (num) => { return num > 0; }");
console.log("Concise arrow: const isPositive = num => num > 0;");
const isPositive = num => num > 0;
console.log("Test isPositive(-3):", isPositive(-3));
console.log();

console.log("8. Function Challenge - SOLUTION:");
function findLargest(arr) {
    // Handle empty array case
    if(arr.length === 0) {
        return null; // or throw an error
    }
    
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Test with the given array
let testArray = [5, 23, 8, 15, 42, 7];
console.log("Array:", testArray);
console.log("Largest number:", findLargest(testArray));
console.log("Empty array test:", findLargest([]));
console.log();

// BONUS SECTION
console.log("BONUS SOLUTION: MINI CALCULATOR\n");

function calculator(num1, num2, operation) {
    let result;
    
    switch(operation.toLowerCase()) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 === 0) {
                return 'Error: Cannot divide by zero';
            }
            result = num1 / num2;
            break;
        default:
            return 'Error: Invalid operation';
    }
    
    return result;
}

// Test the calculator
console.log("Calculator tests:");
console.log("calculator(10, 5, 'multiply'):", calculator(10, 5, 'multiply'));
console.log("calculator(10, 0, 'divide'):", calculator(10, 0, 'divide'));
console.log("calculator(15, 3, 'add'):", calculator(15, 3, 'add'));

console.log("\n=== END OF QUIZ 2 SOLUTIONS ===");