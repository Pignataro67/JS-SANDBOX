const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// DoubleClick
// clearBtn.addEventListener('dbclick', runEvent);
// MouseDown
// clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
// clearBtn.addEventListener('mouseUp', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // Get input value
  console.log(taskInput.value);

  e.preventDefault();
}