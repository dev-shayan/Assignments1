function sandwichItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var sandwichItemsSummery = "THIS SANDWICH CONTAINS " + items.join(", ");
    return sandwichItemsSummery;
}
console.log(sandwichItems("TOMATOES", "CHEESE", "CHICKEN"));
console.log(sandwichItems("MAYONIZE", "SAUSAGE", "BEEF"));
console.log(sandwichItems("HONEY", "PEENUT BUTTER", "CHOCLATE"));
