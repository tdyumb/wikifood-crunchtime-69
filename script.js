// Create decorative lights
function createLights() {
  const lightsContainer = document.querySelector('.lights-container');
  const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7'];
  
  for (let i = 0; i < 20; i++) {
    const light = document.createElement('span');
    light.className = 'light';
    light.style.backgroundColor = colors[i % colors.length];
    lightsContainer.appendChild(light);
  }
}

// Animate text cycling
function setupTextAnimation() {
  const animatedText = document.querySelector('.animated-text');
  const phrases = ['Talk', 'Cook', 'Look'];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    animatedText.style.opacity = '0';
    
    setTimeout(() => {
      animatedText.textContent = phrases[currentIndex];
      animatedText.style.opacity = '1';
    }, 200);
  }, 2000);
}

// Handle trailer button click
function handleTrailerClick() {
  window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
}

// Toggle mobile menu
function setupMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
  createLights();
  setupTextAnimation();
  setupMobileMenu();
});