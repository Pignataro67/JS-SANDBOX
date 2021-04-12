// Event Bubbling

document.querySepector('.card-title').addEventListener('click', function() {
  console.log('card-title');
});

document.querySepector('.card-content').addEventListener('click', function() {
  console.log('card-content');
});

document.querySepector('.card').addEventListener('click', function() {
  console.log('card');
});

document.querySepector('.col').addEventListener('click', function() {
  console.log('col');
});