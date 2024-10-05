// 3) Create a simple simulation of a sequential workflow where each task depends 
// on the completion of the previous one. The tasks will be simulating basic operations, 
// like logging messages or simple calculations, that happen one after the other in a synchronous manner.

// Task 1: Logging a message
function task1() {
  console.log("Task 1: Starting the workflow...");
}

// Task 2: Simulating a simple addition
function task2() {
  const result = 5 + 3;
  console.log("Task 2: Performing addition (5 + 3) = " + result);
}

// Task 3: Simulating a multiplication
function task3() {
  const result = 4 * 2;
  console.log("Task 3: Performing multiplication (4 * 2) = " + result);
}

// Task 4: Logging final message
function task4() {
  console.log("Task 4: Workflow complete!");
}

// Function to simulate sequential workflow
function runWorkflow() {
  task1();
  task2();
  task3();
  task4();
}

// Run the workflow
runWorkflow();
