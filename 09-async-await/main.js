// ========================================
// 9. ASYNC AWAIT
// ========================================

// Async/Await - modern promise handling
async function greetAsync() {
  return "Hello there!";
}

greetAsync().then((result) => console.log(result));

// Async function with await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded!");
    }, 2000);
  });
}

async function loadData() {
  console.log("Loading...");
  const result = await getData();
  console.log(result);
}

loadData();

// Async error handling
async function fetchDataWithError() {
  try {
    let response = await Promise.reject("Oops! Something went wrong.");
    console.log(response);
  } catch (error) {
    console.log("error: ", error);
  }
}

fetchDataWithError();