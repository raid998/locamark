import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";
import {
  createAnnonceController,
  getAllAnnoncesController,
} from "../controllers/annonce.controller";

const routes = express.Router();

routes.post("/", requireUtilisateur, createAnnonceController);
routes.get("/", requireUtilisateur, getAllAnnoncesController);

export default routes;
