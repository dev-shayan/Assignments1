// INITIALIZING ARRAY AND VARIABLE 
let guestList = ["Ahmed","John","Zia"]
let invitation = "Join me for a delightful dinner on 13/07/2023 at 9:00 PM . Great food, wonderful company. Your presence would be wonderful.RSVP.\nWarm Reqards,\nSHAYAN kHAN\n"


// Print the name of the guest who can't make it
let guestCannotMakeIt = guestList[1];
console.log(`Unfortunately, ${guestCannotMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
guestList[1] = "Sarah";

// Print the updated invitation messages
console.log(`
Dear ${guestList[0]},
    ${invitation}

Dear ${guestList[1]},
    ${invitation}

Dear ${guestList[2]},
    ${invitation}
`);
// Anouncement
console.log("Attention everyone!,I have found a bigger dinner table");

guestList.unshift("Michael"); // Add one guest to the beginning
guestList.splice(2, 0, "Emily"); // Add one guest to the middle
guestList.push("David"); // Add one guest to the end

// Printing the new set of invitation messages
console.log(`
    Dear ${guestList[0]},
    ${invitation}

    Dear ${guestList[1]},
    ${invitation}

    Dear ${guestList[2]},
    ${invitation}

    Dear ${guestList[3]},
    ${invitation}

    Dear ${guestList[4]},
    ${invitation}

    Dear ${guestList[5]},
    ${invitation}
`);
export{}