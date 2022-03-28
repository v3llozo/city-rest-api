import * as express from "express";
import CityController from "../controllers/city.controller";
import CityValidator from "../validators/city.validator";
let router = express.Router();

router.post("", CityValidator.create, CityController.create);
router.get("/name/:name", CityController.getByName);
router.get("/state/:state", CityController.getByState);
router.get("/id/:id", CityController.getById);
router.put("", CityController.update);

export { router };
