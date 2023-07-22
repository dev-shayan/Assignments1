function cars(manufacturer, model) {
    var otherinfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherinfo[_i - 2] = arguments[_i];
    }
    var carinfo = {
        manufacturer: manufacturer,
        modelNumber: model,
        otherInfo: otherinfo
    };
    return carinfo;
}
console.log(cars("BMW", 2013, "RED", "SUV"));
