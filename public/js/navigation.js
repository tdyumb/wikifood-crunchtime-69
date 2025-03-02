
document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const toggleMenuButton = document.getElementById('toggleMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (toggleMenuButton) {
    toggleMenuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-fade-in');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-fade-in');
      }
    });
  }
  
  // Check if viewport is mobile
  function isMobile() {
    return window.innerWidth < 768; // md breakpoint in Tailwind
  }
  
  // Update menu visibility on resize
  window.addEventListener('resize', function() {
    if (!isMobile() && mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});
