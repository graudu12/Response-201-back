//src/controllers/categories.js
import { getAllCategories } from '../services/categories.js';

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};
