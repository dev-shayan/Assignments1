var userNames = [];
var logIn = userNames[0];
if (userNames.length !== 0) {
    if (logIn == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
}
else {
    console.log("We need to find some users!");
}
