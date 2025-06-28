import {
  IngredientCollection,
  RecipesCollection,
} from '../db/models/recipe.js';

export const searchRecipesByIngredients = async (ingredientNames) => {
  if (!ingredientNames || !ingredientNames.length) return [];

  const cleanedIngredientNames = ingredientNames.map((name) =>
    name.trim().toLowerCase(),
  );

  const nameRegexes = cleanedIngredientNames.map(
    (name) => new RegExp(`^${name}$`, 'i'),
  );

  const matchedIngredients = await IngredientCollection.find({
    name: { $in: nameRegexes },
  });

  if (matchedIngredients.length === 0) {
    return {
      status: 404,
      message: `No recipes found with the ingredients: ${cleanedIngredientNames.join(
        ', ',
      )}`,
      data: [],
    };
  }

  const selectedIngredientIds = matchedIngredients.map((el) =>
    el._id.toString(),
  );

  const recipes = await RecipesCollection.find({
    'ingredients.id': { $in: selectedIngredientIds },
  });

  if (recipes.length === 0) {
    return {
      status: 404,
      message: `No recipes found with selected ingredients: ${cleanedIngredientNames.join(
        ', ',
      )}`,
      data: [],
    };
  }

  return {
    status: 200,
    message: 'Recipes with selected ingredients found successfully!',
    data: recipes,
  };
};
