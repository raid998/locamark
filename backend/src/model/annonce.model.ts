import { Schema, model } from "mongoose";

interface IAnnonce {
  telephone: string;
  adresse: string;
  complement?: string;
  codePostal: string;
  ville: string;
  description: string;
  photos?: string[];
  user: { type: Schema.Types.ObjectId; ref: "User" };
}

const annonceSchema = new Schema<IAnnonce>({
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  complement: { type: String },
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
  description: { type: String, required: true },
  photos: { type: [String], required: false },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Annonce = model<IAnnonce>("Annonce", annonceSchema);
