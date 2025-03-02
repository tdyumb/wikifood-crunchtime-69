
document.addEventListener('DOMContentLoaded', function() {
  // Recipe data (converted from the original TypeScript data)
  const recipeData = [
    {
      id: '1',
      title: 'Classic Italian Pasta Carbonara',
      description: 'A creamy Roman pasta dish made with eggs, cheese, pancetta, and black pepper',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800',
      cuisineType: 'italian',
      mealType: 'dinner',
      dietaryRestrictions: [],
      cookTime: '25 mins',
      servings: 4,
      ingredients: [
        '400g spaghetti',
        '200g pancetta or guanciale, diced',
        '4 large eggs',
        '100g Pecorino Romano, freshly grated',
        '100g Parmigiano Reggiano, freshly grated',
        'Fresh black pepper',
        'Sea salt',
        '2 cloves garlic, minced (optional)',
        '2 tablespoons olive oil'
      ],
      instructions: [
        'Bring a large pot of salted water to boil',
        'While waiting, whisk eggs in a bowl with grated cheeses and plenty of black pepper',
        'Cook spaghetti according to package instructions until al dente',
        'While pasta cooks, sauté pancetta in olive oil until crispy (about 5 minutes)',
        'Add minced garlic to pancetta if using, cook for 30 seconds',
        'Reserve 1 cup of pasta water before draining',
        'Working quickly, add hot pasta to pancetta pan',
        'Remove pan from heat, add egg mixture while constantly tossing',
        'Add pasta water gradually until creamy consistency is achieved',
        'Serve immediately with extra cheese and black pepper'
      ]
    },
    {
      id: '2',
      title: 'Vegetarian Buddha Bowl',
      description: 'A nourishing bowl filled with quinoa, roasted vegetables, and tahini dressing',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800',
      cuisineType: 'american',
      mealType: 'lunch',
      dietaryRestrictions: ['vegetarian', 'vegan'],
      cookTime: '35 mins',
      servings: 2,
      ingredients: [
        '1 cup quinoa',
        '2 sweet potatoes, cubed',
        '1 can chickpeas, drained and rinsed',
        '2 cups fresh kale, chopped',
        '1 ripe avocado',
        '2 tablespoons tahini',
        '3 tablespoons olive oil',
        '1 lemon, juiced',
        '1 teaspoon cumin',
        '1 teaspoon paprika',
        'Salt and pepper to taste',
        '1/4 cup mixed seeds (pumpkin, sunflower)'
      ],
      instructions: [
        'Preheat oven to 400°F (200°C)',
        'Rinse quinoa and cook according to package instructions',
        'Toss sweet potatoes with 1 tbsp olive oil, cumin, salt, and pepper',
        'Spread sweet potatoes on baking sheet, roast for 25 minutes',
        'Toss chickpeas with 1 tbsp olive oil, paprika, salt, and pepper',
        'Add chickpeas to another baking sheet, roast for 20 minutes until crispy',
        'Massage kale with 1 tbsp olive oil and lemon juice',
        'Make dressing by whisking tahini, remaining lemon juice, and water',
        'Slice avocado',
        'Assemble bowls: quinoa base, roasted vegetables, chickpeas, kale',
        'Top with avocado slices and mixed seeds',
        'Drizzle with tahini dressing'
      ]
    },
    {
      id: '3',
      title: 'Keto Chicken Alfredo',
      description: 'Low-carb version of the classic pasta dish using zucchini noodles',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800',
      cuisineType: 'italian',
      mealType: 'dinner',
      dietaryRestrictions: ['low-carb', 'keto'],
      cookTime: '30 mins',
      servings: 4,
      ingredients: [
        '4 medium zucchini',
        '2 large chicken breasts',
        '2 cups heavy cream',
        '4 oz cream cheese',
        '1 cup parmesan cheese, grated',
        '4 cloves garlic, minced',
        '4 tablespoons butter',
        '1 tablespoon Italian seasoning',
        'Salt and pepper to taste',
        '2 tablespoons olive oil',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Spiralize zucchini into noodles, set aside on paper towels',
        'Season chicken breasts with Italian seasoning, salt, and pepper',
        'Heat olive oil in a large skillet over medium-high heat',
        'Cook chicken until golden and cooked through (6-7 minutes per side)',
        'Remove chicken, let rest, then slice',
        'In the same pan, melt butter and sauté garlic until fragrant',
        'Add heavy cream and cream cheese, simmer until cream cheese melts',
        'Stir in parmesan cheese until sauce thickens',
        'Add chicken back to pan',
        'Add zucchini noodles, toss gently for 2-3 minutes until just tender',
        'Season with salt and pepper to taste',
        'Garnish with fresh parsley and serve'
      ]
    }
  ];
  
  // Initial state for filters
  const filters = {
    cuisineType: ['all'],
    mealType: ['all'],
    dietaryRestrictions: ['all']
  };
  
  // Function to filter recipes based on current filters
  function getFilteredRecipes() {
    return recipeData.filter(recipe => {
      // Check cuisine type
      const cuisineMatch = filters.cuisineType.includes('all') || 
                          filters.cuisineType.includes(recipe.cuisineType);
      
      // Check meal type
      const mealMatch = filters.mealType.includes('all') || 
                        filters.mealType.includes(recipe.mealType);
      
      // Check dietary restrictions
      const dietaryMatch = filters.dietaryRestrictions.includes('all') || 
                           recipe.dietaryRestrictions.some(restriction => 
                             filters.dietaryRestrictions.includes(restriction));
      
      return cuisineMatch && mealMatch && dietaryMatch;
    });
  }
  
  // Function to render recipes to the page
  function renderRecipes() {
    const recipesContainer = document.getElementById('recipesContainer');
    if (!recipesContainer) return;
    
    const filteredRecipes = getFilteredRecipes();
    let recipesHTML = '';
    
    filteredRecipes.forEach(recipe => {
      recipesHTML += `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
          <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
              <div class="recipe-meta-item">
                <i class="ri-time-line"></i>
                <span>${recipe.cookTime}</span>
              </div>
              <div class="recipe-meta-item">
                <i class="ri-user-line"></i>
                <span>${recipe.servings} servings</span>
              </div>
            </div>
            <button class="view-recipe-button">View Recipe</button>
          </div>
        </div>
      `;
    });
    
    recipesContainer.innerHTML = recipesHTML;
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe-button').forEach(button => {
      button.addEventListener('click', function() {
        const recipeCard = this.closest('.recipe-card');
        const recipeId = recipeCard.dataset.recipeId;
        openRecipeDialog(recipeId);
      });
    });
  }
  
  // Function to open recipe dialog
  function openRecipeDialog(recipeId) {
    const recipe = recipeData.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const recipeDialog = document.getElementById('recipeDialog');
    const dialogContent = recipeDialog.querySelector('.recipe-dialog-content');
    
    let ingredientsList = '';
    recipe.ingredients.forEach(ingredient => {
      ingredientsList += `<li>${ingredient}</li>`;
    });
    
    let instructionsList = '';
    recipe.instructions.forEach((instruction, index) => {
      instructionsList += `
        <li class="step-item">
          <span class="step-number">${index + 1}</span>
          <p>${instruction}</p>
        </li>
      `;
    });
    
    let sweetnessTagsHtml = '';
    if (recipe.dietaryRestrictions && recipe.dietaryRestrictions.length > 0) {
      sweetnessTagsHtml = '<div class="sweetness-tags">';
      recipe.dietaryRestrictions.forEach(tag => {
        sweetnessTagsHtml += `<span class="sweetness-tag">${tag}</span>`;
      });
      sweetnessTagsHtml += '</div>';
    }
    
    dialogContent.innerHTML = `
      <div class="dialog-header">
        <h2 class="dialog-title">${recipe.title}</h2>
        <button class="dialog-close">&times;</button>
      </div>
      
      <img src="${recipe.image}" alt="${recipe.title}" class="dialog-image">
      
      <div class="recipe-info-grid">
        <div class="info-item">
          <p class="info-label">Prep Time</p>
          <p class="info-value">15 min</p>
        </div>
        <div class="info-item">
          <p class="info-label">Cook Time</p>
          <p class="info-value">${recipe.cookTime}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Difficulty</p>
          <p class="info-value">Beginner</p>
        </div>
        <div class="info-item">
          <p class="info-label">Yield</p>
          <p class="info-value">${recipe.servings} servings</p>
        </div>
      </div>
      
      ${sweetnessTagsHtml}
      
      <div class="recipe-section">
        <h3 class="recipe-section-title">Ingredients</h3>
        <ul class="ingredients-list">
          ${ingredientsList}
        </ul>
      </div>
      
      <div class="recipe-section">
        <h3 class="recipe-section-title">Steps</h3>
        <ol class="steps-list">
          ${instructionsList}
        </ol>
      </div>
      
      <div class="safety-tips">
        <h3 class="safety-tips-title">Safety Tips</h3>
        <ul class="safety-tips-list">
          <li>• Use oven mitts when handling hot dishes</li>
          <li>• Keep children supervised in the kitchen</li>
          <li>• Ensure all ingredients are fresh and properly stored</li>
        </ul>
      </div>
    `;
    
    // Show the dialog
    recipeDialog.classList.add('open');
    
    // Add close button event listener
    const closeButton = dialogContent.querySelector('.dialog-close');
    closeButton.addEventListener('click', function() {
      recipeDialog.classList.remove('open');
    });
    
    // Close dialog when clicking outside
    recipeDialog.addEventListener('click', function(e) {
      if (e.target === recipeDialog) {
        recipeDialog.classList.remove('open');
      }
    });
  }
  
  // Initial render
  renderRecipes();
  
  // Make functions available globally
  window.recipeApp = {
    renderRecipes,
    updateFilters: function(newFilters) {
      filters.cuisineType = newFilters.cuisineType;
      filters.mealType = newFilters.mealType;
      filters.dietaryRestrictions = newFilters.dietaryRestrictions;
      renderRecipes();
    }
  };
});
