let currentUser=["john111","harry121","sam333","lena777","sofie"]
let newUser=["john111","harry121","zia232","haris323","hashir"]
    for (let i = 0; i < currentUser.length; i++) {
       if (currentUser.includes(newUser[i])) {
        console.log(`The ${newUser[i]} is already taken.You need to enter a new username.`);
       }
       else{
        console.log(`The username ${newUser[i]} is available.`);
        
       }
    }
