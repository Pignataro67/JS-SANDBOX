// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // remove from Storage
// localStorage.removeItem('name');

// // get from Storage
// const name = localSotrage.getItem('name');
// const age = localSotrage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;
  localStorage.setItem('task', task);
  alert('Task saved');

  e.preventDefault();
});