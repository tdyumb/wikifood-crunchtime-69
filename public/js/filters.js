
document.addEventListener('DOMContentLoaded', function() {
  // Filter configurations
  const cuisineTypes = ["all", "italian", "chinese", "american", "mexican"];
  const mealTypes = ["all", "breakfast", "lunch", "dinner"];
  const dietaryTags = [
    "all", "vegetarian", "vegan", "gluten-free", "dairy-free", 
    "low-carb", "keto", "paleo", "whole30", "pescatarian"
  ];
  
  // Current filter state
  const filters = {
    cuisineType: ['all'],
    mealType: ['all'],
    dietaryRestrictions: ['all']
  };
  
  // Icon mapping functions
  function getCuisineIcon(cuisine) {
    switch (cuisine.toLowerCase()) {
      case 'all':
        return 'ri-global-line';
      case 'italian':
        return 'ri-pizza-line';
      case 'chinese':
        return 'ri-restaurant-line';
      case 'american':
        return 'ri-flag-line';
      case 'mexican':
        return 'ri-restaurant-2-line';
      default:
        return 'ri-restaurant-line';
    }
  }
  
  function getMealIcon(meal) {
    switch (meal.toLowerCase()) {
      case 'all':
        return 'ri-restaurant-line';
      case 'breakfast':
        return 'ri-cup-line';
      case 'lunch':
        return 'ri-bowl-line';
      case 'dinner':
        return 'ri-restaurant-line';
      default:
        return 'ri-restaurant-line';
    }
  }
  
  function getDietaryIcon(tag) {
    switch (tag.toLowerCase()) {
      case 'all':
        return 'ri-restaurant-line';
      case 'vegetarian':
        return 'ri-plant-line';
      case 'vegan':
        return 'ri-seedling-line';
      case 'gluten-free':
        return 'ri-forbidden-line';
      case 'dairy-free':
        return 'ri-drop-line';
      case 'low-carb':
        return 'ri-heart-line';
      case 'keto':
        return 'ri-apple-line';
      case 'paleo':
        return 'ri-leaf-line';
      case 'whole30':
        return 'ri-heart-line';
      case 'pescatarian':
        return 'ri-fish-line';
      default:
        return 'ri-restaurant-line';
    }
  }
  
  // Initialize dropdown options
  function initializeDropdowns() {
    const cuisineOptions = document.getElementById('cuisineOptions');
    const mealOptions = document.getElementById('mealOptions');
    const dietaryOptions = document.getElementById('dietaryOptions');
    
    // Populate cuisine options
    if (cuisineOptions) {
      cuisineOptions.innerHTML = '';
      cuisineTypes.forEach(cuisine => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `
          <label>
            <input type="checkbox" class="dropdown-checkbox" value="${cuisine}" ${cuisine === 'all' ? 'checked' : ''}>
            ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
            <i class="${getCuisineIcon(cuisine)}"></i>
          </label>
        `;
        cuisineOptions.appendChild(item);
      });
    }
    
    // Populate meal options
    if (mealOptions) {
      mealOptions.innerHTML = '';
      mealTypes.forEach(meal => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `
          <label>
            <input type="checkbox" class="dropdown-checkbox" value="${meal}" ${meal === 'all' ? 'checked' : ''}>
            ${meal.charAt(0).toUpperCase() + meal.slice(1)}
            <i class="${getMealIcon(meal)}"></i>
          </label>
        `;
        mealOptions.appendChild(item);
      });
    }
    
    // Populate dietary options
    if (dietaryOptions) {
      dietaryOptions.innerHTML = '';
      dietaryTags.forEach(tag => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `
          <label>
            <input type="checkbox" class="dropdown-checkbox" value="${tag}" ${tag === 'all' ? 'checked' : ''}>
            ${tag.charAt(0).toUpperCase() + tag.slice(1)}
            <i class="${getDietaryIcon(tag)}"></i>
          </label>
        `;
        dietaryOptions.appendChild(item);
      });
    }
  }
  
  // Initialize dropdown toggles
  function initializeDropdownToggles() {
    const cuisineDropdown = document.getElementById('cuisineDropdown');
    const mealDropdown = document.getElementById('mealDropdown');
    const dietaryDropdown = document.getElementById('dietaryDropdown');
    
    if (cuisineDropdown) {
      const button = cuisineDropdown.querySelector('.dropdown-button');
      const content = cuisineDropdown.querySelector('.dropdown-content');
      
      button.addEventListener('click', function() {
        content.classList.toggle('hidden');
      });
      
      // Close when clicking outside
      document.addEventListener('click', function(e) {
        if (!cuisineDropdown.contains(e.target)) {
          content.classList.add('hidden');
        }
      });
    }
    
    if (mealDropdown) {
      const button = mealDropdown.querySelector('.dropdown-button');
      const content = mealDropdown.querySelector('.dropdown-content');
      
      button.addEventListener('click', function() {
        content.classList.toggle('hidden');
      });
      
      // Close when clicking outside
      document.addEventListener('click', function(e) {
        if (!mealDropdown.contains(e.target)) {
          content.classList.add('hidden');
        }
      });
    }
    
    if (dietaryDropdown) {
      const button = dietaryDropdown.querySelector('.dropdown-button');
      const content = dietaryDropdown.querySelector('.dropdown-content');
      
      button.addEventListener('click', function() {
        content.classList.toggle('hidden');
      });
      
      // Close when clicking outside
      document.addEventListener('click', function(e) {
        if (!dietaryDropdown.contains(e.target)) {
          content.classList.add('hidden');
        }
      });
    }
  }
  
  // Handle checkbox changes
  function initializeCheckboxHandlers() {
    // Cuisine checkboxes
    document.querySelectorAll('#cuisineOptions .dropdown-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const cuisine = this.value;
        
        if (cuisine === 'all') {
          // If 'all' is checked, uncheck others
          if (this.checked) {
            filters.cuisineType = ['all'];
            document.querySelectorAll('#cuisineOptions .dropdown-checkbox').forEach(cb => {
              if (cb.value !== 'all') cb.checked = false;
            });
          } else {
            filters.cuisineType = [];
          }
        } else {
          // If specific cuisine is checked
          if (this.checked) {
            // Uncheck 'all'
            const allCheckbox = document.querySelector('#cuisineOptions .dropdown-checkbox[value="all"]');
            if (allCheckbox) allCheckbox.checked = false;
            
            // Add to filters
            if (filters.cuisineType.includes('all')) {
              filters.cuisineType = [cuisine];
            } else {
              filters.cuisineType.push(cuisine);
            }
          } else {
            // Remove from filters
            filters.cuisineType = filters.cuisineType.filter(c => c !== cuisine);
          }
        }
        
        updateSelectedIcons();
      });
    });
    
    // Meal checkboxes
    document.querySelectorAll('#mealOptions .dropdown-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const meal = this.value;
        
        if (meal === 'all') {
          // If 'all' is checked, uncheck others
          if (this.checked) {
            filters.mealType = ['all'];
            document.querySelectorAll('#mealOptions .dropdown-checkbox').forEach(cb => {
              if (cb.value !== 'all') cb.checked = false;
            });
          } else {
            filters.mealType = [];
          }
        } else {
          // If specific meal is checked
          if (this.checked) {
            // Uncheck 'all'
            const allCheckbox = document.querySelector('#mealOptions .dropdown-checkbox[value="all"]');
            if (allCheckbox) allCheckbox.checked = false;
            
            // Add to filters
            if (filters.mealType.includes('all')) {
              filters.mealType = [meal];
            } else {
              filters.mealType.push(meal);
            }
          } else {
            // Remove from filters
            filters.mealType = filters.mealType.filter(m => m !== meal);
          }
        }
        
        updateSelectedIcons();
      });
    });
    
    // Dietary checkboxes
    document.querySelectorAll('#dietaryOptions .dropdown-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const dietary = this.value;
        
        if (dietary === 'all') {
          // If 'all' is checked, uncheck others
          if (this.checked) {
            filters.dietaryRestrictions = ['all'];
            document.querySelectorAll('#dietaryOptions .dropdown-checkbox').forEach(cb => {
              if (cb.value !== 'all') cb.checked = false;
            });
          } else {
            filters.dietaryRestrictions = [];
          }
        } else {
          // If specific dietary is checked
          if (this.checked) {
            // Uncheck 'all'
            const allCheckbox = document.querySelector('#dietaryOptions .dropdown-checkbox[value="all"]');
            if (allCheckbox) allCheckbox.checked = false;
            
            // Add to filters
            if (filters.dietaryRestrictions.includes('all')) {
              filters.dietaryRestrictions = [dietary];
            } else {
              filters.dietaryRestrictions.push(dietary);
            }
          } else {
            // Remove from filters
            filters.dietaryRestrictions = filters.dietaryRestrictions.filter(d => d !== dietary);
          }
        }
        
        updateSelectedIcons();
      });
    });
  }
  
  // Update selected icons in dropdowns
  function updateSelectedIcons() {
    const selectedCuisines = document.getElementById('selectedCuisines');
    const selectedMeals = document.getElementById('selectedMeals');
    const selectedDietary = document.getElementById('selectedDietary');
    
    if (selectedCuisines) {
      selectedCuisines.innerHTML = '';
      filters.cuisineType.forEach(cuisine => {
        const icon = document.createElement('i');
        icon.className = getCuisineIcon(cuisine);
        selectedCuisines.appendChild(icon);
      });
    }
    
    if (selectedMeals) {
      selectedMeals.innerHTML = '';
      filters.mealType.forEach(meal => {
        const icon = document.createElement('i');
        icon.className = getMealIcon(meal);
        selectedMeals.appendChild(icon);
      });
    }
    
    if (selectedDietary) {
      selectedDietary.innerHTML = '';
      filters.dietaryRestrictions.forEach(dietary => {
        const icon = document.createElement('i');
        icon.className = getDietaryIcon(dietary);
        selectedDietary.appendChild(icon);
      });
    }
  }
  
  // Find Recipes button handler
  function initializeFindRecipesButton() {
    const findRecipesButton = document.getElementById('findRecipesButton');
    
    if (findRecipesButton) {
      findRecipesButton.addEventListener('click', function() {
        // Apply filters to recipes
        if (window.recipeApp) {
          window.recipeApp.updateFilters(filters);
        }
        
        // Show toast
        if (window.showToast) {
          window.showToast('Filters Applied', 'Your recipe list has been updated based on your selections.');
        }
      });
    }
  }
  
  // Initialize all filter functionality
  initializeDropdowns();
  initializeDropdownToggles();
  initializeCheckboxHandlers();
  initializeFindRecipesButton();
  updateSelectedIcons();
});
