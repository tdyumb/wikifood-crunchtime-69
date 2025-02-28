
// DOM Elements
const searchButton = document.getElementById('search-button');
const cuisineSelect = document.getElementById('cuisine-select');
const mealSelect = document.getElementById('meal-select');
const dietaryCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
const recipeResults = document.getElementById('recipe-results');

// Sample recipes data
const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh mozzarella, tomatoes, and basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "30 min",
    servings: 4,
    cuisineType: ["italian"],
    mealType: ["dinner", "lunch"],
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
    ],
    difficulty: "Easy",
    prepTime: "15 min"
  },
  {
    id: 2,
    title: "Kung Pao Chicken",
    description: "Spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "20 min",
    servings: 3,
    cuisineType: ["chinese"],
    mealType: ["dinner"],
    dietaryRestrictions: [],
    ingredients: [
      "1 lb chicken breast, cubed",
      "1 red bell pepper, diced",
      "1 zucchini, diced",
      "1/2 cup peanuts",
      "4 dried chili peppers",
      "2 cloves garlic, minced",
      "Kung Pao sauce",
      "2 tablespoons vegetable oil"
    ],
    instructions: [
      "Heat oil in a wok over high heat.",
      "Add dried chili peppers and garlic, stir-fry for 30 seconds.",
      "Add chicken and stir-fry until no longer pink.",
      "Add bell pepper and zucchini, stir-fry for 2 minutes.",
      "Pour in Kung Pao sauce and bring to a simmer.",
      "Add peanuts, toss to coat everything in the sauce.",
      "Serve hot with steamed rice."
    ],
    difficulty: "Medium",
    prepTime: "15 min"
  },
  {
    id: 3,
    title: "Classic American Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce, served on a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "15 min",
    servings: 4,
    cuisineType: ["american"],
    mealType: ["lunch", "dinner"],
    dietaryRestrictions: [],
    ingredients: [
      "1 lb ground beef (80/20 blend)",
      "4 hamburger buns",
      "4 slices American cheese",
      "1 tomato, sliced",
      "Lettuce leaves",
      "1 red onion, sliced",
      "Ketchup and mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions and form into patties.",
      "Season patties with salt and pepper.",
      "Heat grill or skillet to medium-high heat.",
      "Cook patties for 3-4 minutes per side for medium doneness.",
      "Top each patty with a slice of cheese during the last minute.",
      "Toast hamburger buns lightly.",
      "Assemble burgers with lettuce, tomato, onion, and condiments."
    ],
    difficulty: "Easy",
    prepTime: "10 min"
  },
  {
    id: 4,
    title: "Authentic Guacamole",
    description: "Fresh and zesty Mexican dip made with ripe avocados, lime, and cilantro.",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "10 min",
    servings: 6,
    cuisineType: ["mexican"],
    mealType: ["snack"],
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1/2 red onion, finely diced",
      "2 Roma tomatoes, diced",
      "1/4 cup cilantro, chopped",
      "1 jalapeño, minced (optional)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cut avocados in half, remove pits, and scoop flesh into a bowl.",
      "Mash avocados with a fork to desired consistency.",
      "Add lime juice, onion, tomatoes, cilantro, and jalapeño.",
      "Mix gently to combine.",
      "Season with salt and pepper to taste.",
      "Serve immediately with tortilla chips."
    ],
    difficulty: "Easy",
    prepTime: "10 min"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    description: "Quick and healthy vegetable stir fry with a savory sauce.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "15 min",
    servings: 2,
    cuisineType: ["chinese"],
    mealType: ["lunch", "dinner"],
    dietaryRestrictions: ["vegetarian", "vegan", "dairy-free"],
    ingredients: [
      "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, minced",
      "2 tablespoons vegetable oil",
      "2 tablespoons soy sauce",
      "1 tablespoon rice vinegar",
      "1 teaspoon sesame oil",
      "1 teaspoon cornstarch mixed with 2 tablespoons water"
    ],
    instructions: [
      "Heat vegetable oil in a wok or large skillet over high heat.",
      "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
      "Add vegetables and stir-fry for 3-4 minutes until crisp-tender.",
      "In a small bowl, mix soy sauce, rice vinegar, and sesame oil.",
      "Pour sauce over vegetables and toss to coat.",
      "Add cornstarch slurry and stir until sauce thickens.",
      "Serve hot over rice or noodles."
    ],
    difficulty: "Easy",
    prepTime: "10 min"
  },
  {
    id: 6,
    title: "Avocado Toast with Poached Egg",
    description: "Creamy avocado on toasted bread topped with a perfectly poached egg.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cookTime: "10 min",
    servings: 1,
    cuisineType: ["american"],
    mealType: ["breakfast"],
    dietaryRestrictions: ["vegetarian"],
    ingredients: [
      "1 slice of bread (sourdough or whole grain)",
      "1/2 ripe avocado",
      "1 egg",
      "1 tablespoon white vinegar",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "Fresh herbs (optional)"
    ],
    instructions: [
      "Toast the bread until golden and crispy.",
      "Fill a small pot with water and add vinegar. Bring to a gentle simmer.",
      "Mash the avocado and spread it on the toast. Season with salt and pepper.",
      "Crack the egg into a small cup.",
      "Create a whirlpool in the simmering water and gently slide the egg in.",
      "Poach for 3-4 minutes for a runny yolk.",
      "Remove egg with a slotted spoon and place on top of the avocado toast.",
      "Season with salt, pepper, and red pepper flakes if desired."
    ],
    difficulty: "Medium",
    prepTime: "5 min"
  }
];

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  displayRecipes(recipes);
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    });
  }
});

