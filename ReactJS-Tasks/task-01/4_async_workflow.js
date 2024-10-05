// 4) Create a simulation of a workflow where tasks 
// (e.g., fetching data, processing it, and logging the results) are done asynchronously. 
// Use setTimeout to simulate delays in these tasks, and ensure that even though 
// each task takes different times to complete, the program continues executing.

// Task 1: Simulate fetching data asynchronously
function fetchData() {
  console.log("Task 1: Fetching data...");
  setTimeout(() => {
    console.log("Task 1: Data fetched.");
  }, 2000); // 2-second delay to simulate data fetching
}

// Task 2: Simulate processing data asynchronously
function processData() {
  console.log("Task 2: Processing data...");
  setTimeout(() => {
    console.log("Task 2: Data processed.");
  }, 1000); // 1-second delay to simulate data processing
}

// Task 3: Simulate logging the processed data asynchronously
function logResults() {
  console.log("Task 3: Logging results...");
  setTimeout(() => {
    console.log("Task 3: Results logged.");
  }, 500); // 0.5-second delay to simulate logging
}

// Simulate workflow where tasks run asynchronously
function runAsyncWorkflow() {
  fetchData();   // Start Task 1 (2 seconds delay)
  processData(); // Start Task 2 (1 second delay)
  logResults();  // Start Task 3 (0.5 second delay)
  console.log("All tasks started. The program continues executing...");
}

// Start the asynchronous workflow
runAsyncWorkflow();
