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