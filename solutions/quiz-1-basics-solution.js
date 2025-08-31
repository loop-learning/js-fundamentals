// ========================================
// QUIZ 1 SOLUTIONS: JAVASCRIPT BASICS
// Topics: Variables, Data Types, Arrays, Objects, Strings
// ========================================

console.log("=== QUIZ 1 SOLUTIONS ===\n");

// SECTION A: Variables and Data Types
console.log("SECTION A SOLUTIONS: VARIABLES AND DATA TYPES\n");

console.log("1. Variable Declaration and Types - SOLUTION:");
// a) Create a variable 'studentName' that can be reassigned
let studentName = "John Doe"; // Using 'let' allows reassignment
studentName = "Jane Smith"; // This works

// b) Create a constant 'schoolId' that cannot be reassigned  
const schoolId = "SCH001"; // Using 'const' prevents reassignment
// schoolId = "SCH002"; // This would cause an error

// c) typeof results:
console.log("typeof 'Hello World':", typeof "Hello World");     // "string"
console.log("typeof 42:", typeof 42);                           // "number"
console.log("typeof true:", typeof true);                       // "boolean"
console.log("typeof null:", typeof null);                       // "object" (JavaScript quirk)
console.log("typeof undefined:", typeof undefined);             // "undefined"
console.log();

console.log("2. Fix the Error - SOLUTION:");
console.log("The 'const score = 85; score = 90;' causes an error because:");
console.log("- const variables cannot be reassigned after declaration");
console.log("- let variables CAN be reassigned");
console.log("- Solution: Use 'let' if you need to reassign the variable");
let correctScore = 85;
correctScore = 90; // This works
console.log("Corrected score:", correctScore);
console.log();

// SECTION B: Arrays
console.log("SECTION B SOLUTIONS: ARRAYS\n");

console.log("3. Array Operations - SOLUTION:");
let fruits = ['apple', 'banana', 'orange'];
console.log("Initial array:", fruits);

// a) Add 'mango' to the end
fruits.push('mango');
console.log("After push('mango'):", fruits);

// b) Remove the first item
fruits.shift();
console.log("After shift():", fruits);

// c) Add 'grapes' to the beginning
fruits.unshift('grapes');
console.log("After unshift('grapes'):", fruits);

// d) Final array and length
console.log("Final array:", fruits);
console.log("Final length:", fruits.length);
console.log();

console.log("4. Fix the Loop - SOLUTION:");
console.log("Problem: i <= colors.length causes index out of bounds");
console.log("Solution: Change <= to <");
let colors = ['red', 'green', 'blue'];
console.log("Fixed loop:");
for(let i = 0; i < colors.length; i++) { // Changed <= to <
    console.log("Color " + i + ":", colors[i]);
}
console.log();

// SECTION C: Objects
console.log("SECTION C SOLUTIONS: OBJECTS\n");

console.log("5. Object Creation and Access - SOLUTION:");
// Create movie object
let movie = {
    title: 'The Matrix',
    year: 1999,
    rating: 8.7,
    isWatched: false
};

// a) Access title using dot notation
console.log("Title (dot notation):", movie.title);

// b) Access year using bracket notation
console.log("Year (bracket notation):", movie['year']);

// c) Update isWatched to true
movie.isWatched = true;
console.log("Updated isWatched:", movie.isWatched);

// d) Add director property
movie.director = 'Wachowski';
console.log("Complete movie object:", movie);
console.log();

console.log("6. Object Methods - SOLUTION:");
let user = { name: 'John', age: 30, city: 'NYC' };
console.log("Object.keys(user):", Object.keys(user));           // ['name', 'age', 'city']
console.log("Object.values(user):", Object.values(user));       // ['John', 30, 'NYC']
console.log("Object.entries(user):", Object.entries(user));     // [['name','John'], ['age',30], ['city','NYC']]
console.log();

// SECTION D: Strings
console.log("SECTION D SOLUTIONS: STRINGS\n");

console.log("7. String Methods - SOLUTION:");
let message = '  Hello JavaScript World!  ';
console.log("Original:", `"${message}"`);
console.log("a) message.length:", message.length);                    // 26 (includes spaces)
console.log("b) message.trim().toUpperCase():", message.trim().toUpperCase());  // "HELLO JAVASCRIPT WORLD!"
console.log("c) message.includes('JavaScript'):", message.includes('JavaScript')); // true
console.log("d) message.indexOf('World'):", message.indexOf('World')); // 19
console.log("e) message.slice(7, 17):", message.slice(7, 17));        // "JavaScript"
console.log();

console.log("8. String Validation - SOLUTION:");
let email = 'user@example.com';
console.log("Email to validate:", email);

// a) Check if it contains '@' symbol
let hasAt = email.includes('@');
console.log("Contains '@':", hasAt);

// b) Check if it ends with '.com'
let endsDotCom = email.endsWith('.com');
console.log("Ends with '.com':", endsDotCom);

// c) Check if it's at least 5 characters long
let isLongEnough = email.length >= 5;
console.log("At least 5 characters:", isLongEnough);

// All-in-one validation
let isValidEmail = hasAt && endsDotCom && isLongEnough;
console.log("Is valid email:", isValidEmail);

console.log("\n=== END OF QUIZ 1 SOLUTIONS ===");