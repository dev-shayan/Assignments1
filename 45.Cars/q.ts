function cars(manufacturer,model,...otherinfo){
    let carinfo = {
        manufacturer : manufacturer,
        modelNumber : model,
        otherInfo : otherinfo
    }
    return carinfo;
}
console.log(cars("BMW",2013,"RED","SUV"));