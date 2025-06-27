//src/routers/index.js
import { Router } from "express";
import authRoutes from "./auth.js";
import recipesRoutes from "./recipes.js";
import categoriesRouter from './categories.js';

const router = Router();

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use('/categories', categoriesRouter);

export default router;
