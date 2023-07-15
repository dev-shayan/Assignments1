var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Paris", "Tokyo", "Rome", "Greece", "Cairo"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
