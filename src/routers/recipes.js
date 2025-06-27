import { Router } from 'express';
import {
  createRecipesController,
  deleteRecipeToFavoritesController,
  getAllRecipesController,
  getRecipeByIdController,
  deleteOwnRecipeController,
} from '../controllers/recipes.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllRecipesController));

router.post('/', ctrlWrapper(createRecipesController));

router.get('/:recipeId', isValidId, ctrlWrapper(getRecipeByIdController));

router.delete(
  '/:recipeId/favourites',
  isValidId,
  ctrlWrapper(deleteOwnRecipeController),
);

router.delete(
  '/:recipeId/ownRecipe',
  isValidId,
  ctrlWrapper(deleteRecipeToFavoritesController),
);
export default router;
