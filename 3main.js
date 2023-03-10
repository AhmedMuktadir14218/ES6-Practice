// #002Write a JavaScript program to round a number to a specified amount of digits.

//#Source https://bit.ly/2neWfJ2 
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));


//#Source https://bit.ly/2neWfJ2 
const reverseString = str => [...str].reverse().join('');

console.log(reverseString('php')); 
console.log(reverseString('foobar'));
// Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) returns false.

// Filters an array's values based on a predicate function, returning only values for which the predicate function returns false.

// Use Array.prototype.filter() in combination with the predicate function, pred, to return only the values for which it returns false.
// Sample Solution:

// JavaScript Code:

//#Source https://bit.ly/2neWfJ2 
const reject = (pred, array) => array.filter((...args) => !pred(...args));

console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));