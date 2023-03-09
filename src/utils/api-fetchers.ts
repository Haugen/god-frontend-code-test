import axios from "axios";

import { BodyTypeOrEmpty, Car } from "./types";

export const fetchCars = async (): Promise<Car[]> => {
  try {
    let { data } = await axios.get(`/api/cars`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
