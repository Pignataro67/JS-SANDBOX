// REPLACE ELEMENT

//Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-acion');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(firstLi.children[0]);
console.log(newHeading);