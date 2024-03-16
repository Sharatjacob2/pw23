const circle1 = document.querySelector('.pendulum1');
const circle2 = document.querySelector('.pendulum2');
const circle3 = document.querySelector('.pendulum3');
const circle4 = document.querySelector('.decorstuff');

// let circleTop = 0; // Initial top position, centered vertically
// circle4.style.offsetDistance = circleTop + '%';

// Event listener for mouse wheel scroll
window.addEventListener('wheel', (event) => {
    // Get the amount of scroll
    const scrollAmount = event.deltaY;

  // Move the circle based on the scroll direction
  if (scrollAmount > 0) {
    // circleTop += 0.5;
    circle1.style.transform = 'rotate(-60deg) translateX(10px) translateY(450px) ';
    circle2.style.transform = 'rotate(-60deg) translateX(310px) translateY(500px) ';
    circle3.style.transform = 'rotate(-60deg) translateX(560px) translateY(550px) ';
    circle4.style.offsetDistance = '100%';
  } else {
    circle1.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
    circle2.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
    circle3.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
    circle4.style.offsetDistance = '0%';
    // circleTop -= 0.5;
  }

  // Update the circle's position
  // circle4.style.offsetDistance = circleTop + '%';
});


// Event listener for mouse wheel scroll
window.addEventListener('touchmove', (event) => {
  // Get the amount of scroll
  const scrollAmount = event.deltaY;

// Move the circle based on the scroll direction
if (scrollAmount > 0) {
  circleTop += 0.5;
  circle1.style.transform = 'rotate(-60deg) translateX(10px) translateY(450px) ';
  circle2.style.transform = 'rotate(-60deg) translateX(310px) translateY(500px) ';
  circle3.style.transform = 'rotate(-60deg) translateX(560px) translateY(550px) ';
} else {
  circle1.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
  circle2.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
  circle3.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
  circleTop -= 0.5;
}

// Update the circle's position
circle4.style.offsetDistance = circleTop + '%';
});