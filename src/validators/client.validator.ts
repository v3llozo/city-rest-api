import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "./messages";

const ClientValidator = {
  create(req: Request, res: Response, next: NextFunction) {
    let client = req.body;
    let missingProperties = [];
    client.name ? "" : missingProperties.push("name");
    client.sex ? "" : missingProperties.push("sex");
    client.birthdate ? "" : missingProperties.push("birthdate");
    client.age ? "" : missingProperties.push("age");
    client.city ? "" : missingProperties.push("city");

    if (missingProperties.length > 0) {
      res.status(MESSAGES.CLIENT.MISSING_PROPERTY.statusCode).send({
        ...MESSAGES.CLIENT.MISSING_PROPERTY.message,
        missingProperties,
      });
    } else {
      next();
    }
  },
};

export default ClientValidator;
