import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";
import {
  createAnnonceController,
  getAllAnnoncesController,
  getAnnonceByIdController,
  } from "../controllers/annonce.controller";

const routes = express.Router();

routes.post("/", requireUtilisateur, createAnnonceController);
routes.get("/", requireUtilisateur, getAllAnnoncesController);
routes.get("/:id", requireUtilisateur, getAnnonceByIdController);

export default routes;
