function  describeCities (city , country = "PAKISTAN"){
    if (country ==="PAKISTAN") {
        return (`${city} is in ${country} `);
    }
    else{
        return (`${city} is not in ${country} `);   
    }
}
console.log(describeCities("KARACHI","PAKISTAN"));
console.log(describeCities("ISLAMABAD",));
console.log(describeCities("BERLIN","GERMANY"));