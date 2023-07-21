function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    return { size: size, message: message };
}
console.log(makeShirt("medium"));
console.log(makeShirt());
console.log(makeShirt("small", "BATMAN"));
