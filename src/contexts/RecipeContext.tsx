import { createContext, useContext, useState, ReactNode } from 'react';

type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  cuisineType: string;
  mealType: string;
  dietaryRestrictions: string[];
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
};

type RecipeContextType = {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  filters: {
    cuisineType: string;
    mealType: string;
    dietaryRestrictions: string;
  };
  setFilters: (filters: { cuisineType: string; mealType: string; dietaryRestrictions: string }) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes] = useState<Recipe[]>([
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
        '200g pancetta, diced',
        '4 large eggs',
        '100g Pecorino Romano, grated',
        '100g Parmigiano Reggiano, grated',
        'Black pepper',
        'Salt'
      ],
      instructions: [
        'Bring a large pot of salted water to boil',
        'Cook spaghetti according to package instructions',
        'While pasta cooks, fry pancetta until crispy',
        'In a bowl, whisk eggs and mix in grated cheeses',
        'Reserve 1 cup pasta water before draining',
        'Mix hot pasta with pancetta',
        'Off heat, quickly stir in egg mixture',
        'Add pasta water as needed for creamy consistency',
        'Season generously with black pepper'
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
        '1 can chickpeas',
        '2 cups kale',
        '1 avocado',
        '2 tbsp tahini',
        'Olive oil',
        'Lemon juice'
      ],
      instructions: [
        'Preheat oven to 400°F (200°C)',
        'Cook quinoa according to package instructions',
        'Toss sweet potatoes with olive oil and roast for 25 mins',
        'Drain and rinse chickpeas, roast with spices',
        'Massage kale with olive oil and lemon juice',
        'Make dressing by mixing tahini, lemon juice, and water',
        'Assemble bowls with quinoa base',
        'Top with roasted vegetables and chickpeas',
        'Drizzle with tahini dressing'
      ]
    },
    {
      id: '3',
      title: 'Keto Chicken Alfredo',
      description: 'Low-carb version of the classic pasta dish using zucchini noodles',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023402d?auto=format&fit=crop&w=800',
      cuisineType: 'italian',
      mealType: 'dinner',
      dietaryRestrictions: ['low-carb', 'keto'],
      cookTime: '30 mins',
      servings: 4,
      ingredients: [
        '4 medium zucchini',
        '2 chicken breasts',
        '2 cups heavy cream',
        '4 oz cream cheese',
        '1 cup parmesan cheese',
        'Garlic',
        'Butter'
      ],
      instructions: [
        'Spiralize zucchini into noodles',
        'Season and cook chicken until golden',
        'In same pan, melt butter and sauté garlic',
        'Add cream and cream cheese, simmer',
        'Stir in parmesan until sauce thickens',
        'Add chicken back to pan',
        'Toss with zucchini noodles',
        'Season with salt and pepper'
      ]
    },
    {
      id: '4',
      title: 'Vegan Mexican Tacos',
      description: 'Plant-based tacos with mushroom and walnut filling',
      image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800',
      cuisineType: 'mexican',
      mealType: 'dinner',
      dietaryRestrictions: ['vegetarian', 'vegan'],
      cookTime: '25 mins',
      servings: 4,
      ingredients: [
        'Corn tortillas',
        'Mushrooms',
        'Walnuts',
        'Taco seasoning',
        'Avocado',
        'Lime',
        'Cilantro',
        'Red onion'
      ],
      instructions: [
        'Pulse mushrooms and walnuts in food processor',
        'Season with taco seasoning',
        'Cook mixture in pan until browned',
        'Warm tortillas',
        'Prepare toppings: dice onion, chop cilantro',
        'Mash avocado with lime juice',
        'Assemble tacos',
        'Serve with lime wedges'
      ]
    },
    {
      id: '5',
      title: 'Chinese Stir-Fry Noodles',
      description: 'Quick and flavorful stir-fried noodles with vegetables',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800',
      cuisineType: 'chinese',
      mealType: 'dinner',
      dietaryRestrictions: [],
      cookTime: '20 mins',
      servings: 4,
      ingredients: [
        'Lo mein noodles',
        'Mixed vegetables',
        'Soy sauce',
        'Sesame oil',
        'Garlic',
        'Ginger',
        'Green onions'
      ],
      instructions: [
        'Cook noodles according to package',
        'Heat wok or large pan',
        'Stir-fry garlic and ginger',
        'Add vegetables, cook until crisp-tender',
        'Add noodles to pan',
        'Season with soy sauce and sesame oil',
        'Toss until well combined',
        'Garnish with green onions'
      ]
    }
  ]);

  const [filters, setFilters] = useState({
    cuisineType: '',
    mealType: '',
    dietaryRestrictions: '',
  });

  const filteredRecipes = recipes.filter(recipe => {
    if (filters.cuisineType && recipe.cuisineType !== filters.cuisineType) return false;
    if (filters.mealType && recipe.mealType !== filters.mealType) return false;
    if (filters.dietaryRestrictions && !recipe.dietaryRestrictions.includes(filters.dietaryRestrictions)) return false;
    return true;
  });

  return (
    <RecipeContext.Provider value={{ recipes, filteredRecipes, filters, setFilters }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};