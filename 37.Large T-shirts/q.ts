function makeShirt(size = "large" , message = "i love typescript"){
   return {size , message };
}
console.log(makeShirt("medium",));
console.log(makeShirt());
console.log(makeShirt("small","BATMAN"));
