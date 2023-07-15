var guestList = ["Ahmed", "John", "Zia", "Sarah", "Michael", "Emily", "David"];
var invitation = "Join me for a delightful dinner on [Date] at 9:00 PM. Great food, wonderful company. Your presence would be wonderful. RSVP.";
// Print the uinvitation messages
console.log("\n    Dear ".concat(guestList[0], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[1], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[2], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[3], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[4], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[5], ",\n    ").concat(invitation, "\n\n    Dear ").concat(guestList[6], ",\n    ").concat(invitation, "\n"));
// message indicating the number of people you are inviting to dinner
console.log("NUmber of guest are : ".concat(guestList.length));
