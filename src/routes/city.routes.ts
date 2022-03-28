import * as express from "express";
import CityController from "../controllers/city.controller";
let router = express.Router();

router.post("", CityController.create);
router.get("/name/:name", CityController.getByName);
router.get("/state/:state", CityController.getByState);
router.get("/id/:id", CityController.getById);
router.put("", CityController.update);

export { router };
