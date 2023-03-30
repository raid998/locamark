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
import multer from "multer"
import { verifyJwt } from "../utils/jwt";
import { IUser } from "../model/user.model";
import fs from "fs"
import path from "path";
const routes = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const token = req.headers.authorization?.split(" ")[1]
    const user = <Partial<IUser>>verifyJwt(token ?? "")
    if(!fs.existsSync("uploads/" + user.id))fs.mkdirSync("uploads/" + user.id)
    cb(null, "uploads/" + user.id + "/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    let newFilename = basename + '-' + Date.now() + ext;
    
    // Check if file already exists
    let filePath = 'uploads/' + newFilename;
    let i = 1;
    while (fs.existsSync(filePath)) {
      newFilename = basename + '-' + Date.now() + '-' + i + ext;
      filePath = 'uploads/' + newFilename;
      i++;
    }

    cb(null, newFilename)
  },
});

const upload = multer({ storage });


routes.post("/", requireUtilisateur, upload.array('photos'), createAnnonceController);
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
