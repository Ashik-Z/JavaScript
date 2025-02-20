// foreach()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(double);
numbers.forEach(display);
numbers.forEach(triple);
numbers.forEach(display);
numbers.forEach(square);
numbers.forEach(display);
numbers.forEach(cube);
numbers.forEach(display);

function display(element) {
    console.log(element);
}

function triple(element, index, array) {
    array[index] = element*3;
}

function double(element, index, array) {
    array[index] = element*2;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

// =============================== //

let fruits = ['ApPle', 'BaNana', 'MaNgo', 'OraNge', 'StrawBerry'];
let fruits2 = ["APPLE", "BANANA", "MANGO", "ORANGE", "STRAWBERRY"];

function show(element) {
    console.log(element);
}

fruits.forEach(show);

fruits.forEach(upperCase);
fruits.forEach(show);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
}

fruits2.forEach(lowerCase);
fruits2.forEach(show);

fruits2.forEach(capitalize);
fruits2.forEach(show);