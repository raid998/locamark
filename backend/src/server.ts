import express, { Express, json } from "express";
import dotenv from "dotenv";
import { routes } from "./routes";
import { logger } from "./middlewares/logger.middleware";

const app: Express = express();
dotenv.config();

app.use(json());
app.use(logger);
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
