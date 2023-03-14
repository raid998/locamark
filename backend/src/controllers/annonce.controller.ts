import { RequestHandler } from "express";
import { createAnnonceSchema } from "../schemas/annonce.schema";
import { createAnnonce, getAllAnnonces } from "../services/annonce.service";
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
    const annonce = createAnnonce(annonceData.data, user);

    return res.send({
      message: "Annonce créée avec succès",
      user: await signUser(user.email), // ça pourrait changer
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
    const annonces = getAllAnnonces();
    return res.send({ annonces });
  } catch (err) {
    next(err);
  }
};
