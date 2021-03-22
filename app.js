const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@yahoo.com',
  hobbies: ['music', 'sports'],
  adress: {
    city: 'Sante Fe'
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];

console.log(val);