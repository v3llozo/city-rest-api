import { City } from "../models/city";

let id = 1;
let cities: City[] = [];

const CityData = {
  create(city: City): number {
    city.id = id;
    id++;
    if (cities.push(city)) {
      return city.id;
    } else {
      return 0;
    }
  },
  get(search: String, key: "name" | "state"): City[] {
    let response: City[] = [];
    response = cities.filter((c) => c[key] == search);
    return response;
  },
  getById(id: number): City[] | undefined {
    let response: City[];
    response = cities.filter((c) => c.id === id);
    return response;
  },
  update(city: City) {
    let response: City = city;
    cities.forEach((c, i) => {
      if (c.id === city.id) {
        response = cities[i] = { ...city };
      }
    });
    return response;
  },
};

export default CityData;
