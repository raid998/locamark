import express from "express";
import {
  authController,
  registerController,
} from "../controllers/auth.controller";

const routes = express.Router();

routes.post("/login", authController);
routes.post("/register", registerController);

export default routes;
