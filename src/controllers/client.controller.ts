import { Request, Response } from "express";
import ClientData from "../data/client.data";
import { Client } from "../models/client";

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
    console.log("client.controller:getById", req.params.id);
    let response = ClientData.getById(parseInt(req.params.id));
    res.send(response);
    return response;
  },
  update(req: Request, res: Response): Client | undefined {
    console.log("client.controller:update", req.params.id);
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
    console.log("client.controller:delete", req.params.id);
    let response = ClientData.delete(parseInt(req.params.id));
    if (response) {
      res.send();
      return true;
    } else {
      res.status(400).send();
      return false;
    }
  },
};
export default ClientController;
