import { getAnnoncesByUserIdController } from "../controllers/annonce.controller";
import express from "express";
import { requireUtilisateur } from "../middlewares/requireUtilisateur.middleware";
import { editProfilController } from "../controllers/user.controller";

const routes = express.Router();

routes.get("/:id/annonces", requireUtilisateur, getAnnoncesByUserIdController);
routes.put("/:id", requireUtilisateur, editProfilController);
routes.post("/:id", requireUtilisateur, (req, res) => {
  return res.sendStatus(200);
});

export default routes;
