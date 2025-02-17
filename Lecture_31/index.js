// callback function

function hello(callback) {
    console.log("Hello World!");
    callback();
}

function wait() {
    console.log("Wait!");
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye.");
}

hello(wait);


// ==============================

function sum(callback, x, y) {
    let result = x+y;
    callback(result);
}

function print(retult) {
    console.log("Result is: " + retult);
}

function displayPage(result) {
    document.getElementById("myH2").textContent = "Result is: " + result;
}
sum(displayPage, 5, 6);