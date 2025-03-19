
"use strict";
/**
 * App Utilities
 * Custom utility functions for application monitoring and enhancement
 * Created by the development team
 */
(function() {
  // Simple console wrapper for better debugging
  const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error
  };

  // Enhanced logging
  function setupLogging() {
    if (window.LOGGING_ENABLED) return;
    
    const enhanceLogger = (type) => {
      console[type] = function(...args) {
        originalConsole[type].apply(console, args);
        // Here we could add additional functionality like remote logging
      };
    };
    
    enhanceLogger('log');
    enhanceLogger('warn');
    enhanceLogger('error');
    
    window.LOGGING_ENABLED = true;
  }

  // Error tracking
  function setupErrorTracking() {
    window.addEventListener('error', (event) => {
      // Simple error handler that could be expanded to report errors
      const errorInfo = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      };
      
      console.error('Application error:', errorInfo);
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });
  }
  
  // URL change detection
  function trackUrlChanges() {
    let currentUrl = document.location.href;
    const body = document.querySelector("body");
    
    if (body) {
      const observer = new MutationObserver(() => {
        if (currentUrl !== document.location.href) {
          currentUrl = document.location.href;
          // You could add custom analytics or other functionality here
          console.log(`URL changed to: ${currentUrl}`);
        }
      });
      
      observer.observe(body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Initialize functionality
  function initialize() {
    setupLogging();
    setupErrorTracking();
    trackUrlChanges();
    
    console.log('App utilities initialized');
  }

  // Run on page load
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
