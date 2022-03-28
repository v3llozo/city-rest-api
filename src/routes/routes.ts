import * as express from "express";
import * as cityRouter from "./city.routes";
import * as clientRouter from "./client.routes";

let router = express.Router();

router.use("/city", cityRouter.router);
router.use("/client", clientRouter.router);
export default router;
