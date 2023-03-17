import { RequestHandler } from "express";
import mongoose from "mongoose";
import { User } from "../model/user.model";
import { createAnnonceSchema } from "../schemas/annonce.schema";
import {
  createAnnonce,
  getAllAnnonces,
  pushAnnonce,
} from "../services/annonce.service";
import { signUser } from "../services/auth.service";

export const createAnnonceController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    // Extraire les données reçues de l'annonce
    const annonceData = createAnnonceSchema.safeParse(req.body);
    if (!annonceData.success)
      return res.status(400).send({
        message:
          "Les données que vous avez saisies sont erronées, veuillez réessayer.",
      });

    // Créer une nouvelle entité annonce
    const { user } = res.locals;
    const annonce = await createAnnonce(
      annonceData.data,
      await User.findOne({ email: user._doc.email })
    );
    await pushAnnonce(annonce, user._doc.email);

    return res.send({
      message: "Annonce créée avec succès",
      user: await signUser(user._doc.email), // ça pourrait changer
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAnnoncesController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const annonces = await getAllAnnonces();
    return res.send(annonces);
  } catch (err) {
    next(err);
  }
};

export const getAnnoncesById: RequestHandler = async (req, res, next) => {
  try {
  const id = req.params.id
  
  const user = await User.findById(id).populate({path: "annonces"}).exec();
  return res.send(user?.annonces)
}
  catch (err) {
    next(err)
  }
}
