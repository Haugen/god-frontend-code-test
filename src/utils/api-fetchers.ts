import axios from "axios";

import { Car } from "./types";

export const fetchCars = async (filter?: string): Promise<Car[]> => {
  try {
    const { data } = await axios.get("/api/cars");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
