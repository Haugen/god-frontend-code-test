import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren, useState } from "react";
import { fetchCars } from "../utils/api-fetchers";

import { BodyTypeOrEmpty, Car } from "../utils/types";

type ModelsFilterContextType = {
  cars: Car[];
  isLoadingCars: boolean;
  filter: BodyTypeOrEmpty;
  setFilter: React.Dispatch<React.SetStateAction<BodyTypeOrEmpty>>;
};

export const ModelsFilterContext = React.createContext<ModelsFilterContextType>(
  { cars: [], filter: "", isLoadingCars: false, setFilter: () => {} }
);

export const ModelsFilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<BodyTypeOrEmpty>("");
  const { data: cars = [], isLoading: isLoadingCars } = useQuery(["cars"], () =>
    fetchCars()
  );

  const filterCars = () => {
    cars.filter((item) => item.bodyType === (filter as BodyTypeOrEmpty));
  };

  return (
    <ModelsFilterContext.Provider
      value={{ cars, isLoadingCars, filter, setFilter }}
    >
      {children}
    </ModelsFilterContext.Provider>
  );
};
