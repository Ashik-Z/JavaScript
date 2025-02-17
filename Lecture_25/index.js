let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
console.log(fruits);

fruits[0] = 'kiwi';
console.log(fruits);

fruits.push('grapes');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('grapes', 'mint', 'pear');
console.log(fruits);

fruits.unshift('blueberry', 'guava');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

console.log(fruits.length);
console.log(`indes of apple in the array is: ${fruits.indexOf('apple')}, so doesn't exist in the list.`);
console.log(`indes of mango in the array is: ${fruits.indexOf('mango')}.`);

for (let index = fruits.length-1; index >= 0;  index--) {
    // const element = fruits[index];
    console.log(fruits[index]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort();
console.log(`sorted: ${fruits}`);

fruits.sort().reverse();
console.log(`reversed: ${fruits}`);