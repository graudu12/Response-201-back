import { CategoryCollection } from "../db/models/recipe.js";

export const getAllCategories = async () => {
    const categories = await CategoryCollection.find();
    return categories;
};
