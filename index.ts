import express, { Express, Request, Response } from "express";
import router from "./src/routes/routes";
import bodyParser from "body-parser";
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(router);
app.get("/", (req: Request, res: Response) => {
  res.send();
});
app.listen(port, () => {
  console.log(`[server]: hosting https://localhost:${port}`);
});
