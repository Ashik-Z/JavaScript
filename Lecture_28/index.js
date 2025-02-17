function openFridge1(...foods) {
    console.log(foods);
}

function openFridge2(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";
const food4 = "sushi";
const food5 = "hotdog";
const food6 = "sushi";
const food7 = "hamburger";

openFridge1(`Fridge1: ${food1}, ${food2}, ${food3}, ${food4}, ${food5}, ${food6}, ${food7}`);
openFridge2(`Fridge2: ${food1}, ${food2}, ${food3}, ${food4}, ${food5}, ${food6}, ${food7}`);

const GetFood = getFood(food1, food2, food3, food4, food5, food6, food7);
console.log(`GetFood: ${GetFood}`);

// another example:

function summation(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;
}

const total = summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Total: ${total}`);

function avg(...params) {
    const total = summation(...params);
    return total / params.length;
}

const total_avg = avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Total_Avg: ${total_avg}`);

// another example:

function combineString(...strings) {
    return strings.join(" ");
}

const combinedString = combineString("Hello", "World", "from", "JavaScript");
console.log(`Combined String: ${combinedString}`);