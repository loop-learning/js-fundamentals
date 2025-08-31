// ========================================
// 2. ARRAYS - ORDERED COLLECTIONS
// ========================================

// Array basics - creating and accessing
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[1]); // Access by index

// Modifying arrays
fruits[1] = "Kiwi"; // Update element
fruits.push("Pineapple"); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
fruits.unshift("blue"); // Add to beginning

console.log(fruits);
console.log(fruits.length); // Array size

// Working with array methods
let colors = ["red", "green", "yellow"];
colors.push("Blue");
colors.pop();
colors.shift();
colors.unshift("blue");
console.log(colors);