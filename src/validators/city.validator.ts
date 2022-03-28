import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "./messages";

const CityValidator = {
  create(req: Request, res: Response, next: NextFunction) {
    let city = req.body;
    if (city.name && city.state) {
      next();
    } else {
      res
        .status(MESSAGES.CITY.MISSING_PROPERTY.statusCode)
        .send(MESSAGES.CITY.MISSING_PROPERTY.message);
    }
  },
};

export default CityValidator;
