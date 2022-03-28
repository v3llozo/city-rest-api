import { City } from "./city";

export interface Client {
  id: number;
  name: string;
  sex: string;
  birthdate: Date;
  age: number;
  city: City;
}
