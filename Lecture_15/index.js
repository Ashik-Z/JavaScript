const fullName = "Ashik-Uz-Zaman";

// forward slicing
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(9);
console.log(firstName);
console.log(lastName);
console.log(fullName.slice(0, 1));

// backward slicing
console.log(fullName.slice(-5));



const fullName2 = "Mahfuzur Rahman";
console.log(fullName2.slice(0, fullName2.indexOf(" ")));
console.log(fullName2.slice(fullName2.indexOf(" ")));


const email = "someone@example.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);