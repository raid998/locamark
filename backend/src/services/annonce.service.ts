import { Annonce } from "../model/annonce.model";
import type { CreateAnnonceInput } from "../schemas/annonce.schema";

export const createAnnonce: (
  data: CreateAnnonceInput,
  user: any
) => Promise<boolean> = async (data: CreateAnnonceInput, user: any) => {
  try {
    const annonce = new Annonce({ ...data, user: user._id });
    // Rajouter traitement sauvegarde d'images
    await annonce.save();
    user.annonces.push(annonce.id);
    await user.save();
    return true;
  } catch {
    return false;
  }
};
export const getAllAnnonces = () => {
  return Annonce.find().populate({ path: "user" }).exec();
};
