// ========================================
// QUIZ 1 SOLUTIONS: JAVASCRIPT BASICS
// Topics: Variables, Data Types, Arrays, Objects, Strings
// ========================================

// SECTION A: Variables and Data Types - SOLUTIONS
// ========================================

// Question 1: Variable Declaration Practice - SOLUTION
let studentName = "John Doe"; // Using let allows reassignment
const schoolId = "SCH001"; // Using const prevents reassignment

// studentName can be changed
studentName = "Jane Smith"; 

// schoolId cannot be changed - this would cause error:
// schoolId = "SCH002"; // TypeError: Assignment to constant variable

// typeof results:
// typeof 'Hello World' → "string"
// typeof 42 → "number" 
// typeof true → "boolean"
// typeof null → "object" (JavaScript quirk)
// typeof undefined → "undefined"

// Question 2: Fix the Error - SOLUTION
// Problem: const variables cannot be reassigned
// Solution: Use let if you need to change the value
let score = 85; // Use let instead of const
score = 90; // Now this works

// ========================================
// SECTION B: Arrays - SOLUTIONS
// ========================================

// Question 3: Array Operations - SOLUTION
let fruits = ['apple', 'banana', 'orange'];

// Step by step operations:
fruits.push('mango');        // ['apple', 'banana', 'orange', 'mango']
fruits.shift();              // ['banana', 'orange', 'mango'] 
fruits.unshift('grapes');    // ['grapes', 'banana', 'orange', 'mango']

// Final result: ['grapes', 'banana', 'orange', 'mango']
// Length: 4

// Question 4: Fix the Loop Bug - SOLUTION
// Problem: i <= colors.length causes index out of bounds
// Solution: Change <= to < 
let colors = ['red', 'green', 'blue'];
for(let i = 0; i < colors.length; i++) { // Fixed: <= changed to <
    // This now works correctly without undefined values
}

// ========================================
// SECTION C: Objects - SOLUTIONS
// ========================================

// Question 5: Object Creation and Manipulation - SOLUTION
let movie = {
    title: 'The Matrix',
    year: 1999,
    rating: 8.7,
    isWatched: false
};

// Access using dot notation
let movieTitle = movie.title; // 'The Matrix'

// Access using bracket notation
let movieYear = movie['year']; // 1999

// Update property
movie.isWatched = true;

// Add new property
movie.director = 'Wachowski';

// Final object has all properties including new director

// Question 6: Object Utility Methods - SOLUTION
let user = { name: 'John', age: 30, city: 'NYC' };

// Object.keys(user) returns: ['name', 'age', 'city']
// Object.values(user) returns: ['John', 30, 'NYC']
// Object.entries(user) returns: [['name','John'], ['age',30], ['city','NYC']]

// ========================================
// SECTION D: Strings - SOLUTIONS
// ========================================

// Question 7: String Method Practice - SOLUTION
let message = '  Hello JavaScript World!  ';

// Results:
// message.length → 26 (includes spaces)
// message.trim().toUpperCase() → "HELLO JAVASCRIPT WORLD!"
// message.includes('JavaScript') → true
// message.indexOf('World') → 19
// message.slice(7, 17) → "JavaScript"

// Question 8: String Validation Challenge - SOLUTION
let email = 'user@example.com';

// Individual checks:
let hasAtSymbol = email.includes('@');        // true
let endsDotCom = email.endsWith('.com');      // true  
let isLongEnough = email.length >= 5;        // true

// Combined validation:
let isValidEmail = hasAtSymbol && endsDotCom && isLongEnough; // true