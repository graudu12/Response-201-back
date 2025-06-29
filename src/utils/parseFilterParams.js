import { IngredientCollection } from "../db/models/recipe.js";

// Селект
const parseIngredients = async (ingredient) => {
    const allowedIngredients = await IngredientCollection.findOne({ name: ingredient });
    return allowedIngredients ? ingredient : undefined;
};

const parseCategory = async (category) => {
    const allowedCategory = await IngredientCollection.findOne({ name: category });
    return allowedCategory ? category : undefined;
};

export const parseFilterParams = (query) => {
    const { ingredient, category } = query;
    const parsedIsIngredients = parseIngredients(ingredient);
    const parsedIsCategory = parseCategory(category);

    return {
        ingredient: parsedIsIngredients,
        category: parsedIsCategory,
    };
};
