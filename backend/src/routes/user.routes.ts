import { getAnnoncesByUserIdController } from "../controllers/annonce.controller";
import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";

const routes = express.Router();

routes.get("/:id/annonces", requireUtilisateur, getAnnoncesByUserIdController)

export default routes