
document.addEventListener('DOMContentLoaded', function() {
  // Dynamic text animation
  const dynamicText = document.getElementById('dynamicText');
  const phrases = ["Talk", "Cook", "Look"];
  let currentIndex = 0;
  
  function changeText() {
    dynamicText.style.opacity = '0';
    dynamicText.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      dynamicText.textContent = phrases[currentIndex];
      dynamicText.style.opacity = '1';
      dynamicText.style.transform = 'translateY(0)';
    }, 500);
  }
  
  // Change text every 2 seconds
  setInterval(changeText, 2000);
  
  // Trailer button functionality
  const trailerButton = document.getElementById('trailerButton');
  
  trailerButton.addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
    showToast('Trailer', 'Opening video trailer...');
  });
  
  // Create decorative lights
  const lightsContainer = document.querySelector('.lights-container');
  const colors = ['bg-red', 'bg-blue', 'bg-green', 'bg-yellow', 'bg-purple'];
  
  for (let i = 0; i < 20; i++) {
    const light = document.createElement('span');
    light.className = `light ${colors[i % colors.length]}`;
    lightsContainer.appendChild(light);
  }
});

// Toast helper function
function showToast(title, message) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  toast.innerHTML = `
    <div class="toast-header">
      <strong>${title}</strong>
      <button class="toast-close">&times;</button>
    </div>
    <div class="toast-body">${message}</div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Add show class to animate in
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Auto close after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, 3000);
  
  // Close button functionality
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', function() {
    toast.classList.remove('show');
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  });
}
