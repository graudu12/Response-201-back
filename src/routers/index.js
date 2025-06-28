import { Router } from 'express';
import authRoutes from './auth.js';
import recipesRoutes from './recipes.js';
import ingredientsRouter from './ingredients.js';
import categoriesRouter from './categories.js';

const router = Router();


router.use('/api/auth', authRoutes);
router.use('/api/recipes', recipesRoutes);
router.use('/api/ingredients', ingredientsRouter);
router.use('/api/categories', categoriesRouter);

export default router;

