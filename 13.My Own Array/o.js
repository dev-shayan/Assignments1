// INITIALIZING 1ST ARRAY
var motorcycles = [
    "1.Riding a motorcycle gives me a sense of freedom and exhilaration as I zip through the open roads.",
    "2.The sleek design and powerful engine of a sports bike make it a thrilling choice for adrenaline junkies.",
    "3.Motorcycles offer great fuel efficiency, making them an economical option for daily commuting.",
    "4.Exploring scenic routes on a motorcycle allows me to appreciate the beauty of nature in a unique way.",
];
var cars = [
    "1.Driving a car provides a sense of independence and convenience, allowing me to go wherever I desire.",
    "2.Road trips in a car offer endless possibilities for adventure, with the freedom to explore new destinations at my own pace.",
    "3.The advanced safety features in modern cars prioritize the well-being of passengers, ensuring a secure journey.",
    "4.I enjoy the thrill of maneuvering through winding roads and experiencing the power and agility of a well-engineered car.",
    "5.The comfort and convenience of climate control and audio systems in cars enhance the overall driving experience."
];
var privateJets = [
    "1.Private jets offer enhanced privacy, allowing for confidential discussions and personal space.",
    "2.Private jet travel provides convenience and flexibility, with the ability to choose departure and arrival times and access smaller airports.",
    "3.Comfort and luxury are paramount in private jets, featuring spacious cabins, plush seating, and high-end amenities.",
    "4.Private jets save time by bypassing long security lines and crowded terminals, ensuring quick boarding and expedited travel.",
    "5.Private jets provide a productive environment, enabling work, meetings, or relaxation without distractions, supported by reliable Wi-Fi and onboard technology."
];
// DISPLAYING 1ST ARRAY OUTPUT
console.log(motorcycles.join("\n"));
console.log(cars.join("\n"));
console.log(privateJets.join("\n"));
// INITIALIZING 2ND ARRAY
var myOwnArray = [motorcycles, cars, privateJets];
// DISPLAYING 1ST ARRAY OUTPUT
console.log("MOTORCYCLES:\n".concat(myOwnArray[0].join("\n")));
console.log("CARS:\n".concat(myOwnArray[1].join("\n")));
console.log("PRIVATE JETS:\n".concat(myOwnArray[2].join("\n")));
