// console.log(typeof today);

let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);
val = (5).toString();
val = (true).toString();

// toString
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
//console.log(val);
//console.log(typeof val);
// console.log(val.length);
//console.log(val.toFixed());

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;
let val3;

// Simple Math with numbers
val3 = num1 + num2
val3 = num1 * num2
val3 = num1 - num2
val3 = num1 / num2
val3 = num1 % num2

console.log(val3);