// ========================================
// 3. OBJECTS - KEY-VALUE PAIRS
// ========================================

// Object creation and property access
let person = {
  name: "John",
  isStudent: true,
  age: 25,
};

console.log(person);
console.log(person.name); // Dot notation
console.log(person["isStudent"]); // Bracket notation

// Modifying objects
person.age = 29; // Update property
person.city = "New York"; // Add new property

console.log(person);

// Object utility methods
let user = {
  name: "john",
  age: 25,
};

console.log(Object.keys(user)); // Get all keys
console.log(Object.values(user)); // Get all values
console.log(Object.entries(user)); // Get key-value pairs