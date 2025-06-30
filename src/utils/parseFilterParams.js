import { CategoryCollection, IngredientCollection } from "../db/models/recipe.js";

// Селект
const parseIngredients = async (ingredient) => {
    const allowedIngredients = await IngredientCollection.findOne({ name: ingredient });
    return allowedIngredients ? allowedIngredients._id : undefined;
};

const parseCategory = async (category) => {
    const allowedCategory = await CategoryCollection.findOne({ name: category });
    return allowedCategory ? allowedCategory.name : undefined;

};

export const parseFilterParams = async (query) => {
    const { ingredient, category } = query;
    const parsedIsIngredients = await parseIngredients(ingredient);
    const parsedIsCategory = await parseCategory(category);

    return {
        ingredient: parsedIsIngredients,
        category: parsedIsCategory,
    };
};
