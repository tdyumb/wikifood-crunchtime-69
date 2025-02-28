
// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Changing text animation
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
  
  // Event listeners
  const trailerButton = document.querySelector('.trailer-button');
  if (trailerButton) {
    trailerButton.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
      showToast('Opening video trailer...');
    });
  }
  
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      const recipeFilter = document.getElementById('recipe-filter');
      
      if (recipeFilter) {
        recipeFilter.style.display = 'block';
        recipeFilter.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      const recipeResults = document.getElementById('recipe-results');
      if (recipeResults) {
        recipeResults.style.display = 'block';
        displayRecipes(sampleRecipes);
        recipeResults.scrollIntoView({ behavior: 'smooth' });
        showToast('Found recipes matching your criteria');
      }
    });
  }
});

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

// Display recipes
function displayRecipes(recipes) {
  const recipeResults = document.getElementById('recipe-results');
  if (!recipeResults) return;
  
  recipeResults.innerHTML = '';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const heading = document.createElement('h2');
  heading.className = 'section-title';
  heading.textContent = 'Featured Recipes';
  container.appendChild(heading);
  
  const recipeGrid = document.createElement('div');
  recipeGrid.className = 'recipe-grid';
  
  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    const tagsHtml = recipe.dietaryRestrictions.length > 0 
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
          <span>⏱️ ${recipe.cookTime}</span>
          <span>👥 ${recipe.servings} servings</span>
        </div>
        <button class="recipe-button" data-recipe-id="${recipe.id}">View Recipe</button>
      </div>
    `;
    
    recipeGrid.appendChild(card);
  });
  
  container.appendChild(recipeGrid);
  recipeResults.appendChild(container);
  
  // Add click events to recipe buttons
  document.querySelectorAll('.recipe-button').forEach(button => {
    button.addEventListener('click', () => {
      const recipeId = parseInt(button.getAttribute('data-recipe-id'));
      const recipe = sampleRecipes.find(r => r.id === recipeId);
      if (recipe) {
        showRecipeModal(recipe);
      }
    });
  });
}

// Show recipe modal
function showRecipeModal(recipe) {
  // Remove any existing modal
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // Generate ingredients HTML
  const ingredientsHtml = recipe.ingredients.map(ingredient => 
    `<li>${ingredient}</li>`
  ).join('');
  
  // Generate instructions HTML
  const instructionsHtml = recipe.instructions.map((instruction, index) => 
    `<li>${instruction}</li>`
  ).join('');
  
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; border-radius: 0.5rem; margin: 1rem 0;">
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: #f8f9fa; padding: 0.5rem; border-radius: 0.25rem; flex: 1;">
          <strong>Cook Time:</strong> ${recipe.cookTime}
        </div>
        <div style="background: #f8f9fa; padding: 0.5rem; border-radius: 0.25rem; flex: 1;">
          <strong>Servings:</strong> ${recipe.servings}
        </div>
      </div>
      <h3 style="margin-top: 1.5rem;">Ingredients</h3>
      <ul style="margin-left: 1.5rem;">
        ${ingredientsHtml}
      </ul>
      <h3 style="margin-top: 1.5rem;">Instructions</h3>
      <ol style="margin-left: 1.5rem;">
        ${instructionsHtml}
      </ol>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
  
  // Close modal events
  const closeButton = modal.querySelector('.close-modal');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  });
}

// Sample recipe data
const sampleRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh mozzarella, tomatoes, and basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500",
    cookTime: "30 min",
    servings: 4,
    dietaryRestrictions: ["vegetarian"],
    ingredients: [
      "1 pizza dough",
      "3 tablespoons tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Top with slices of fresh mozzarella.",
      "Bake for 10-12 minutes until crust is golden.",
      "Garnish with fresh basil leaves, olive oil, salt, and pepper."
    ]
  },
  {
    id: 2,
    title: "Spicy Chicken Stir Fry",
    description: "Quick and flavorful chicken stir fry with vegetables and a spicy sauce.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500",
    cookTime: "20 min",
    servings: 3,
    dietaryRestrictions: ["dairy-free"],
    ingredients: [
      "1 lb chicken breast, cubed",
      "1 red bell pepper, sliced",
      "1 cup broccoli florets",
      "2 carrots, julienned",
      "3 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "3 tbsp soy sauce",
      "1 tbsp sriracha sauce",
      "2 tbsp vegetable oil"
    ],
    instructions: [
      "Heat oil in a wok or large skillet over high heat.",
      "Add chicken and cook until no longer pink, about 5-6 minutes.",
      "Add garlic and ginger, cook for 30 seconds until fragrant.",
      "Add vegetables and stir-fry for 3-4 minutes until crisp-tender.",
      "Mix soy sauce and sriracha, pour over the stir-fry.",
      "Cook for another 1-2 minutes until sauce thickens slightly.",
      "Serve hot over rice or noodles."
    ]
  },
  {
    id: 3,
    title: "Avocado and Egg Toast",
    description: "A simple yet nutritious breakfast with creamy avocado and perfectly cooked eggs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500",
    cookTime: "10 min",
    servings: 2,
    dietaryRestrictions: ["vegetarian"],
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Toast the bread until golden and crispy.",
      "While bread is toasting, heat olive oil in a non-stick pan over medium heat.",
      "Crack eggs into the pan and cook to your preference (sunny-side up, over-easy, etc.).",
      "Mash the avocado and spread it evenly on the toast.",
      "Top each toast with an egg.",
      "Season with salt, pepper, and red pepper flakes if desired."
    ]
  }
];
