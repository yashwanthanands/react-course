//1) Create a JavaScript countdown timer that takes in a number of seconds 
//to count down from and a callback function that will be executed when the countdown ends.

function countdown(seconds, callback) {
  let interval = setInterval(() => {
    // Log the current number of seconds
    console.log(seconds);
    
    // Check if the countdown has reached zero
    if (seconds <= 0) {
      clearInterval(interval); // Stop the timer
      callback(); // Execute the callback function
    } else {
      seconds--; // Decrement the number of seconds
    }
  }, 1000); // Execute every second (1000 milliseconds)
}

// Example usage:
countdown(10, () => {
  console.log("Countdown complete!");
});