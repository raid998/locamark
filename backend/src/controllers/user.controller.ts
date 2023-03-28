import { RequestHandler } from "express";
import { updateUser } from "../services/user.service";

export const editProfilController: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const updateStatus = await updateUser(data, id);
  if (updateStatus) return res.sendStatus(200);
  return res.sendStatus(400);
};
