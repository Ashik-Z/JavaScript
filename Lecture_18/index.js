const PI = Number(Math.PI.toFixed(4));
let userInp = window.prompt("Enter the value of PI: ");
userInp = Number(userInp);

if (userInp === Number(Math.PI.toFixed(4))) {
    console.log("This is PI");
}
else {
    console.log("This is not PI");
}