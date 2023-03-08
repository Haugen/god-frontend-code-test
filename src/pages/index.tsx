import { useQuery } from "@tanstack/react-query";

import CarSlider from "../components/CarSlider";
import { fetchCars } from "../utils/api-fetchers";

const HomePage = () => {
  const { data, isLoading } = useQuery(["cars"], () => fetchCars());

  return (
    <div>
      <h1 className="text-center text-3xl mb-16">Våra modeller</h1>
      <CarSlider />
    </div>
  );
};

export default HomePage;
