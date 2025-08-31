// ========================================
// 7. FUNCTIONS - REUSABLE CODE BLOCKS
// ========================================

// Basic function declaration
function greetBasic() {
  console.log("Hello there!");
  console.log("Hi there!");
}

// Calling functions multiple times
greetBasic();
greetBasic();

// Functions with parameters
function greetUser(name) {
  console.log("My name is " + name + "!");
}

greetUser("John");
greetUser("Michael");
greetUser("Emmy");

// Functions with return values
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3));

// Arrow function without parameters
const greetArrow = () => {
  console.log("Hi, there!");
};
greetArrow();

// Arrow function with parameters
const multiplyArrow = (a, b) => {
  return a * b;
};
console.log(multiplyArrow(4, 5));

// Concise arrow function (implicit return)
const square = (num) => num * num;
console.log(square(8));