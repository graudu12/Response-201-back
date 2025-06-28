import {
  IngredientCollection,
  RecipesCollection,
} from '../db/models/recipe.js';
import createHttpError from 'http-errors';

export const searchRecipesByIngredients = async (ingredientNames) => {
  if (!ingredientNames || !ingredientNames.length) return [];

  const nameRegexes = ingredientNames.map(
    (name) => new RegExp(`^${name}$`, 'i'),
  );

  const matchedIngredients = await IngredientCollection.find({
    name: { $in: nameRegexes },
  });

  const selectedIngredientIds = matchedIngredients.map((el) =>
    el._id.toString(),
  );

  const recipes = await RecipesCollection.find({
    'ingredients.id': { $in: selectedIngredientIds },
  });

  if (recipes.length === 0) {
    throw createHttpError(
      404,
      `No recipes found with selected ingredients: ${ingredientNames.join(
        ', ',
      )}`,
    );
  }

  return recipes;
};
