var _a;
var sym1 = Symbol();
var user1 = (_a = {
        name: "shayan",
        email: "shayankhanx1x@gmail.com",
        city: "Islamabad"
    },
    _a[sym1] = ["hello"],
    _a);
console.log(user1["name"]);
console.log(user1["email"]);
console.log(user1["city"]);
console.log(user1[sym1]);
