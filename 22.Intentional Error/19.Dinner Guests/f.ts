let guestList = ["Ahmed", "John", "Zia", "Sarah", "Michael", "Emily", "David"];
let invitation = "Join me for a delightful dinner on [Date] at 9:00 PM. Great food, wonderful company. Your presence would be wonderful. RSVP.";
export{}


// Print the uinvitation messages
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

    Dear ${guestList[6]},
    ${invitation}
`);

// message indicating the number of people you are inviting to dinner
console.log(`NUmber of guest are : ${guestList.length}`);

