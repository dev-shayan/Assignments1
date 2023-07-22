
function sandwichItems (...items){
    let sandwichItemsSummery ="THIS SANDWICH CONTAINS "+items.join(", ");
    return sandwichItemsSummery;
}
console.log(sandwichItems("TOMATOES","CHEESE","CHICKEN"));
console.log(sandwichItems("MAYONIZE","SAUSAGE","BEEF"));
console.log(sandwichItems("HONEY","PEENUT BUTTER","CHOCLATE"));
