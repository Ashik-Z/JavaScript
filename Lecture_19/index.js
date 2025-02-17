// let userName = "";

// while (userName === "" || userName === null) {
//     userName = window.prompt("Enter your name: ");
// }

// console.log(`Hello, ${userName}!`);


let loggedIn = false;
let userName, password;

while (!loggedIn) {
    userName = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if (userName === "admin" && password === "myPassword") {
        loggedIn = true;
        console.log("You are now logged in!");
    }
    else {
        console.log("Your credentials do not match. Please try again.");
    }
}