searchButton.addEventListener('click', handleSearch);

// Functions
function handleSearch() {
  const filters = {
    cuisine: cuisineSelect.value,
    mealType: mealSelect.value,
    dietary: Array.from(dietaryCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
  };
  
  // Filter recipes based on selected criteria
  const filteredRecipes = recipes.filter(recipe => {
    // Filter by cuisine
    const cuisineMatch = filters.cuisine === 'all' || 
                         recipe.cuisineType.includes(filters.cuisine);
    
    // Filter by meal type
    const mealMatch = filters.mealType === 'all' || 
                      recipe.mealType.includes(filters.mealType);
    
    // Filter by dietary restrictions
    let dietaryMatch = true;
    if (filters.dietary.length > 0) {
      dietaryMatch = filters.dietary.every(restriction => 
        recipe.dietaryRestrictions.includes(restriction)
      );
    }
    
    return cuisineMatch && mealMatch && dietaryMatch;
  });
  
  // Display filtered recipes
  displayRecipes(filteredRecipes);
  
  // Show notification
  showNotification(`Found ${filteredRecipes.length} recipes matching your criteria`);
}

function displayRecipes(recipesToShow) {
  // Clear current recipes
  recipeResults.innerHTML = '';
  
  if (recipesToShow.length === 0) {
    recipeResults.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <h3>No recipes found</h3>
        <p>Try adjusting your filters to find more recipes.</p>
      </div>
    `;
    return;
  }
  
  // Add recipe cards
  recipesToShow.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    
    // Create dietary tags HTML
    const tagsHTML = recipe.dietaryRestrictions.length > 0 
      ? `<div class="recipe-tags">
          ${recipe.dietaryRestrictions.map(tag => 
            `<span class="recipe-tag">${tag}</span>`
          ).join('')}
         </div>`
      : '';
    
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        ${tagsHTML}
        <div class="recipe-meta">
          <span>⏱️ ${recipe.cookTime}</span>
          <span>👥 ${recipe.servings} servings</span>
        </div>
        <button class="recipe-button" data-recipe-id="${recipe.id}">View Recipe</button>
      </div>
    `;
    
    recipeResults.appendChild(recipeCard);
  });
  
  // Add event listeners to view recipe buttons
  document.querySelectorAll('.recipe-button').forEach(button => {
    button.addEventListener('click', function() {
      const recipeId = parseInt(this.getAttribute('data-recipe-id'));
      const recipe = recipes.find(r => r.id === recipeId);
      showRecipeModal(recipe);
    });
  });
}

function showRecipeModal(recipe) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('recipe-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'recipe-modal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }
  
  // Generate ingredients list HTML
  const ingredientsHTML = recipe.ingredients.map(ingredient => 
    `<li>${ingredient}</li>`
  ).join('');
  
  // Generate instructions list HTML
  const instructionsHTML = recipe.instructions.map((instruction, index) => `
    <li class="instruction-item">
      <div class="instruction-number">${index + 1}</div>
      <div>${instruction}</div>
    </li>
  `).join('');
  
  // Populate modal with recipe details
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <img src="${recipe.image}" alt="${recipe.title}" class="modal-image">
      <h2 class="modal-title">${recipe.title}</h2>
      <div class="recipe-info">
        <div class="info-item">
          <p class="info-label">Prep Time</p>
          <p class="info-value">${recipe.prepTime}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Cook Time</p>
          <p class="info-value">${recipe.cookTime}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Servings</p>
          <p class="info-value">${recipe.servings}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Difficulty</p>
          <p class="info-value">${recipe.difficulty}</p>
        </div>
      </div>
      <h3 class="ingredients-title">Ingredients</h3>
      <ul class="ingredients-list">
        ${ingredientsHTML}
      </ul>
      <h3 class="instructions-title">Instructions</h3>
      <ol class="instructions-list">
        ${instructionsHTML}
      </ol>
    </div>
  `;
  
  // Show modal
  modal.style.display = 'block';
  
  // Add event listener to close button
  const closeButton = modal.querySelector('.close-modal');
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside of it
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Trigger animation after a small delay
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    
    // Wait for fade out animation before removing
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
