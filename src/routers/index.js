import { Router } from "express";
import authRoutes from "./auth.js";
import recipesRoutes from "./recipes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);

export default router;
