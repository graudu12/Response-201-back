import { searchRecipesByIngredients } from '../services/ingredients.js';

export const searchRecipesByIngredientsController = async (req, res) => {
  const { names } = req.query;

  if (!names) {
    return res.status(400).json({
      status: 400,
      message: 'Please write the ingredients!',
    });
  }

  const ingredientNames = names.split(',').map((name) => name.trim());
  console.log(ingredientNames);
  const result = await searchRecipesByIngredients(ingredientNames);

  res.status(result.status).json({
    status: result.status,
    message: result.message,
    data: result.data,
  });
};
