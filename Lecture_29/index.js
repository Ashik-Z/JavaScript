// DICE ROLLER PROGRAM

function rollDice() {
    const numOfDice = parseInt(document.getElementById("numOfDice").value, 10);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const imagesarray = [];

    for (let index = 0; index < numOfDice; index++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imagesarray.push(`<img src="dice_images/${value}.png" alt="${value}" />`); 
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = imagesarray.join("");

    console.log(values);
}