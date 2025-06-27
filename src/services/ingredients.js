import { RecipesCollection } from '../db/models/recipe.js';

export const searchRecipesByIngredients = async (ingredientNames) => {
  if (!ingredientNames || !ingredientNames.length) return [];

  const recipes = await RecipesCollection.find({
    'ingredientsList.name': { $in: ingredientNames },
  });

  return recipes;
};
