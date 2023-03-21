import { RequestHandler } from "express";
import { Annonce } from "../model/annonce.model";

export const checkUtilisateur: RequestHandler = async (req, res, next) => {
  const user = res.locals.user;
  const annonceId = req.params.id;
  const annonce = await Annonce.findById(annonceId);

  if (user._id.toString() == annonce?.user.toString()) return next();
  return res.sendStatus(401);
};
