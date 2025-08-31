// ========================================
// QUIZ 4 SOLUTIONS: COMPREHENSIVE JAVASCRIPT CHALLENGE
// Mixed topics: Real-world scenarios combining all concepts
// ========================================

console.log("=== COMPREHENSIVE JAVASCRIPT CHALLENGE SOLUTIONS ===\n");

console.log("1. Student Management System - SOLUTION:");

// Student object constructor/class approach
function createStudent(name, age) {
    return {
        name: name,
        age: age,
        grades: [],
        isActive: true
    };
}

// Functions for student management
function addGrade(student, grade) {
    if (grade >= 0 && grade <= 100) {
        student.grades.push(grade);
        return true;
    }
    return false;
}

function calculateAverage(student) {
    if (student.grades.length === 0) return 0;
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
}

function isPassing(student) {
    return calculateAverage(student) >= 70;
}

// Test with Alice
const alice = createStudent('Alice', 20);
addGrade(alice, 85);
addGrade(alice, 92);
addGrade(alice, 78);
addGrade(alice, 88);

console.log("Student:", alice.name);
console.log("Grades:", alice.grades);
console.log("Average:", calculateAverage(alice).toFixed(1));
console.log("Is passing:", isPassing(alice));
console.log();

console.log("2. E-commerce Shopping Cart - SOLUTION:");

// Product objects
const products = [
    { id: 1, name: 'Laptop', price: 899, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: true },
    { id: 3, name: 'Keyboard', price: 75, inStock: true }
];

// Shopping cart system
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return { success: false, message: 'Product not found' };
        if (!product.inStock) return { success: false, message: 'Product out of stock' };
        
        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }
        return { success: true, message: 'Added to cart' };
    }
    
    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }
    
    calculateTotal() {
        const subtotal = this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        
        // Apply 10% discount if total > $100
        const discount = subtotal > 100 ? subtotal * 0.1 : 0;
        return {
            subtotal: subtotal,
            discount: discount,
            total: subtotal - discount
        };
    }
}

// Test the shopping cart
const cart = new ShoppingCart();
console.log("Adding laptop:", cart.addToCart(1));
console.log("Adding mouse:", cart.addToCart(2));
console.log("Adding keyboard:", cart.addToCart(3));

const totals = cart.calculateTotal();
console.log("Cart totals:", totals);
console.log();

console.log("3. Weather Data Processor - SOLUTION:");

const temperatures = [22, 28, 31, 19, 25, 33, 27];

// Weather analysis functions
function findHighestTemp(temps) {
    return Math.max(...temps.filter(temp => temp !== null && temp !== undefined));
}

function findLowestTemp(temps) {
    return Math.min(...temps.filter(temp => temp !== null && temp !== undefined));
}

function calculateAverageTemp(temps) {
    const validTemps = temps.filter(temp => temp !== null && temp !== undefined);
    return validTemps.reduce((sum, temp) => sum + temp, 0) / validTemps.length;
}

function categorizeTemperatures(temps) {
    return temps.map((temp, index) => {
        if (temp === null || temp === undefined) {
            return { day: index + 1, temp: temp, category: 'Invalid data' };
        }
        
        let category;
        if (temp > 30) category = 'Hot';
        else if (temp >= 20) category = 'Warm';
        else category = 'Cold';
        
        return { day: index + 1, temp: temp, category: category };
    });
}

console.log("Temperature data:", temperatures);
console.log("Highest temperature:", findHighestTemp(temperatures) + "°C");
console.log("Lowest temperature:", findLowestTemp(temperatures) + "°C");
console.log("Average temperature:", calculateAverageTemp(temperatures).toFixed(1) + "°C");
console.log("Daily categories:", categorizeTemperatures(temperatures));
console.log();

console.log("4. User Authentication System - SOLUTION:");

// User database
const userDatabase = [
    { username: 'admin', password: 'admin123', role: 'admin', isActive: true, loginAttempts: 0 },
    { username: 'user1', password: 'password123', role: 'user', isActive: true, loginAttempts: 0 },
    { username: 'guest', password: 'guest123', role: 'guest', isActive: true, loginAttempts: 0 }
];

