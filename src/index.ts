import express, { Request, Response } from "express";
import routes from "./api/routes";
import compression from "compression";
import helmet from "helmet";
import bodyparser from "body-parser";
import cors from "cors";
import logger from "./api/middlewares/logger.middleware";

const app = express();
const port = 3000;

app.use(compression());
app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger);

app.use("/api/", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`I just changed this log: http://localhost:${port}`);
});
