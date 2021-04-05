let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;

val = list.chilNodes[0];
val = list.chilNodes[0].nodeName;
val = list.chilNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children;

console.log(val);