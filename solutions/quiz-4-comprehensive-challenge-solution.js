// ========================================
// QUIZ 4 SOLUTIONS: COMPREHENSIVE JAVASCRIPT CHALLENGE
// Real-world scenarios combining all JavaScript concepts
// ========================================

// Challenge 1: Student Management System - SOLUTION

// Student object structure
function createStudent(name, age) {
    return {
        name: name,
        age: age,
        grades: [],
        isActive: true
    };
}

// Add grade to student
function addGrade(student, grade) {
    if (grade >= 0 && grade <= 100) {
        student.grades.push(grade);
        return true;
    }
    return false;
}

// Calculate average grade
function calculateAverage(student) {
    if (student.grades.length === 0) return 0;
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
}

// Check if student is passing
function isPassing(student) {
    return calculateAverage(student) >= 70;
}

// Test with Alice
const alice = createStudent('Alice', 20);
addGrade(alice, 85);
addGrade(alice, 92);
addGrade(alice, 78);
addGrade(alice, 88);
// Average: 85.75, Status: Passing

// Challenge 2: E-commerce Shopping Cart - SOLUTION

// Product definitions
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
        if (!product.inStock) return { success: false, message: 'Out of stock' };
        
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
        
        // 10% discount if total > $100
        const discount = subtotal > 100 ? subtotal * 0.1 : 0;
        return {
            subtotal: subtotal,
            discount: discount,
            total: subtotal - discount
        };
    }
}

// Challenge 3: Weather Data Analyzer - SOLUTION

const temperatures = [22, 28, 31, 19, 25, 33, 27];

function findHighestTemp(temps) {
    const validTemps = temps.filter(temp => temp !== null && temp !== undefined);
    return Math.max(...validTemps);
}

function findLowestTemp(temps) {
    const validTemps = temps.filter(temp => temp !== null && temp !== undefined);
    return Math.min(...validTemps);
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

// Challenge 4: Async Data Fetcher with Retry Logic - SOLUTION

class DataFetcher {
    constructor() {
        this.maxRetries = 3;
    }
    
    // Simulate API call with random delay and failure
    simulateApiCall() {
        return new Promise((resolve, reject) => {
            const delay = Math.random() * 2000 + 1000; // 1-3 seconds
            
            setTimeout(() => {
                if (Math.random() > 0.3) { // 70% success rate
                    resolve({ 
                        data: 'API data retrieved', 
                        timestamp: new Date().toISOString() 
                    });
                } else {
                    reject(new Error('Network error'));
                }
            }, delay);
        });
    }
    
    async fetchWithRetry() {
        let attempts = 0;
        
        while (attempts < this.maxRetries) {
            try {
                attempts++;
                const data = await this.simulateApiCall();
                return {
                    success: true,
                    data: data,
                    error: null,
                    attempts: attempts
                };
            } catch (error) {
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

// Challenge 5: Task Management Application - SOLUTION

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
            if (criteria.completed !== undefined && task.completed !== criteria.completed) {
                return false;
            }
            if (criteria.priority && task.priority !== criteria.priority) {
                return false;
            }
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

// Challenge 6: User Authentication System - SOLUTION

const userDatabase = [
    { username: 'admin', password: 'admin123', role: 'admin', isActive: true, loginAttempts: 0 },
    { username: 'user1', password: 'password123', role: 'user', isActive: true, loginAttempts: 0 }
];

class AuthSystem {
    constructor() {
        this.maxAttempts = 3;
    }
    
    validatePassword(password) {
        if (password.length < 8) {
            return { valid: false, message: 'Password must be at least 8 characters' };
        }
        if (!/\d/.test(password)) {
            return { valid: false, message: 'Password must contain at least one number' };
        }
        if (!/[a-zA-Z]/.test(password)) {
            return { valid: false, message: 'Password must contain at least one letter' };
        }
        return { valid: true, message: 'Valid password' };
    }
    
    login(username, password) {
        const user = userDatabase.find(u => u.username === username);
        
        if (!user) return { success: false, message: 'User not found' };
        if (!user.isActive) return { success: false, message: 'Account locked' };
        
        if (user.loginAttempts >= this.maxAttempts) {
            user.isActive = false;
            return { success: false, message: 'Account locked due to failed attempts' };
        }
        
        if (user.password === password) {
            user.loginAttempts = 0;
            return { 
                success: true, 
                message: 'Login successful', 
                user: { username: user.username, role: user.role } 
            };
        } else {
            user.loginAttempts++;
            return { 
                success: false, 
                message: `Invalid password. ${this.maxAttempts - user.loginAttempts} attempts remaining` 
            };
        }
    }
}

// Challenge 8: Error Handling and Debugging - SOLUTION

// Issues in original code:
// 1. No error handling for fetch operations
// 2. No null checks for user properties  
// 3. Assumes API responses have expected structure
// 4. Individual user failures stop entire process

// Fixed version:
async function processUserData(users) {
    if (!Array.isArray(users)) {
        throw new Error('Users must be an array');
    }
    
    const results = [];
    
    for(let user of users) {
        try {
            // Validate user object
            if (!user || !user.id || !user.name) {
                // Skip invalid users
                continue;
            }
            
            // Use Promise.allSettled for parallel requests with error handling
            const [profileResult, settingsResult] = await Promise.allSettled([
                fetchProfile(user.id),
                fetchSettings(user.id)
            ]);
            
            // Safely extract data with fallbacks
            const profileData = profileResult.status === 'fulfilled' 
                ? profileResult.value?.data || {} 
                : {};
            
            const theme = settingsResult.status === 'fulfilled' 
                ? settingsResult.value?.preferences?.theme || 'default'
                : 'default';
            
            results.push({
                name: user.name ? user.name.toUpperCase() : 'UNKNOWN',
                email: user.email || 'No email',
                profile: profileData,
                theme: theme
            });
            
        } catch (error) {
            // Log error but continue processing other users
            // Individual failures don't stop the entire process
        }
    }
    
    return results;
}