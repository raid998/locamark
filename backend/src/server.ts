import express, { Express, json, urlencoded } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { logger } from "./middlewares/logger.middleware";
import { db } from "./db/db";
import cors from "cors";
import { deserializeUser } from "./middlewares/deserializeUser.middleware";
import { seedDB } from "./utils/seed";
import path from "path";

const app: Express = express();
dotenv.config();

app.use(cors());
app.use(express.static(path.join(__dirname, '../uploads')));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(logger);
app.use(deserializeUser);
db();
seedDB();
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
