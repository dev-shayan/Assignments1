var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (element == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (element == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else {
        console.log("".concat(numbers[i], "th"));
    }
}
