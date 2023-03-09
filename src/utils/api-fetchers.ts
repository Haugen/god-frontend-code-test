import axios from "axios";

import { BodyTypeOrEmpty, Car } from "./types";

export const fetchCars = async (filter?: BodyTypeOrEmpty): Promise<Car[]> => {
  try {
    let { data } = await axios.get(`/api/cars?filter=${filter}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
