import { getAllIngredients } from '../services/ingredients.js';

export const getAllIngredientsController = async (req, res) => {
  const ingredients = await getAllIngredients();

  res.json({
    ingredients,
  });
};
