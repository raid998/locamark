import express, { Express, json } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { logger } from "./middlewares/logger.middleware";
import { db } from "./db/db";

const app: Express = express();
dotenv.config();

app.use(json());
app.use(logger);
db();
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
