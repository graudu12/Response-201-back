import { IngredientCollection } from '../db/models/recipe.js';

export const getAllIngredients = async () => {
  return await IngredientCollection.find();
};
