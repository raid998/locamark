import { Schema, model } from "mongoose";

interface IUser {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);
