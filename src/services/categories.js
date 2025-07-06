import { CategoryCollection } from "../db/models/recipe.js";

export const getAllCategories = async () => {
    const categories = CategoryCollection.find();
    return categories;
};
