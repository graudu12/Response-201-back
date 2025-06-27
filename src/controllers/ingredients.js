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
  const recipes = await searchRecipesByIngredients(ingredientNames);

  res.status(200).json({
    status: 200,
    message: 'Recipes with selected ingredients found successfully!',
    data: recipes,
  });
};
