// Scoville Scale Interactive Slider
const scovilleRange = document.querySelector('.scoville-range');
const scovilleOutput = document.getElementById('scoville-output');

scovilleRange.addEventListener('input', function() {
  const value = scovilleRange.value;
  scovilleOutput.textContent = $;{value.toLocaleString()} SHU;
  // Color scale changes as the Scoville value increases
  scovilleOutput.style.color = value > 500000 ? '#d32f2f' : '#388e3c';
});

// Pepper Growing Tracker
const growthTracker = document.getElementById('growth-tracker');
const growthLog = document.getElementById('growth-log');

growthTracker.addEventListener('submit', function(event) {
  event.preventDefault();
  const growthStage = document.getElementById('growth-stage').value;
  
  if (growthStage) {
    const logEntry = document.createElement('p');
    logEntry.textContent =' Growth ;Stage Logged: ${growthStage}';
    growthLog.appendChild(logEntry);
    growthTracker.reset(); // Reset the form after submission
  } else {
    alert('Please enter a growth stage.');
  }
});

// Add to Cart Buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('Item added to cart!');
  });
});

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animations on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
}
});
});
