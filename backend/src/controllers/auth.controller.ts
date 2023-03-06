import { RequestHandler } from "express";

export const authController: RequestHandler = (req, res, next) => {
  return res.json({ message: "auth routes" });
};
