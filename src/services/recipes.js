import { RecipesCollection } from "../db/models/recipe.js";
import { UserCollection } from "../db/models/user.js";

export const getRecipeById = async (recipeId) => {
    const recipe = await RecipesCollection.findById(recipeId);
    return recipe;
};

export const getAllRecipes = async () => {
    const recipes = await RecipesCollection.find();
    return recipes;

};

export const createRecipes = async (payload) => {
    const recipe = await RecipesCollection.create(payload);
    return recipe;
};

export const addRecipeToFavorites = async (userId, recipeId) => {
  const user = await UserCollection.findByIdAndUpdate(
    userId,
    { $addToSet: { favoriteRecipes: recipeId } },
    { new: true }
  );
  return user;
};

export const deleteRecipeFromFavorites = async (userId, recipeId) => {
    const recipe = await UserCollection.findByIdAndUpdate(userId, { $pull: { favoriteRecipes: recipeId } }, { new: true });
    return recipe;
};
