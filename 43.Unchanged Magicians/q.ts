let magiciansName = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore","Severus Snape"];
function showMagicians(){
    return magiciansName;
}

function makeGreat() {
    return magiciansName.map(name => `The Great ${name}`);
}

console.log(showMagicians());
console.log(makeGreat());