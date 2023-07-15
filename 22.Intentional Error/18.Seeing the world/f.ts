let placesToVisit = ["Paris", "Tokyo", "Rome", "Greece", "Cairo"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("Original Order:", placesToVisit);

// Sort the array to store it in alphabetical order
placesToVisit.sort();

// Print the array to show its order has been changed
console.log("Alphabetical Order:", placesToVisit);

// Sort the array to store it in reverse alphabetical order
placesToVisit.sort().reverse();

// Print the array to show its order has changed
console.log("Reverse Alphabetical Order:", placesToVisit);

