// For Loop

// for(let i = 0; i < 10; i++) {
//   // console.log('Number ' + i);
//   if(i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }
  
//   if(i === 5) {
//     console.log('Stop the loop');
//     break;
//   }
//   console.log('Number ' + i);
// }

// While Loop

// let i = 0;

// while(i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// Do While

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

const cars = ['Ford', 'Chevrolet', 'Honda', 'Toyota'];
// cars[1];

for(let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// ForEach
cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Map
const users = [
  {id:1, name:'John'},
  {id:2, name:'Sara'},
  {id:3, name:'Karen'},
  {id:4, name:'Steve'}
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

// FOr in loop
for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}