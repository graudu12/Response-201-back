import { IngredientCollection } from '../db/models/recipe.js';

export const getAllIngredients = async () => {
  const ingredients = await IngredientCollection.find({}, 'name');
  return ingredients.map((i) => i.name);
};
