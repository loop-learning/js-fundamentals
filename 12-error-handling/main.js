// ========================================
// 12. ERROR HANDLING
// ========================================

// Try-catch for synchronous errors
try {
  let result = 10 / 0; // This works in JS (returns Infinity)
  console.log(result);
} catch (error) {
  console.log("Something went wrong", error);
}

// Catching function call errors
try {
  helloWorld(); // This function doesn't exist
} catch (error) {
  console.log("Error is: ", error);
}

// Real-world async error handling
async function fetchData() {
  try {
    let response = await fetch("http://invalid-url.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetching failed: ", error.message);
  }
}