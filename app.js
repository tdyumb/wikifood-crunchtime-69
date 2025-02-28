
// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Set up event listeners
  setupMobileMenu();
  setupChangingText();
  setupButtonEvents();
  
  // Show all sections and load recipes
  document.getElementById('recipe-results').style.display = 'block';
  displayRecipes(sampleRecipes);
}

function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

function setupChangingText() {
  const changingText = document.getElementById('changing-text');
  const phrases = ['Look', 'Talk', 'Cook'];
  let currentIndex = 0;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    
    // Fade out
    changingText.style.opacity = '0';
    changingText.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      changingText.textContent = phrases[currentIndex];
      
      // Fade in
      changingText.style.opacity = '1';
      changingText.style.transform = 'translateY(0)';
    }, 500);
  }, 3000);
}

function setupButtonEvents() {
  // Watch Trailer button
  const trailerButton = document.querySelector('.trailer-button');
  if (trailerButton) {
    trailerButton.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
      showToast('Opening video trailer...');
    });
  }
  
  // Find Recipes button
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      const cuisineSelect = document.getElementById('cuisine-select');
      const mealSelect = document.getElementById('meal-select');
      const dietarySelect = document.getElementById('dietary-select');
      
      // Filter recipes based on selections
      let filteredRecipes = [...sampleRecipes];
      
      if (cuisineSelect.value) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.cuisine && recipe.cuisine.toLowerCase() === cuisineSelect.value.toLowerCase()
        );
      }
      
      if (mealSelect.value) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.mealType && recipe.mealType.toLowerCase() === mealSelect.value.toLowerCase()
        );
      }
      
      if (dietarySelect.value) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.dietaryRestrictions && recipe.dietaryRestrictions.includes(dietarySelect.value)
        );
      }
      
      // Display filtered recipes or all recipes if no filters
      displayRecipes(filteredRecipes.length > 0 ? filteredRecipes : sampleRecipes);
      
      // Scroll to results
      document.getElementById('recipe-results').scrollIntoView({ behavior: 'smooth' });
      
      showToast('Recipes updated based on your criteria');
    });
  }
  
  // Setup modal close button
  const closeModalButton = document.getElementById('close-modal');
  const modal = document.getElementById('recipe-modal');
  
  if (closeModalButton && modal) {
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    // Close when clicking outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Set up smooth scrolling for nav links
  document.querySelectorAll('.nav-link, .cta-button').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Toast notification function
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'fade-out 0.3s forwards';
    
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Display recipes in the recipe grid
function displayRecipes(recipes) {
  const recipeGrid = document.querySelector('.recipe-grid');
  if (!recipeGrid) return;
  
  recipeGrid.innerHTML = '';
  
  if (recipes.length === 0) {
    recipeGrid.innerHTML = '<p class="text-center">No recipes found matching your criteria</p>';
    return;
  }
  
  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Create tags HTML if there are any dietary restrictions
    const tagsHtml = recipe.dietaryRestrictions && recipe.dietaryRestrictions.length > 0 
      ? `<div class="recipe-tags">
          ${recipe.dietaryRestrictions.map(tag => 
            `<span class="recipe-tag">${tag}</span>`
          ).join('')}
         </div>`
      : '';
    
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        ${tagsHtml}
        <div class="recipe-meta">
          <span>⏱️ ${recipe.cookTime || '30 min'}</span>
          <span>👥 ${recipe.servings || '4'} servings</span>
        </div>
        <button class="recipe-button" data-recipe-id="${recipe.id}">View Recipe</button>
      </div>
    `;
    
    recipeGrid.appendChild(card);
    
    // Add click event to the recipe button
    const viewButton = card.querySelector('.recipe-button');
    if (viewButton) {
      viewButton.addEventListener('click', () => {
        showRecipeModal(recipe);
      });
    }
  });
}

// Show recipe modal with details
function showRecipeModal(recipe) {
  const modal = document.getElementById('recipe-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody) return;
  
  // Generate ingredients HTML
  const ingredientsHtml = recipe.ingredients && recipe.ingredients.length > 0
    ? `<ul class="ingredients-list">
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>`
    : '<p>No ingredients listed</p>';
  
  // Generate instructions HTML
  const instructionsHtml = recipe.instructions && recipe.instructions.length > 0
    ? `<ol class="instructions-list">
        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
      </ol>`
    : '<p>No instructions available</p>';
  
  modalBody.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}" class="w-full rounded-lg mb-6" style="max-height: 400px; object-fit: cover;">
    
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Cook Time</h3>
        <p>${recipe.cookTime || '30 min'}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Servings</h3>
        <p>${recipe.servings || '4'} servings</p>
      </div>
    </div>
    
    <div class="mb-6">
      <h3 class="text-xl font-semibold mb-3">Ingredients</h3>
      ${ingredientsHtml}
    </div>
    
    <div>
      <h3 class="text-xl font-semibold mb-3">Instructions</h3>
      ${instructionsHtml}
    </div>
  `;
  
  modal.style.display = 'block';
}

// Sample recipe data with expanded details that match the screenshot
const sampleRecipes = [
  {
    id: 1,
    title: "Classic Italian Pasta Carbonara",
    description: "A creamy Italian pasta dish with bacon or pancetta, eggs, and cheese.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    cookTime: "25 min",
    servings: 4,
    cuisine: "italian",
    mealType: "dinner",
    dietaryRestrictions: [],
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "100g Parmigiano Reggiano, grated",
      "2 cloves garlic, minced (optional)",
      "Black pepper, freshly ground",
      "Salt, to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente.",
      "While the pasta is cooking, heat a large skillet over medium heat. Add the pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together the eggs, grated cheeses, and plenty of black pepper.",
      "When the pasta is done, reserve 1 cup of pasta water, then drain the pasta.",
      "Working quickly, add the hot pasta to the skillet with the pancetta, tossing to combine.",
      "Remove the skillet from heat and add the egg and cheese mixture, tossing constantly to create a creamy sauce. Add some reserved pasta water if needed to loosen the sauce.",
      "Serve immediately, garnished with extra grated cheese and freshly ground black pepper."
    ]
  },
  {
    id: 2,
    title: "Vegetarian Buddha Bowl",
    description: "A nourishing bowl packed with colorful vegetables, grains, and protein.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    cookTime: "40 min",
    servings: 2,
    cuisine: "american",
    mealType: "lunch",
    dietaryRestrictions: ["vegetarian", "vegan", "dairy-free"],
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water or vegetable broth",
      "1 sweet potato, cubed",
      "1 red bell pepper, sliced",
      "1 zucchini, sliced",
      "1 cup chickpeas, drained and rinsed",
      "1 avocado, sliced",
      "2 cups mixed greens",
      "1/4 cup red cabbage, shredded",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "1 tsp paprika",
      "Salt and pepper to taste",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tbsp maple syrup",
      "Water to thin"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Cook quinoa according to package instructions, using water or vegetable broth.",
      "Toss sweet potato, bell pepper, and zucchini with 1 tbsp olive oil, cumin, paprika, salt, and pepper.",
      "Spread vegetables on a baking sheet and roast for 20-25 minutes, until tender.",
      "In a small bowl, whisk together tahini, lemon juice, maple syrup, and enough water to reach desired consistency. Season with salt.",
      "To assemble bowls, divide quinoa between two bowls. Arrange roasted vegetables, chickpeas, avocado, mixed greens, and red cabbage on top.",
      "Drizzle with tahini dressing and serve."
    ]
  },
  {
    id: 3,
    title: "Keto Chicken Alfredo",
    description: "A low-carb version of the classic chicken alfredo using zucchini noodles.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    cookTime: "30 min",
    servings: 3,
    cuisine: "italian",
    mealType: "dinner",
    dietaryRestrictions: ["gluten-free", "keto", "low-carb"],
    ingredients: [
      "3 large zucchini",
      "2 boneless, skinless chicken breasts",
      "2 tbsp olive oil, divided",
      "3 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup Parmesan cheese, grated",
      "2 tbsp cream cheese",
      "2 tbsp butter",
      "1/2 tsp dried basil",
      "1/2 tsp dried oregano",
      "Salt and pepper to taste",
      "Fresh parsley, chopped (for garnish)"
    ],
    instructions: [
      "Using a spiralizer, make zucchini noodles (zoodles). Set aside.",
      "Season chicken breasts with salt and pepper. Heat 1 tbsp olive oil in a large skillet over medium-high heat.",
      "Cook chicken for 5-7 minutes per side, until cooked through. Remove from pan and set aside.",
      "In the same pan, add remaining olive oil and minced garlic. Sauté for 30 seconds until fragrant.",
      "Reduce heat to medium-low. Add heavy cream, cream cheese, and butter. Stir until combined and smooth.",
      "Gradually stir in Parmesan cheese until melted and sauce is creamy. Add dried herbs, salt, and pepper.",
      "Slice chicken and add it back to the sauce.",
      "In a separate pan, sauté zoodles for 2-3 minutes until just tender. Don't overcook or they'll become mushy.",
      "Drain any excess water from zoodles, then add to the alfredo sauce. Toss gently to combine.",
      "Serve immediately, garnished with fresh parsley and additional Parmesan if desired."
    ]
  }
];
