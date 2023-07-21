function describeCities(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    if (country === "PAKISTAN") {
        return ("".concat(city, " is in ").concat(country, " "));
    }
    else {
        return ("".concat(city, " is not in ").concat(country, " "));
    }
}
console.log(describeCities("KARACHI", "PAKISTAN"));
console.log(describeCities("ISLAMABAD"));
console.log(describeCities("BERLIN", "GERMANY"));
