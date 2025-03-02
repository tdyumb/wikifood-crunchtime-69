
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Validate form
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        showToast('Error', 'Please fill in all fields', 'destructive');
        return;
      }
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      });
      
      showToast('Message Sent!', 'Thank you for your message. We\'ll get back to you soon!');
      
      // Reset form
      contactForm.reset();
    });
  }
});
