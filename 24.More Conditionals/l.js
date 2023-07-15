// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == "hello");
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2);
// Tests using the lower case function
var text = "OpenAI";
console.log("Is the lowercased text equal to 'openai'? I predict True.");
console.log(text.toLowerCase() == "openai");
// Numerical tests involving equality and inequality
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num2 less than or equal to num1? I predict True.");
console.log(num2 <= num1);
// Tests using "and" and "or" operators
var value1 = true;
var value2 = false;
console.log("Is value1 && value2 = true? I predict False.");
console.log(value1 && value2);
console.log("Is value1  or value2 = true? I predict True.");
console.log(value1 || value2);
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
// Test whether an item is not in an array
var colors = ["red", "green", "blue"];
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes("yellow"));
