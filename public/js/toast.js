
document.addEventListener('DOMContentLoaded', function() {
  // Toast system
  window.showToast = function(title, message, variant = 'default') {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${variant}`;
    
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
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, 3000);
    
    // Close button functionality
    const closeButton = toast.querySelector('.toast-close');
    closeButton.addEventListener('click', function() {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    });
  };
});
