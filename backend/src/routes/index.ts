import authRoutes from "./auth.routes";
import annoncesRoutes from "./annonces.routes";
import { Router } from "express";

const router = Router();

router.use("/auth", authRoutes);
router.use("/annonces", annoncesRoutes);
export default router;
