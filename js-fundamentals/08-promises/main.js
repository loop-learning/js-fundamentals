// ========================================
// 8. PROMISES
// ========================================

// Promises - handling asynchronous operations
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task Completed");
  } else {
    reject("Something went wrong!");
  }
});

// Promise handling with then/catch
myPromise
  .then((result) => {
    console.log("Success: " + result);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// Promise with setTimeout - simulating delays
let delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded after 2 seconds!");
  }, 2000);
});

delayedPromise.then((data) => console.log(data));