var userNames = ["john", "harry", "admin", "clark", "ali", "ayesha"];
var logIn = "admin";
if (logIn == "admin") {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log("Hello ".concat(userNames, ", thank you for logging in again."));
}
