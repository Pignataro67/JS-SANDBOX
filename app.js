// letters, numbers, -, $
// can't start with a number
// var _name = 'John'

// Multi word vars
// var firstName = 'John'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tim'; // Pascal case
// var firstname; // not recommended

// LET

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can't reassign
// name = 'Sara';
// Have to assign value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sally';
person.age = '32';

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers = [1, 2, 3, 4, 5, 6]

// console.log(numbers);

// PRIMITIVE

// String
const name = 'John Doe';

const age = 45;

const hasKids = true;

const car = null;

let test;

const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music']; // I do not unnderstand
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof today);

let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);