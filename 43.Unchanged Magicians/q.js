var magiciansName = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape"];
function showMagicians() {
    return magiciansName;
}
function makeGreat() {
    return magiciansName.map(function (name) { return "The Great ".concat(name); });
}
console.log(showMagicians());
console.log(makeGreat());
