import { Annonce } from "model/annonce.model";
import type { CreateAnnonceInput } from "schemas/annonce.schema";

export const createAnnonce: (
  data: CreateAnnonceInput,
  user: any
) => Promise<boolean> = async (data: CreateAnnonceInput, user: any) => {
  try {
    const annonce = new Annonce({ ...data, user });
    // Rajouter traitement sauvegarde d'images
    await annonce.save();
    return true;
  } catch {
    return false;
  }
};
