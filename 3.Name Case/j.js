"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assigning Variables
var name = "Ahmed sheick";
var name1 = name.toUpperCase();
var name2 = name.toLowerCase();
// Displaying Output
console.log(name1);
console.log(name2);
// Title Case
function titleCase(msg) {
    var step1 = msg.split(" ");
    var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
    var step3 = step2.join(" ");
    console.log(step3);
}
titleCase(name);
