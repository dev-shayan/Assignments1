const sym1 = Symbol();
let user1 = {
    name : "shayan",
    email : "shayankhanx1x@gmail.com",
    city : "Islamabad",
    [sym1] :["hello"]
}

console.log(user1["name"]);
console.log(user1["email"]);
console.log(user1["city"]);
 console.log(user1[sym1]);
