import { Request, Response } from "express";
import ClientData from "../data/client.data";
import { Client } from "../models/client";
let MOCKEmptyClient = {
  id: 0,
  name: "",
  sex: "",
  age: 0,
  birthdate: new Date(),
  city: {
    name: "",
    state: "",
  },
};

const ClientController = {
  create(req: Request, res: Response): boolean {
    console.log("client.controller:create");
    let client: Client = req.body;
    let response = ClientData.create(client);
    if (response) {
      res.status(201).send({ id: response });
      return true;
    } else {
      return false;
    }
  },
  getByName(req: Request, res: Response): Client[] | undefined {
    console.log("client.controller:getByName");
    let response = ClientData.getByName(req.params.name);
    res.send(response);
    return response;
  },
  getById(req: Request, res: Response): Client | undefined {
    console.log("client.controller:getById");
    let response = ClientData.getById(parseInt(req.params.id));
    res.send(response);
    return response;
  },
  update(req: Request, res: Response): Client | undefined {
    let client: Client = req.body;
    let response: Client | undefined;
    console.log("client.controller:update", client);
    if (ClientData.getById(client.id)) {
      response = ClientData.update(client);
    }
    res.send(response);
    return response;
  },
  delete(req: Request, res: Response): boolean {
    console.log("client.controller:delete");
    let response = ClientData.delete(parseInt(req.params.id));
    res.send(response);
    return true;
  },
};
export default ClientController;
