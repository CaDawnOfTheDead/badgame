var car = document.querySelector('.car');
var track = document.querySelector('.track');

// Initialize the car's position
var carX = 0;
var carY = 0;
var carSpeed = 5;

// Move the car when the arrow keys are pressed
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) { // left arrow
    carX -= carSpeed;
  } else if (event.keyCode === 38) { // up arrow
    carY -= carSpeed;
  } else if (event.keyCode === 39) { // right arrow
    carX += carSpeed;
  } else if (event.keyCode === 40) { // down arrow
    carY += carSpeed;
  }
  
  // Update the car's position on the screen
  car.style.left = carX + 'px';
  car.style.bottom = carY + 'px';
});
