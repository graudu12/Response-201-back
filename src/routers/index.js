import { Router } from 'express';
import authRouter from './auth.js';
import recipesRoutes from './recipes.js';
import ingredientsRouter from './ingredients.js';
import categoriesRouter from './categories.js';
import userRouter from './user.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/recipes', recipesRoutes);
router.use('/ingredients', ingredientsRouter);
router.use('/categories', categoriesRouter);
router.use('/user', userRouter);
export default router;
