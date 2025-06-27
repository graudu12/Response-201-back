import { Router } from 'express';
import authRoutes from './auth.js';
import recipesRoutes from './recipes.js';
import ingredientsRouter from './ingredients.js';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/recipes', recipesRoutes);
router.use('/api/ingredients', ingredientsRouter);

export default router;
