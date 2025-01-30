export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  dietaryRestrictions?: string;
  cuisineType: string;
  mealType: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Keto Mexican Cauliflower Rice",
    description: "A low-carb twist on Mexican rice using cauliflower, perfect for keto diet followers",
    image: "/lovable-uploads/cf315988-27df-4a7d-a92a-dac38426dd34.png",
    cookTime: "25 mins",
    servings: 4,
    ingredients: [
      "1 large head cauliflower, riced",
      "2 tablespoons olive oil",
      "1 cup cherry tomatoes, halved",
      "2 green onions, chopped",
      "1/4 cup fresh cilantro",
      "2 teaspoons Mexican spice blend",
      "1 lime, cut into wedges",
      "Salt and pepper to taste",
      "Optional: cotija cheese for garnish"
    ],
    instructions: [
      "Rice the cauliflower using a food processor or grater",
      "Heat olive oil in a large skillet over medium heat",
      "Add cauliflower rice and cook for 5-7 minutes",
      "Add Mexican spice blend and stir well",
      "Add tomatoes and cook for another 3-4 minutes",
      "Garnish with green onions, cilantro, and lime wedges",
      "Optional: sprinkle with cotija cheese before serving"
    ],
    dietaryRestrictions: "keto",
    cuisineType: "mexican",
    mealType: "dinner"
  },
  {
    id: "2",
    title: "Vegetarian Italian Stuffed Peppers",
    description: "Colorful bell peppers stuffed with Italian-seasoned vegetables and cheese",
    image: "/lovable-uploads/4a768aa6-cb69-49e9-9215-b0cf3d12e7d0.png",
    cookTime: "45 mins",
    servings: 4,
    ingredients: [
      "4 large bell peppers (mixed colors)",
      "2 cups cooked quinoa or rice",
      "1 cup marinara sauce",
      "1 cup mozzarella cheese",
      "1/2 cup grated parmesan",
      "1 cup mixed vegetables (peas, corn)",
      "2 cloves garlic, minced",
      "Fresh basil leaves",
      "Salt and pepper to taste",
      "2 tablespoons olive oil"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Cut peppers in half lengthwise and remove seeds",
      "Mix cooked quinoa/rice with marinara sauce and vegetables",
      "Fill each pepper half with the mixture",
      "Top with mozzarella and parmesan cheese",
      "Bake for 30-35 minutes until peppers are tender",
      "Garnish with fresh basil leaves before serving"
    ],
    dietaryRestrictions: "vegetarian",
    cuisineType: "italian",
    mealType: "dinner"
  },
  {
    id: "3",
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "/lovable-uploads/spaghetti-carbonara.png",
    cookTime: "20 mins",
    servings: 2,
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g grated parmesan cheese",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, cook pancetta until crispy.",
      "In a bowl, whisk eggs and mix with parmesan.",
      "Drain spaghetti and combine with pancetta.",
      "Remove from heat and quickly mix in egg mixture.",
      "Serve with parsley and extra cheese."
    ],
    dietaryRestrictions: "none",
    cuisineType: "italian",
    mealType: "dinner"
  },
  {
    id: "4",
    title: "Chicken Tikka Masala",
    description: "A popular Indian dish made with marinated chicken in a spiced tomato sauce.",
    image: "/lovable-uploads/chicken-tikka-masala.png",
    cookTime: "30 mins",
    servings: 4,
    ingredients: [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tablespoons tikka masala paste",
      "1 can coconut milk",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "Fresh cilantro for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken in yogurt and tikka masala paste for at least 1 hour.",
      "In a pan, sauté onion and garlic until soft.",
      "Add marinated chicken and cook until browned.",
      "Stir in coconut milk and simmer for 15 minutes.",
      "Serve with rice and garnish with cilantro."
    ],
    dietaryRestrictions: "none",
    cuisineType: "indian",
    mealType: "dinner"
  },
  {
    id: "5",
    title: "Beef Tacos",
    description: "Delicious beef tacos topped with fresh ingredients.",
    image: "/lovable-uploads/beef-tacos.png",
    cookTime: "15 mins",
    servings: 4,
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 taco shells",
      "1 cup lettuce, shredded",
      "1 cup tomatoes, diced",
      "1 cup cheese, shredded",
      "Sour cream and salsa for serving"
    ],
    instructions: [
      "Cook ground beef in a skillet until browned.",
      "Add taco seasoning and water, simmer for 5 minutes.",
      "Fill taco shells with beef and top with lettuce, tomatoes, and cheese.",
      "Serve with sour cream and salsa."
    ],
    dietaryRestrictions: "none",
    cuisineType: "mexican",
    mealType: "dinner"
  }
];
