import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { BodyTypeOrEmpty } from "../utils/types";

type Props = {
  type: BodyTypeOrEmpty;
  count?: number;
  isCurrent: boolean;
  setFilter: Dispatch<SetStateAction<BodyTypeOrEmpty>>;
};

const FilterCta = ({ type, count, isCurrent, setFilter }: Props) => {
  return (
    <button
      className={clsx({ "border-b-2 border-blue-500": isCurrent })}
      onClick={() => setFilter(type)}
    >
      {type || "alla"} ({count})
    </button>
  );
};

export default FilterCta;
