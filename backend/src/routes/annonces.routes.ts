import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";
import {
  createAnnonceController,
  deleteAnnonceController,
  editAnnonceController,
  getAllAnnoncesController,
  getAnnonceByIdController,
} from "../controllers/annonce.controller";
import { checkUtilisateur } from "../middlewares/checkUtilisateur.middleware";

const routes = express.Router();

routes.post("/", requireUtilisateur, createAnnonceController);
routes.get("/", requireUtilisateur, getAllAnnoncesController);
routes.get("/:id", requireUtilisateur, getAnnonceByIdController);
routes.put("/:id", requireUtilisateur, checkUtilisateur, editAnnonceController);
routes.post("/:id", requireUtilisateur, checkUtilisateur, (req, res) => {
  return res.sendStatus(200);
});
routes.delete(
  "/:id",
  requireUtilisateur,
  checkUtilisateur,
  deleteAnnonceController
);

export default routes;
