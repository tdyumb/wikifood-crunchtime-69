import { italianRecipes } from './italian';
import { mexicanRecipes } from './mexican';
import { chineseRecipes } from './chinese';
import { americanRecipes } from './american';

export const recipeData = [
  ...italianRecipes,
  ...mexicanRecipes,
  ...chineseRecipes,
  ...americanRecipes
];

export type Recipe = typeof recipeData[0];