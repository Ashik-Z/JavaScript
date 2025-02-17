let age = 21;
let ageMessage = age >= 18 ? (`You are an adult`) : (`You are a minor`);
console.log(ageMessage);

let time = 16;
let timeMessage = (time < 12) ? ("It's morning") : ("It's either noon or after noon");
console.log(timeMessage);

let isStudent = true;
let studentMessage = isStudent ? ("You are a stuent") : ("You are NOT a student");
console.log(studentMessage);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`You got a discount of $${purchaseAmount - purchaseAmount*(discount / 100)}%`);