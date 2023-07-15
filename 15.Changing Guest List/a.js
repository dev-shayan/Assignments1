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
