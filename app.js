// set local storage item
localStorage.setItem('name', 'John');

// set session storage item
sessionStorage.setItem('name', 'Beth');

// remove from Storage
localStorage.removeItem('name');

// get from Sotrage
const name = localSotrage.getItem('name');
console.log(name);