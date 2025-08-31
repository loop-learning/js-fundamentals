// ========================================
// 10. ES6+ FEATURES - MODERN JAVASCRIPT
// ========================================

// Template literals - string interpolation
let product = "Laptop";
let price = 100;
console.log(`The ${product} costs $${price}`);

// Destructuring - extracting values from objects
const userObj = { name: "John", city: "New York" };
const { name, city } = userObj;
console.log(city);

// Array destructuring
const colorArray = ["red", "green", "blue"];
const [first, second] = colorArray;
console.log(second);

// Spread operator - expanding arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

// Default parameters
function greetWithDefault(name = "Guest") {
  console.log("hello " + name);
}
greetWithDefault("john");
greetWithDefault(); // Uses default value