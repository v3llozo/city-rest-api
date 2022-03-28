import * as express from "express";
import ClientController from "../controllers/client.controller";
import ClientValidator from "../validators/client.validator";
let router = express.Router();

router.post("", ClientValidator.create, ClientController.create);
router.get("/name/:name", ClientController.getByName);
router.get("/id/:id", ClientController.getById);
router.put("", ClientController.update);
router.delete("/:id", ClientController.delete);

export { router };
