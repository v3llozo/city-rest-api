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
    console.log("client.data:getByName:", name);
    let result: Client[] = [];
    result = clients.filter((c) => c.name === name);
    return result;
  },
  getById(id: number): Client | undefined {
    console.log("client.data:getById:", id);
    let result: Client | undefined;
    result = clients.find((c) => c.id === id);
    return result;
  },
  update(client: Client): Client {
    console.log("client.data:update:", client.id);
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
    console.log("client.data:delete:", id);
    console.log(clients.length);
    clients.forEach((c, i) => {
      if (c.id === id) {
        clients.splice(i, 1);
      }
    });
    console.log(clients.length);
    return true;
  },
};

export = ClientData;
