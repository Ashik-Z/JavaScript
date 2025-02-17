// let age = window.prompt("Enter your age: ");
// age = Number(age);

// if (age >= 18) {
//     window.alert(`You are old enough to enter this site. Have fun!`);
// }
// else {
//     window.alert(`You are not old enough to enter this site. Sorry!`);
// }

let age;
const myP = document.getElementById("myP");
const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");

mySubmit.onclick = function(){

    age = Number(myText.value);
    
    if(age >= 100){
        myP.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        myP.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        myP.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        myP.textContent = `Your age can't be below 0`;
    }
    else{
        myP.textContent = `You must be 18+ to enter this site`;
    }
}