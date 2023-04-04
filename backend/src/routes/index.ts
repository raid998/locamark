import authRoutes from "./auth.routes";
import annoncesRoutes from "./annonces.routes";
import userRoutes from "./user.routes";
import { Router } from "express";

const router = Router();

router.use("/auth", authRoutes);
router.use("/annonces", annoncesRoutes);
router.use("/users", userRoutes);
export default router;