// Authentication system
class AuthSystem {
    constructor() {
        this.maxAttempts = 3;
    }
    
    validatePassword(password) {
        if (password.length < 8) return { valid: false, message: 'Password must be at least 8 characters' };
        if (!/\d/.test(password)) return { valid: false, message: 'Password must contain at least one number' };
        if (!/[a-zA-Z]/.test(password)) return { valid: false, message: 'Password must contain at least one letter' };
        return { valid: true, message: 'Password is valid' };
    }
    
    login(username, password) {
        const user = userDatabase.find(u => u.username === username);
        
        if (!user) return { success: false, message: 'User not found' };
        if (!user.isActive) return { success: false, message: 'Account is locked' };
        if (user.loginAttempts >= this.maxAttempts) {
            user.isActive = false;
            return { success: false, message: 'Account locked due to too many failed attempts' };
        }
        
        if (user.password === password) {
            user.loginAttempts = 0; // Reset on successful login
            return { 
                success: true, 
                message: 'Login successful', 
                user: { username: user.username, role: user.role } 
            };
        } else {
            user.loginAttempts++;
            return { 
                success: false, 
                message: `Invalid password. ${this.maxAttempts - user.loginAttempts} attempts remaining.` 
            };
        }
    }
    
    checkAccess(user, requiredRole) {
        const roleHierarchy = { admin: 3, user: 2, guest: 1 };
        return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
    }
}

// Test authentication
const auth = new AuthSystem();
console.log("Password validation:", auth.validatePassword('weak'));
console.log("Password validation:", auth.validatePassword('strong123'));
console.log("Login test:", auth.login('admin', 'admin123'));
console.log();

console.log("5. Async Data Fetcher Simulation - SOLUTION:");

class DataFetcher {
    constructor() {
        this.maxRetries = 3;
    }
    
    // Simulate API call with random delay and failure chance
    simulateApiCall() {
        return new Promise((resolve, reject) => {
            const delay = Math.random() * 2000 + 1000; // 1-3 seconds
            
            setTimeout(() => {
                if (Math.random() > 0.3) { // 70% success rate
                    resolve({ data: 'API data retrieved successfully', timestamp: new Date().toISOString() });
                } else {
                    reject(new Error('Network error occurred'));
                }
            }, delay);
        });
    }
    
