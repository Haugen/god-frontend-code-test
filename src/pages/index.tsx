import { useQuery } from "@tanstack/react-query";
import Car from "../components/Car";

import { fetchCars } from "../utils/api-fetchers";

const HomePage = () => {
  const { data, isLoading } = useQuery(["cars"], () => fetchCars());

  if (isLoading) return null;

  return data?.map((car) => <Car key={car.id} car={car} />);
};

export default HomePage;
