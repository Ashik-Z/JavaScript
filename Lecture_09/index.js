// let diceCorner = 6;
// let randNum = Math.floor(Math.random() * diceCorner)+1;
// console.log(randNum);

// const min = 50, max = 100;
// let randRange = Math.floor(Math.random() * (max - min)) + min;
// console.log(randRange);

const diceCorner = 6, min = 1;
document.getElementById("myButton").onclick = function() {
    let randNum1 = Math.floor(Math.random() * diceCorner)+min;
    let randNum2 = Math.floor(Math.random() * diceCorner)+min;
    let randNum3 = Math.floor(Math.random() * diceCorner)+min;
    console.log(randNum1);
    document.getElementById("myLabel1").textContent = randNum1;
    console.log(randNum2);
    document.getElementById("myLabel2").textContent = randNum2;
    console.log(randNum3);
    document.getElementById("myLabel3").textContent = randNum3;
}