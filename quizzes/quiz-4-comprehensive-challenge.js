// ========================================
// QUIZ 4: COMPREHENSIVE JAVASCRIPT CHALLENGE
// Mixed topics: Real-world scenarios combining all concepts
// ========================================

console.log("=== COMPREHENSIVE JAVASCRIPT CHALLENGE ===\n");

console.log("1. Student Management System");
console.log("   Create a student management system with:");
console.log("   a) Student object with: name, age, grades (array), isActive (boolean)");
console.log("   b) Function to add a grade to student");
console.log("   c) Function to calculate average grade");
console.log("   d) Function to determine if student is passing (average >= 70)");
console.log("   e) Use array methods and conditional logic");
console.log("   Test with: Student 'Alice', grades [85, 92, 78, 88]\n");

console.log("2. E-commerce Shopping Cart");
console.log("   Build a shopping cart system:");
console.log("   a) Product objects with: id, name, price, inStock");
console.log("   b) Cart array to store selected products");
console.log("   c) Functions for: addToCart, removeFromCart, calculateTotal");
console.log("   d) Apply 10% discount if total > $100");
console.log("   e) Handle out-of-stock scenarios");
console.log("   Test with products: laptop ($899), mouse ($25), keyboard ($75)\n");

console.log("3. Weather Data Processor");
console.log("   Create a weather data analyzer:");
console.log("   a) Array of temperature readings for a week");
console.log("   b) Functions to find: highest temp, lowest temp, average temp");
console.log("   c) Function to categorize days: 'Hot' (>30°C), 'Warm' (20-30°C), 'Cold' (<20°C)");
console.log("   d) Use loops, conditionals, and array methods");
console.log("   e) Handle invalid temperature data (null, undefined)");
console.log("   Test with: [22, 28, 31, 19, 25, 33, 27]\n");

console.log("4. User Authentication System");
console.log("   Build a login system with:");
console.log("   a) User database (array of user objects: username, password, role, isActive)");
console.log("   b) Login function that validates credentials");
console.log("   c) Password validation: min 8 chars, contains number and letter");
console.log("   d) Role-based access: 'admin', 'user', 'guest'");
console.log("   e) Account lockout after 3 failed attempts");
console.log("   f) Use string methods, objects, and error handling\n");

console.log("5. Async Data Fetcher Simulation");
console.log("   Create a data fetching system:");
console.log("   a) Function that simulates API call with random delays (1-3 seconds)");
console.log("   b) 30% chance of failure with error message");
console.log("   c) Retry mechanism (max 3 attempts)");
console.log("   d) Use Promises or async/await");
console.log("   e) Handle all success and error scenarios");
console.log("   f) Return structured response: { success: boolean, data: any, error: string }\n");

console.log("6. Task Management Application");
console.log("   Build a todo list manager:");
console.log("   a) Task objects: { id, title, description, completed, priority, dueDate }");
console.log("   b) Functions: addTask, completeTask, deleteTask, listTasks");
console.log("   c) Filter tasks by: completed status, priority ('high', 'medium', 'low')");
console.log("   d) Sort tasks by due date");
console.log("   e) Search tasks by title (case-insensitive)");
console.log("   f) Export tasks to formatted string");
console.log("   g) Use all array methods, string operations, and date handling\n");

console.log("7. Module Integration Challenge");
console.log("   Create a modular calculator system:");
console.log("   a) Create separate modules for: basic operations, advanced operations, utilities");
console.log("   b) Basic: add, subtract, multiply, divide");
console.log("   c) Advanced: power, sqrt, factorial");
console.log("   d) Utilities: formatResult, validateInput, history tracking");
console.log("   e) Main calculator that imports and uses all modules");
console.log("   f) Handle edge cases (division by zero, negative sqrt, etc.)");
console.log("   g) Show proper import/export syntax\n");

console.log("8. Error Handling and Debugging Scenario");
console.log("   Debug this problematic code:");
console.log("   async function processUserData(users) {");
console.log("       const results = [];");
console.log("       for(let user of users) {");
console.log("           const profile = await fetchProfile(user.id);");
console.log("           const settings = await fetchSettings(user.id);");
console.log("           results.push({");
console.log("               name: user.name.toUpperCase(),");
console.log("               email: user.email,");
console.log("               profile: profile.data,");
console.log("               theme: settings.preferences.theme");
console.log("           });");
console.log("       }");
console.log("       return results;");
console.log("   }");
console.log("   Identify potential issues and provide solutions\n");

console.log("=== CHALLENGE PROJECTS ===");
console.log("Choose one to implement:");
console.log("A) Personal Finance Tracker");
console.log("B) Library Book Management System");
console.log("C) Recipe Manager with Search");
console.log("D) Event Calendar Application\n");

console.log("=== END OF COMPREHENSIVE CHALLENGE ===");
console.log("This quiz tests integration of ALL JavaScript concepts!");
console.log("Attempt the projects to master real-world JavaScript development.");