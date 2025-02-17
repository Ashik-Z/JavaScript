// for (let index = 10; index >= 0; index--) {
//     console.log(index);
// }
// console.log("Happy New Year!");

let usrInp = Number(window.prompt("Enter a number: "));
let isPrime = true;

for (let i = 2; i < usrInp; i++) {
    if (usrInp % i == 0) {
        isPrime = false;
        break;
    }
}

if (!isPrime) {
    console.log("Not a prime number");
}
else {
    console.log("A prime number");
}