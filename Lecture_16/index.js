let userName = window.prompt("Enter your username: ");
// NO METHOD CHAINING

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let rest = userName.slice(1);
rest = rest.toLowerCase();
userName = letter + rest;
console.log(userName);

// Method Chaining

let userName2 = window.prompt("Enter your username2: ");
userName2 = userName2.trim().charAt(0).toUpperCase() + userName2.trim().slice(1).toLowerCase();
console.log(userName2);