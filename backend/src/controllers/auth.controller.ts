import { RequestHandler } from "express";
import { registerSchema, loginSchema } from "../schemas/user.schema";
import {
  comparePasswords,
  createUtilisateur,
  signUser,
} from "../services/auth.service";

export const authController: RequestHandler = async (req, res, next) => {
  try {
    const loginData = loginSchema.safeParse(req.body);
    if (!loginData.success)
      return res.status(400).send({
        message:
          "Les données que vous avez saisies sont erronées, veuillez réessayer.",
      });

    const passwordCorrect = comparePasswords(
      loginData.data.email,
      loginData.data.password
    );
    if (!passwordCorrect)
      return res.status(404).send({
        message: "Les coordonnées que vous avez saisies sont erronées.",
      });

    const signedUser = await signUser(loginData.data.email);
    if (!signedUser)
      return res.status(404).send({
        message: "Les coordonnées que vous avez saisies sont erronées.",
      });
    return res.send({
      message: "Connexion réussie",
      data: {
        id: signedUser.id,
        email: signedUser.email,
        nom: signedUser.nom,
        prenom: signedUser.prenom,
        token: signedUser.token,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    const user = registerSchema.safeParse(req.body);
    if (!user.success)
      return res.status(400).send({
        message:
          "Les données que vous avez saisies sont erronées, veuillez réessayer.",
      });
    await createUtilisateur(user.data);
    return res.status(201).send({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    next(err);
  }
};
