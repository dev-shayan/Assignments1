// INITIALIZING ARRAY AND VARIABLE 
var guestList = ["Ahmed", "John", "Zia"];
var invitation = "Join me for a delightful dinner on 13/07/2023 at 9:00 PM . Great food, wonderful company. Your presence would be wonderful.RSVP.\nWarm Reqards,\nSHAYAN kHAN\n";
// Print the name of the guest who can't make it
var guestCannotMakeIt = guestList[1];
console.log("Unfortunately, ".concat(guestCannotMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
guestList[1] = "Sarah";
// Print the updated invitation messages
console.log("\nDear ".concat(guestList[0], ",\n    ").concat(invitation, "\n\nDear ").concat(guestList[1], ",\n    ").concat(invitation, "\n\nDear ").concat(guestList[2], ",\n    ").concat(invitation, "\n"));
// Anouncement
console.log("Attention everyone!,I have found a bigger dinner table");
guestList.unshift("Michael"); // Add one guest to the beginning
guestList.splice(2, 0, "Emily"); // Add one guest to the middle
guestList.push("David"); // Add one guest to the end
// Printing the new set of invitation messages
console.log("\n    Dear ".concat(guestList[0], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[1], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[2], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[3], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[4], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[5], ",\n    ").concat(invitation, "\n"));
