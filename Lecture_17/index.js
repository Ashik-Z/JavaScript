const temp = 20;
const isSunny = true;

if (temp > 0 && temp <= 30) {
    console.log("The weather is good");
}
else if (temp > 30 || temp < 0) {
    console.log("The weather is bad");
}

if (!isSunny) {
    console.log("It is sunny");
}
else {
    console.log("It is cloudy");
}