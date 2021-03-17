const firstName = 'William';
const lastName = 'Johnson';
const age = 42;

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
val = firstName.toUpperCase();

val = firstName[0];

console.log(val);