import { createContext, useContext, useState, ReactNode } from 'react';
import { recipeData } from '../data/recipes';

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
    cuisineType: string[];
    mealType: string[];
    dietaryRestrictions: string[];
  };
  setFilters: (filters: { cuisineType: string[]; mealType: string[]; dietaryRestrictions: string[] }) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes] = useState<Recipe[]>(recipeData);

  const [filters, setFilters] = useState({
    cuisineType: [],
    mealType: [],
    dietaryRestrictions: [],
  });

  const filteredRecipes = recipes.filter(recipe => {
    if (filters.cuisineType.length > 0 && !filters.cuisineType.includes('all') && !filters.cuisineType.includes(recipe.cuisineType)) return false;
    if (filters.mealType.length > 0 && !filters.mealType.includes('all') && !filters.mealType.includes(recipe.mealType)) return false;
    if (filters.dietaryRestrictions.length > 0 && !filters.dietaryRestrictions.includes('all') && !recipe.dietaryRestrictions.some(r => filters.dietaryRestrictions.includes(r))) return false;
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