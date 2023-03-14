import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  annonces?: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  annonces: { type: [Schema.Types.ObjectId], ref: "Annnonce", required: false },
});

export const User = model<IUser>("User", userSchema);
