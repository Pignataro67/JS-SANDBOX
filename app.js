// Function Declarations

function greet(firstName = 'John', lastName = 'Doe') {
//   if(typeof firstName === 'undefined')(firstName = 'John')
//   if(typeof lastName === 'undefined')(lastName = 'Doe')
//  console.log('Hello');
return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// Function Expression

const square = function(x = 3) {
  return x*x;
};

console.log(square());