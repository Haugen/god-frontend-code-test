import { useQuery } from "@tanstack/react-query";
import { useContext, Dispatch, SetStateAction } from "react";
import clsx from "clsx";

import { BodyTypeOrEmpty } from "../utils/types";
import { ModelsFilterContext } from "../context/ModelFilterContext";
import { fetchCars } from "../utils/api-fetchers";
import { bodyTypes } from "../utils/types";

type FilterCtaProps = {
  type: BodyTypeOrEmpty;
  count?: number;
  isCurrent: boolean;
  setFilter: Dispatch<SetStateAction<BodyTypeOrEmpty>>;
};

const FilterCta = ({ type, count, isCurrent, setFilter }: FilterCtaProps) => {
  return (
    <button
      className={clsx({ "border-b-2 border-blue-500": isCurrent })}
      onClick={() => setFilter(type)}
    >
      {type || "alla"} ({count})
    </button>
  );
};

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
              count={data?.filter((item) => item.bodyType == type).length || 0}
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
