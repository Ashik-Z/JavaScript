let userName = "Ashikuzzaman";
let character = userName;

console.log(character.charAt(0)); // Output: A
console.log(userName.indexOf("z")); // Output: 6
console.log(userName.lastIndexOf("a")); // Output: 10
console.log(userName.length); 

let newUser = "   Mahfuz";
let newChar = newUser;

console.log(newChar.trim());
console.log(newChar.toUpperCase());
console.log(newChar.toLowerCase());
console.log(newChar.repeat(4));
console.log(newChar.startsWith(" "));
console.log(newChar.endsWith("z"));

let result = newChar.startsWith(" ");
if (result) {
    console.log(`Your userName can't start with space`);
}
else {
    console.log(newChar);
}

let newResult = newChar.endsWith(" ");
if (newResult) {
    console.log(`Your userName can't end with space`);
}
else {
    console.log(newChar);
}

let NewRes = newChar.includes(" ");
if (NewRes) {
    console.log("Your userName can't include ' ' ");
}
else {
    console.log(newChar);
}

let phoneNum = "123-456-7890";
let num = phoneNum;
console.log(num.replaceAll("-", "/"));
console.log(num.padStart(15, "*"));
console.log(num.padEnd(15, "*"));