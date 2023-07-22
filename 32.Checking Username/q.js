var currentUser = ["john111", "harry121", "sam333", "lena777", "sofie"];
var newUser = ["john111", "harry121", "zia232", "haris323", "hashir"];
for (var i = 0; i < currentUser.length; i++) {
    if (currentUser.includes(newUser[i])) {
        console.log("The ".concat(newUser[i], " is already taken.You need to enter a new username."));
    }
    else {
        console.log("The username ".concat(newUser[i], " is available."));
    }
}
