import { Schema, model } from "mongoose";

interface IAnnonce {
  titre: string;
  telephone: string;
  adresse: string;
  complement?: string;
  codePostal: string;
  ville: string;
  description: string;
  photos?: string[];
  prix: number;
  createdAt?: Date;
  user: { type: Schema.Types.ObjectId; ref: "User" };
}

const annonceSchema = new Schema<IAnnonce>({
  titre: { type: String, required: true },
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  complement: { type: String },
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
  description: { type: String, required: true },
  photos: { type: [String], required: false },
  prix: { type: Number, required: true },
  createdAt: { type: Date, required: false },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

annonceSchema.pre("save", function (next) {
  if (!this.createdAt) this.createdAt = new Date();
  next();
});
annonceSchema.pre("insertMany", function (next, annonces) {
  annonces.forEach((annonce: IAnnonce) => {
    annonce.createdAt = new Date();
  });
  next();
});

export const Annonce = model<IAnnonce>("Annonce", annonceSchema);
