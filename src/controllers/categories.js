//src/controllers/categories.js
import Category from '../models/category.js';

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await Category.find({}, 'name'); 
    res.json(categories);
  } catch (error) {
    next(error); 
  }
};
