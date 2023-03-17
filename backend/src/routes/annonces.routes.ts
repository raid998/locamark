import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";
import {
  createAnnonceController,
  getAllAnnoncesController,
  getAnnoncesById
} from "../controllers/annonce.controller";

const routes = express.Router();

routes.post("/", requireUtilisateur, createAnnonceController);
routes.get("/", requireUtilisateur, getAllAnnoncesController);
routes.get("/:id", requireUtilisateur, getAnnoncesById);

export default routes;
