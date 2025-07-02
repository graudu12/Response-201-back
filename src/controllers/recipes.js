import {
  createRecipes,
  deleteRecipeFromFavorites,
  addRecipeToFavorites,
  getAllRecipes,
  getRecipeById,
  deleteOwnRecipe,
} from '../services/recipes.js';
import { UserCollection } from '../db/models/user.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAllRecipesController = async (req, res) => {
  const userId = req.user?.id; // если пользователь авторизован
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = await parseFilterParams(req.query);

  const { recipes, ...paginationData } = await getAllRecipes({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  let favoriteRecipeIds = [];
  if (userId) {
    const user = await UserCollection.findById(userId).select(
      'favoriteRecipes',
    );
    favoriteRecipeIds = user?.favoriteRecipes.map((id) => id.toString()) || [];
  }

  const enrichedRecipes = recipes.map((recipe) => ({
    ...recipe.toObject(),
    isFavorite: favoriteRecipeIds.includes(recipe._id.toString()),
  }));

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: { enrichedRecipes, ...paginationData },
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
  const recipe = await getRecipeById(recipeId);

  res.status(200).json({
    status: 200,
    message: `Successfully found recipe with id ${recipeId}!`,
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
  const updatedUser = await addRecipeToFavorites(userId, recipeId);
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Recipe added to favorites' });
};

export const deleteOwnRecipeController = async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user._id;

  const result = await deleteOwnRecipe(recipeId, userId);

  res.status(200).json({
    status: 200,
    message: `The recipe has been successfully removed.`,
    data: result,
  });
};