    async fetchWithRetry() {
        let attempts = 0;
        
        while (attempts < this.maxRetries) {
            try {
                attempts++;
                console.log(`Attempt ${attempts}/${this.maxRetries}...`);
                
                const data = await this.simulateApiCall();
                return {
                    success: true,
                    data: data,
                    error: null,
                    attempts: attempts
                };
            } catch (error) {
                console.log(`Attempt ${attempts} failed: ${error.message}`);
                
                if (attempts >= this.maxRetries) {
                    return {
                        success: false,
                        data: null,
                        error: `Failed after ${attempts} attempts: ${error.message}`,
                        attempts: attempts
                    };
                }
                
                // Wait before retry
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }
}

// Test data fetcher
const fetcher = new DataFetcher();
console.log("Testing data fetcher with retry mechanism:");
fetcher.fetchWithRetry().then(result => {
    console.log("Final result:", result);
});
console.log();

console.log("6. Task Management Application - SOLUTION:");

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    
    addTask(title, description = '', priority = 'medium', dueDate = null) {
        const task = {
            id: this.nextId++,
            title: title,
            description: description,
            completed: false,
            priority: priority,
            dueDate: dueDate,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(task);
        return task;
    }
    
    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            task.completedAt = new Date().toISOString();
            return true;
        }
        return false;
    }
    
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }
    
    filterTasks(criteria) {
        return this.tasks.filter(task => {
            if (criteria.completed !== undefined && task.completed !== criteria.completed) return false;
            if (criteria.priority && task.priority !== criteria.priority) return false;
            return true;
        });
    }
    
    searchTasks(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.tasks.filter(task => 
            task.title.toLowerCase().includes(term) || 
            task.description.toLowerCase().includes(term)
        );
    }
    
    sortTasksByDueDate() {
        return [...this.tasks].sort((a, b) => {
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    }
    
    exportTasks() {
        return this.tasks.map(task => 
            `[${task.completed ? 'X' : ' '}] ${task.title} (${task.priority}) - ${task.description}`
        ).join('\n');
    }
}

// Test task manager
const taskManager = new TaskManager();
taskManager.addTask('Learn JavaScript', 'Complete JS fundamentals course', 'high', '2024-12-31');
taskManager.addTask('Build portfolio', 'Create personal website', 'medium', '2024-11-15');
taskManager.addTask('Practice coding', 'Solve daily coding challenges', 'low');

console.log("All tasks:");
console.log(taskManager.exportTasks());

console.log("\nHigh priority tasks:");
console.log(taskManager.filterTasks({ priority: 'high' }));
console.log();

console.log("7. Module Integration Challenge - SOLUTION:");
console.log("Module structure for calculator system:");
console.log();

console.log("// basic-operations.js");
console.log("export const add = (a, b) => a + b;");
console.log("export const subtract = (a, b) => a - b;");
console.log("export const multiply = (a, b) => a * b;");
console.log("export const divide = (a, b) => {");
console.log("    if (b === 0) throw new Error('Division by zero');");
console.log("    return a / b;");
console.log("};");
console.log();

console.log("// advanced-operations.js");
console.log("export const power = (base, exponent) => Math.pow(base, exponent);");
console.log("export const sqrt = (num) => {");
console.log("    if (num < 0) throw new Error('Cannot calculate square root of negative number');");
console.log("    return Math.sqrt(num);");
console.log("};");
console.log("export const factorial = (n) => {");
console.log("    if (n < 0) throw new Error('Factorial of negative number not defined');");
console.log("    if (n === 0 || n === 1) return 1;");
console.log("    return n * factorial(n - 1);");
console.log("};");
console.log();

console.log("// calculator.js (main)");
console.log("import { add, subtract, multiply, divide } from './basic-operations.js';");
console.log("import { power, sqrt, factorial } from './advanced-operations.js';");
console.log("import { formatResult, validateInput, addToHistory } from './utilities.js';");
console.log();

console.log("8. Error Handling and Debugging Scenario - SOLUTION:");
console.log("Issues identified in the code:");
console.log("1. No error handling for fetch operations");
console.log("2. No null checks for user object properties");
console.log("3. Assumes all API responses have expected structure");
console.log("4. No handling for individual user failures");
console.log();

console.log("Fixed version:");
console.log(`
async function processUserData(users) {
    if (!Array.isArray(users)) {
        throw new Error('Users must be an array');
    }
    
    const results = [];
    
    for(let user of users) {
        try {
            // Validate user object
            if (!user || !user.id || !user.name) {
                console.warn('Skipping invalid user:', user);
                continue;
            }
            
            // Fetch with error handling
            const [profile, settings] = await Promise.allSettled([
                fetchProfile(user.id),
                fetchSettings(user.id)
            ]);
            
            // Handle profile response
            const profileData = profile.status === 'fulfilled' 
                ? profile.value?.data || {} 
                : {};
            
            // Handle settings response with safe property access
            const theme = settings.status === 'fulfilled' 
                ? settings.value?.preferences?.theme || 'default'
                : 'default';
            
            results.push({
                name: user.name ? user.name.toUpperCase() : 'UNKNOWN',
                email: user.email || 'No email provided',
                profile: profileData,
                theme: theme
            });
            
        } catch (error) {
            console.error('Error processing user ${user.id}:', error);
            // Continue processing other users
        }
    }
    
    return results;
}
`);

console.log("\n=== END OF COMPREHENSIVE CHALLENGE SOLUTIONS ===");
console.log("These solutions demonstrate integration of all JavaScript concepts!");
console.log("Practice implementing the challenge projects to master real-world development.");