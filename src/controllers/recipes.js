import createHttpError from 'http-errors';
import {
  createRecipes,
  deleteRecipeFromFavorites,
  getAllRecipes,
  getRecipeById,
} from '../services/recipes.js';
import { UserCollection } from '../db/models/user.js';
export const getAllRecipesController = async (req, res) => {
  const recipes = await getAllRecipes();

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: recipes,
  });
};

export const createRecipesController = async (req, res) => {
  const recipe = await createRecipes(req.body);

  res.status(200).json({
    status: 200,
    message: 'Successfully create a recipe!',
    data: recipe,
  });
};

export const getRecipeByIdController = async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await getRecipeById({ _id: recipeId });

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${recipeId}!`,
    data: recipe,
  });
};

export const deleteRecipeToFavoritesController = async (req, res) => {
  const { recipeId } = req.params;

  const user = await deleteRecipeFromFavorites(req.user.id, recipeId);

  res.status(200).json({
    status: 200,
    message: `The recipe has been successfully removed from favorites.`,
    data: user,
  });
};

export const addRecipeToFavoritesController = async (req, res, next) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  const updatedUser = await UserCollection.findByIdAndUpdate(
    userId,
    { $addToSet: { favoriteRecipes: recipeId } },
    { new: true },
  );
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Recipe added to favorites' });
};
