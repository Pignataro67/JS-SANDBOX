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
clearBtn.addEventListener('mouseUp', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
