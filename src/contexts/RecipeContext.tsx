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
      ingredients: ['400g spaghetti', '200g pancetta', '4 large eggs', '100g Pecorino Romano', 'Black pepper'],
      instructions: ['Boil pasta', 'Fry pancetta', 'Mix eggs and cheese', 'Combine all ingredients']
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
      ingredients: ['Quinoa', 'Sweet potato', 'Chickpeas', 'Kale', 'Tahini'],
      instructions: ['Cook quinoa', 'Roast vegetables', 'Prepare dressing', 'Assemble bowl']
    },
    {
      id: '3',
      title: 'Authentic Chinese Dumplings',
      description: 'Homemade dumplings filled with pork and vegetables',
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800',
      cuisineType: 'chinese',
      mealType: 'dinner',
      dietaryRestrictions: [],
      cookTime: '45 mins',
      servings: 6,
      ingredients: ['Ground pork', 'Napa cabbage', 'Dumpling wrappers', 'Ginger', 'Soy sauce'],
      instructions: ['Prepare filling', 'Wrap dumplings', 'Steam or fry', 'Make dipping sauce']
    },
    {
      id: '4',
      title: 'Mexican Breakfast Tacos',
      description: 'Soft tortillas filled with scrambled eggs, beans, and fresh salsa',
      image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800',
      cuisineType: 'mexican',
      mealType: 'breakfast',
      dietaryRestrictions: ['vegetarian'],
      cookTime: '20 mins',
      servings: 4,
      ingredients: ['Corn tortillas', 'Eggs', 'Black beans', 'Tomatoes', 'Avocado'],
      instructions: ['Warm tortillas', 'Scramble eggs', 'Heat beans', 'Prepare salsa']
    },
    {
      id: '5',
      title: 'Gluten-Free Berry Smoothie Bowl',
      description: 'A refreshing breakfast bowl packed with antioxidants and superfoods',
      image: 'https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&fit=crop&w=800',
      cuisineType: 'american',
      mealType: 'breakfast',
      dietaryRestrictions: ['gluten-free', 'vegan'],
      cookTime: '10 mins',
      servings: 1,
      ingredients: ['Mixed berries', 'Banana', 'Almond milk', 'Chia seeds', 'Granola'],
      instructions: ['Blend fruits', 'Pour in bowl', 'Add toppings', 'Serve immediately']
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