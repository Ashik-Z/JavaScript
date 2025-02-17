const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        // result.textContent = "You selected to Fahrenheit";
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `Temperature in Fahrenheit is ${temp.toFixed(1)} °F`;
    }
    else if (toCelsius.checked) {
        // result.textContent = "You selected to Celsius";
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `Temperature in Fahrenheit is ${temp.toFixed(1)} °C`;
    }
    else {
        result.textContent = "Select a unit";
    }
}