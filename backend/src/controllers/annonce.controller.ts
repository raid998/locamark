import { RequestHandler } from "express";
import { createAnnonceSchema } from "schemas/annonce.schema";
import { createAnnonce } from "services/annonce.service";

export const annonceController: RequestHandler = async (req, res, next) => {
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
    // Associer la nouvelle annonce à l'utilisateur connecté
    // Sauvegarder la nouvelle entité
  } catch (error) {
    next(error);
  }
};
