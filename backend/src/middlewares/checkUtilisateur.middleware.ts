import { RequestHandler } from "express";

export const checkUtilisateur : RequestHandler = (req, res, next) => {
    const user = res.locals.user
    // A finir
}