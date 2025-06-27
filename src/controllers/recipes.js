import { createRecipes, deleteRecipeFromFavorites, addRecipeToFavorites, getAllRecipes, getRecipeById } from "../services/recipes.js";
import { UserCollection } from '../db/models/user.js';


export const getAllRecipesController = async (req, res) => {
    const userId = req.user?.id; // если пользователь авторизован
    const recipes = await getAllRecipes();

    let favoriteRecipeIds = [];
    if (userId) {
        const user = await UserCollection.findById(userId).select('favoriteRecipes');
        favoriteRecipeIds = user?.favoriteRecipes.map(id => id.toString()) || [];
    }

    const enrichedRecipes = recipes.map(recipe => ({
        ...recipe.toObject(),
        isFavorite: favoriteRecipeIds.includes(recipe._id.toString()),
    }));

    res.status(200).json({
        status: 200,
        message: "Successfully found recipes!",
        data: enrichedRecipes,
    });
};

export const createRecipesController = async (req, res) => {
    const recipe = await createRecipes(req.body);

    res.status(200).json({
        status: 200,
        message: "Successfully create a recipe!",
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

export const addRecipeToFavoritesController = async (req, res) => {
    const { recipeId } = req.params;
    const userId = req.user.id;

    const user = await addRecipeToFavorites(userId, recipeId);

    res.status(200).json({
        status: 200,
        message: `Recipe with id ${recipeId} successfully added to favorites.`,
        data: user,
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
