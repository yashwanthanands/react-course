// 2) Implement a function performOperation that accepts two numbers 
// and a callback function to perform various operations (addition, subtraction, multiplication, division). 
// You need to:
// Implement functions for each operation (add, subtract, multiply, divide).
// Use a callback function to pass these operations to performOperation.
// Print the result of each operation using performOperation.

// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

// Function to perform an operation using a callback
function performOperation(a, b, operation) {
  return operation(a, b); // Execute the passed operation function
}

// Example usage of performOperation
const num1 = 10;
const num2 = 5;

// Perform and print each operation
console.log("Addition: " + performOperation(num1, num2, add));         // 15
console.log("Subtraction: " + performOperation(num1, num2, subtract)); // 5
console.log("Multiplication: " + performOperation(num1, num2, multiply)); // 50
console.log("Division: " + performOperation(num1, num2, divide));      // 2
