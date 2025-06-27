import { Router } from 'express';
import {
  createRecipesController,
  deleteRecipeToFavoritesController,
  getAllRecipesController,
  getRecipeByIdController,
  addRecipeToFavoritesController,
} from '../controllers/recipes.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { auth } from '../middlewares/authenticate.js';
const router = Router();

router.get('/', ctrlWrapper(getAllRecipesController));

router.post('/', ctrlWrapper(createRecipesController));

router.get('/:recipeId', isValidId, ctrlWrapper(getRecipeByIdController));

router.patch(
  '/:recipeId/favourites',
  isValidId,
  auth,
  ctrlWrapper(addRecipeToFavoritesController),
);

router.delete(
  '/:recipeId/favorites',
  auth,
  isValidId,
  ctrlWrapper(deleteRecipeToFavoritesController),
);

export default router;
