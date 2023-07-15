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


export{}

