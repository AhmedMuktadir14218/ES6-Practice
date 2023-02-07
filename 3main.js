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
