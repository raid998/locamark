import { Schema, model } from "mongoose";

interface IAnnonce {
  telephone: string;
  adresse: string;
  complement?: string;
  codePostal: string;
  ville: string;
}

const annonceSchema = new Schema<IAnnonce>({
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  complement: { type: String },
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
});

const Annonce = model<IAnnonce>("Annonce", annonceSchema);
