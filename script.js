
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      
      // Animate hamburger to X
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        // Normally this would be sent to a server
        console.log('Email submitted:', email);
        
        // Show success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for subscribing!';
        successMessage.className = 'success-message';
        successMessage.style.color = 'white';
        successMessage.style.marginTop = '10px';
        
        // Replace the form with success message
        newsletterForm.innerHTML = '';
        newsletterForm.appendChild(successMessage);
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
  
  // Recipe card click event
  const viewRecipeButtons = document.querySelectorAll('.view-recipe');
  
  viewRecipeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const recipeName = this.closest('.recipe-card').querySelector('h3').textContent;
      alert(`You clicked on the recipe: ${recipeName}. This would normally take you to the recipe details page.`);
    });
  });
  
  // Category click event
  const categories = document.querySelectorAll('.category');
  
  categories.forEach(category => {
    category.addEventListener('click', function() {
      const categoryName = this.querySelector('h3').textContent;
      alert(`You selected the ${categoryName} category. This would normally filter recipes by this category.`);
    });
  });
  
  // Search functionality
  const searchBox = document.querySelector('.search-box');
  
  if (searchBox) {
    const searchBtn = searchBox.querySelector('button');
    const searchInput = searchBox.querySelector('input');
    
    searchBtn.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
        alert(`You searched for: "${searchTerm}". This would normally show search results.`);
      } else {
        alert('Please enter a search term.');
      }
    });
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchBtn.click();
      }
    });
  }

  // Helper function to validate email
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Create images folder for the images (structure only)
  console.log('Note: You would need to add actual images to the images folder for this site.');
});

// Add additional CSS for mobile menu when active
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @media (max-width: 768px) {
      .nav-links.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 1rem;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        z-index: 1000;
      }
      
      .mobile-menu-btn span.active:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .mobile-menu-btn span.active:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu-btn span.active:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  </style>
`);
