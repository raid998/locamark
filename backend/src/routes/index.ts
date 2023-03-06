import express from "express";
import { authController } from "../controllers/auth.controller";
export const routes = express.Router();

routes.post("/login", authController);
