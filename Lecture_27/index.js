let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max_num1 = Math.max(numbers);  // NaN
// console.log(max_num1); 

let max_num2 = Math.max(...numbers);  // not NaN
console.log(max_num2);

let username = "ASHIKUZZAMAN";
let letters = [...username];
console.log(letters);

let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
let each_fruit = [...fruits];
console.log(each_fruit);