import { Router } from 'express';
import authRoutes from './auth.js';
import recipesRoutes from './recipes.js';
import ingredientsRouter from './ingredients.js';
import categoriesRouter from './categories.js';

const router = Router();


router.use('/auth', authRoutes);
router.use('/recipes', recipesRoutes);
router.use('/ingredients', ingredientsRouter);
router.use('/categories', categoriesRouter);

export default router;

