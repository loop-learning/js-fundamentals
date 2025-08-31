// ========================================
// QUIZ 4: COMPREHENSIVE JAVASCRIPT CHALLENGE
// Real-world scenarios combining all JavaScript concepts
// ========================================

// Challenge 1: Student Management System
// Build a complete student management system:
// - Create student objects with: name, age, grades (array), isActive (boolean)
// - Write function to add grades to a student
// - Write function to calculate average grade
// - Write function to determine if student is passing (average >= 70)
// - Use arrays, objects, functions, and conditional logic
// Test with student 'Alice' and grades [85, 92, 78, 88]

// Challenge 2: E-commerce Shopping Cart
// Create a shopping cart system:
// - Define product objects with: id, name, price, inStock
// - Build cart array to store selected products
// - Write functions: addToCart, removeFromCart, calculateTotal
// - Apply 10% discount if total exceeds $100
// - Handle out-of-stock scenarios with proper error messages
// Test with products: Laptop ($899), Mouse ($25), Keyboard ($75)

// Challenge 3: Weather Data Analyzer
// Process weekly temperature data:
// - Work with array of temperature readings: [22, 28, 31, 19, 25, 33, 27]
// - Write functions to find: highest temp, lowest temp, average temp
// - Categorize each day: 'Hot' (>30°C), 'Warm' (20-30°C), 'Cold' (<20°C)
// - Handle invalid data (null, undefined) appropriately
// - Use loops, conditionals, and array methods

// Challenge 4: Async Data Fetcher with Retry Logic
// Simulate real-world API interactions:
// - Create function that simulates API calls with random delays (1-3 seconds)
// - Implement 30% failure rate for realistic testing
// - Add retry mechanism (maximum 3 attempts)
// - Use Promises or async/await for asynchronous operations
// - Return structured response: { success: boolean, data: any, error: string }

// Challenge 5: Task Management Application
// Build a complete todo list system:
// - Task objects: { id, title, description, completed, priority, dueDate }
// - Implement functions: addTask, completeTask, deleteTask, listTasks
// - Filter tasks by completion status and priority levels
// - Add search functionality (case-insensitive title matching)
// - Sort tasks by due date
// - Export task list to formatted string

// Challenge 6: User Authentication System
// Create a login system with validation:
// - User database with objects: { username, password, role, isActive, loginAttempts }
// - Implement login function with credential validation
// - Password requirements: minimum 8 characters, contains numbers and letters
// - Role-based access control: 'admin', 'user', 'guest'
// - Account lockout after 3 failed login attempts
// - Use string methods, objects, error handling, and security practices

// Challenge 7: Module-Based Calculator System
// Design a modular calculator:
// - Create separate modules for basic operations (add, subtract, multiply, divide)
// - Advanced operations module (power, square root, factorial)
// - Utilities module (input validation, result formatting, calculation history)
// - Main calculator that imports and integrates all modules
// - Handle mathematical edge cases (division by zero, negative square roots)
// - Demonstrate proper ES6 import/export syntax

// Challenge 8: Error Handling and Debugging Scenario
// Debug and improve this problematic code:
// async function processUserData(users) {
//     const results = [];
//     for(let user of users) {
//         const profile = await fetchProfile(user.id);
//         const settings = await fetchSettings(user.id);
//         results.push({
//             name: user.name.toUpperCase(),
//             email: user.email,
//             profile: profile.data,
//             theme: settings.preferences.theme
//         });
//     }
//     return results;
// }
// Identify potential issues and implement comprehensive error handling