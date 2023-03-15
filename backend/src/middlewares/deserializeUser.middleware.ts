import { RequestHandler } from "express";
import { IUser, User } from "../model/user.model";
import { verifyJwt } from "../utils/jwt";

export const deserializeUser: RequestHandler = async (req, res, next) => {
  const headers = req.headers;
  if (!headers?.authorization) {
    return next();
  }
  const token = headers.authorization.split(" ")[1];
  try {
    const decodedUser = <Partial<IUser>>verifyJwt(token);
    const user = await User.findOne({ email: decodedUser.email });

    if (!user) {
      return next();
    }
    res.locals.user = { ...user, token };

    return next();
  } catch {
    return next();
  }
};
