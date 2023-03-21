import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyJwt } from "../utils/jwt";

export const requireUtilisateur: RequestHandler = (req, res, next) => {
  const user  = res.locals.user;
  if (!user)
    return res
      .status(401)
      .send({ message: "Vous devez être connecté pour pouvoir continuer" });
  if (user?.token) {
    try {
      const decoded = verifyJwt(user.token) as JwtPayload;
      if (new Date().getTime() / 1000 > (decoded.exp || +Infinity))
        return res.status(401).send({
          message: "Votre session a expiré. Vous devez vous reconnecter",
        });
      return next();
    } catch {
      return res
        .status(401)
        .send({ message: "Vous devez être connecté pour pouvoir continuer" });
    }
  } else {
    return res
      .status(401)
      .send({ message: "Vous devez être connecté pour pouvoir continuer" });
  }
};
