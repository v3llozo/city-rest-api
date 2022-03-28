import { Request, Response } from "express";
import CityData from "../data/city.data";
import { City } from "../models/city";

const CityController = {
  create(req: Request, res: Response) {
    let city: City = req.body;
    let response = CityData.create(city);
    res.status(201).send({ id: response });
    return response;
  },
  getByName(req: Request, res: Response) {
    let name: string = req.params.name;
    let response = CityData.get(name, "name");
    res.send(response);
    return response;
  },
  getByState(req: Request, res: Response) {
    let state: string = req.params.state;
    let response = CityData.get(state, "state");
    res.send(response);
    return response;
  },
  getById(req: Request, res: Response) {
    let id: string = req.params.id;
    let response = CityData.getById(parseInt(id));
    res.send(response);
    return response;
  },
  update(req: Request, res: Response): City | undefined {
    let city: City = req.body;
    let response: City | undefined;
    if (CityData.getById(city.id)) {
      response = CityData.update(city);
    }
    res.send(response);
    return response;
  },
};

export default CityController;
