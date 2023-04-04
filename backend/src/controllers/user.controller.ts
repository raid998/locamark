import { RequestHandler } from "express";
import { signUser } from "../services/auth.service";
import { updateUser } from "../services/user.service";

export const editProfilController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateStatus = await updateUser(data, id);
    const signedUser = await signUser(data.email);
    if (updateStatus && signedUser)
      return res.send({
        id: signedUser.id,
        email: signedUser.email,
        nom: signedUser.nom,
        prenom: signedUser.prenom,
        token: signedUser.token,
      });
      return res.sendStatus(400)
  } catch {
    return res.sendStatus(400);
  }
};
