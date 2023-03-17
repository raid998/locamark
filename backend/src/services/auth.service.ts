import bcrypt from "bcrypt";
import { signJwt } from "../utils/jwt";
import { RegisterSchema } from "../schemas/user.schema";
import { User } from "../model/user.model";

export const comparePasswords = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const user = await User.findOne({ email });
    if (!user) return false;
    return await bcrypt.compare(password, user.password);
  } catch {
    return false;
  }
};

export const signUser = async (email: string) => {
  const user = await User.findOne({ email })
    .populate({ path: "annonces", populate: { path: "user" } })
    .exec();
  if (!user) return null;
  const token = signJwt(
    {
      id: user.id,
      email,
      nom: user.nom,
      prenom: user.prenom,
    },
    "1d"
  );
  return {
    id: user.id,
    email,
    nom: user.nom,
    prenom: user.prenom,
    token,
  };
};

export const createUtilisateur = async (
  data: RegisterSchema
): Promise<boolean> => {
  const { email, password, nom, prenom } = data;
  const user = await User.findOne({ email });
  if (user) return false;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashedPassword,
    nom,
    prenom,
  });
  await newUser.save();
  return true;
};
