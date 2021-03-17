const firstName = 'Williams';
const lastName = 'Johnson';
const age = 42;
const str = 'Hello there my name is Pat'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Pat ';
val += 'Pignataro';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

// charAt()
val = firstName.charAt('2');
// Get the last char
val = firstName.charAt(firstName.length - 1);

// subString()
val = firstName.substring(0,4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

console.log(val);