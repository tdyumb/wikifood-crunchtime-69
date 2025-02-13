
// DOM Elements
const searchButton = document.getElementById('search-button');
const cuisineSelect = document.getElementById('cuisine-select');
const mealSelect = document.getElementById('meal-select');
const dietaryCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
const recipeResults = document.getElementById('recipe-results');

// Event Listeners
searchButton.addEventListener('click', handleSearch);

// Search Handler
function handleSearch() {
  const filters = {
    cuisine: cuisineSelect.value,
    mealType: mealSelect.value,
    dietary: Array.from(dietaryCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
  };

  // Here you would typically make an API call with the filters
  console.log('Searching with filters:', filters);
  
  // Show a notification
  showNotification('Filters applied successfully!');
}

// Notification System
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Mobile Menu Toggle
const createMobileMenu = () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  
  const menuButton = document.createElement('button');
  menuButton.className = 'menu-toggle';
  menuButton.innerHTML = '☰';
  
  Object.assign(menuButton.style, {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer'
  });
  
  navbar.querySelector('.nav-container').appendChild(menuButton);
  
  // Show/hide menu button based on screen size
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  function handleScreenChange(e) {
    menuButton.style.display = e.matches ? 'block' : 'none';
    if (!e.matches) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  }
  
  mediaQuery.addListener(handleScreenChange);
  handleScreenChange(mediaQuery);
  
  // Toggle menu on click
  menuButton.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    if (navLinks.style.display === 'flex') {
      Object.assign(navLinks.style, {
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        backgroundColor: '#1A1F2C',
        flexDirection: 'column',
        padding: '1rem'
      });
    }
  });
};

// Initialize mobile menu
createMobileMenu();
