let x = 1; // global scope
console.log(`fron global scope: ${x}`);

function function1() {
    let x = 1; // function scope
    console.log(`from function1: ${x}`);
}
function1();

function function2() {
    let x = 2; // function scope
    console.log(`from function2: ${x}`);
}
function2();