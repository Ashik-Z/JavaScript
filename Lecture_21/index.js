const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum+1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));

    if (isNaN(guess)) {
        window.alert('You did not enter a number');
    }
    else if (guess >= maxNum || guess <= minNum) {
        window.alert('You did not enter a number between 1 - 100');
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert('Too low. Trye again.');
        }
        else if (guess > answer) {
            window.alert("Too high. Try again.");
        }
        else {
            window.alert(`Correct. The answer is ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}