import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { searchRecipesByIngredientsController } from '../controllers/ingredients.js';

const router = Router();

router.get('/', ctrlWrapper(searchRecipesByIngredientsController));

export default router;
