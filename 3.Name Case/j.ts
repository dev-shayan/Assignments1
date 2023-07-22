// Assigning Variables
let name = "Ahmed sheick";
let name1 = name.toUpperCase();
let name2 = name.toLowerCase();

// Displaying Output
console.log(name1);
console.log(name2);

// Title Case
function titleCase(msg){
    let step1 = msg.split(" ");
    let step2 = step1.map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase());
    let step3 = step2.join(" ");
    console.log(step3);
    
    }
    titleCase(name)
    export{}
