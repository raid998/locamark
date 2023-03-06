import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { User } from "../model/user.model";
import { registerSchema, loginSchema } from "../schema/user.schema";
import { signJwt } from "../utils/jwt";

export const authController: RequestHandler = async (req, res, next) => {
  try {
    const loginData = loginSchema.safeParse(req.body);
    if (!loginData.success)
      return res.status(400).send({
        message:
          "Les données que vous avez saisies sont erronées, veuillez réessayer.",
      });

    const user = await User.findOne({ email: loginData.data.email });
    if (!user)
      return res.status(404).send({
        message: "Les coordonnées que vous avez saisies sont erronées.",
      });

    const passwordCorrect = await bcrypt.compare(
      loginData.data.password,
      user.password
    );
    if (!passwordCorrect)
      return res.status(404).send({
        message: "Les coordonnées que vous avez saisies sont erronées.",
      });

    const signedUser = signJwt(
      { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom },
      "1d"
    );

    return res.send({
      message: "Connexion réussie",
      data: {
        id: user.id,
        email: user.email,
        nom: user.nom,
        prenom: user.prenom,
        token: signedUser,
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
    const hash = await bcrypt.hash(user.data.password, 10);
    const newUser = new User({ ...user.data, password: hash });
    await newUser.save();
    return res.status(201).send({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    next(err);
  }
};
