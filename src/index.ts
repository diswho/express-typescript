import express, { Request, Response } from "express";
import routes from "./api/routes";

const app = express();
const port = 3000;
app.use("/api/", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`I just changed this log: http://localhost:${port}`);
});
