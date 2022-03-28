import { Client } from "../models/client";

let id = 1;
let clients: Client[] = [];

const ClientData = {
  create(client: Client): number {
    client.id = id;
    id++;
    clients.push(client);
    return client.id;
  },
  getByName(name: string): Client[] | undefined {
    let result: Client[] = [];
    result = clients.filter((c) => c.name === name);
    return result;
  },
  getById(id: number): Client | undefined {
    let result: Client | undefined;
    result = clients.find((c) => c.id === id);
    return result;
  },
  update(client: Client): Client {
    let response: Client = client;
    clients.forEach((c, i) => {
      if (c.id === client.id) {
        console.log({ ...client });
        response = clients[i] = {
          ...clients[i],
          ...client,
        };
      }
    });
    return response;
  },
  delete(id: number) {
    clients.forEach((c, i) => {
      if (c.id === id) {
        clients.splice(i, 1);
      }
    });
    return true;
  },
};

export = ClientData;
