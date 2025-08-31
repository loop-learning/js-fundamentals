// ========================================
// 6. CONTROL STRUCTURES - CONDITIONALS
// ========================================

// Simple if statement
let testScore = 85;
if (testScore < 50) {
  console.log("Student Failed");
} else {
  console.log("Student Passed");
}

// If-else statement
let voterAge = 17;
if (voterAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// If-else-if chain
let temp = 10;
if (temp > 35) {
  console.log("It's really hot");
} else if (temp > 25) {
  console.log("It's warm.");
} else {
  console.log("It's cool");
}

// Logical operators
let checkAge = 20;
let hadID = true;

// OR operator - either condition can be true
if (checkAge >= 18 || hadID) {
  console.log("Access granted");
}