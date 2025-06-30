import { getAllCategories } from '../services/categories.js';

export const getAllCategoriesController = async (req, res, next) => {
  const categories = await getAllCategories();
  res.json(categories);
};
