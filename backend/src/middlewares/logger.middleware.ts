import { RequestHandler } from "express";

export const logger: RequestHandler = (req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
};
