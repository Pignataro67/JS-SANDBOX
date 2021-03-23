// // if(something) {
// //   do something
// // } else {
// //   do something else
// // }

const id = '200';

// Equal to
if(id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal to
if(id != 101) {
  console.log('Correct'); 
} else {
  console.log('Incorrect');
}

// Equal to Vallue and Type
if(id === 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Equal to Vallue and Type
if(id !== 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Greater or Less Than
if(id <= 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// If Else

const color = 'yellow';

if(color === 'red') {
  console.log('Color is red');
} else if(color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical Operators

const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age>= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}