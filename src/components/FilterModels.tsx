import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { ModelsFilterContext } from "../context/ModelFilterContext";
import { fetchCars } from "../utils/api-fetchers";
import { bodyTypes } from "../utils/types";
import FilterCta from "./FilterCta";

const FilterModels = () => {
  const { filter, setFilter } = useContext(ModelsFilterContext);
  const { data } = useQuery(["cars", ""], () => fetchCars(filter), {
    enabled: false,
  });

  return (
    <ul className="flex space-x-4 text-lg text-gray-600 hover:text-gray-900 justify-center mb-12">
      <li>
        <FilterCta
          isCurrent={filter == ""}
          count={data?.length}
          setFilter={setFilter}
          type=""
        />
      </li>
      {bodyTypes.map((type) => {
        return (
          <li key={type}>
            <FilterCta
              isCurrent={filter == type}
              count={data?.filter((item) => item.bodyType == type).length}
              setFilter={setFilter}
              type={type}
              key={type}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FilterModels;
