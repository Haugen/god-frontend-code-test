import React, { PropsWithChildren, useState } from "react";

import { BodyTypeOrEmpty } from "../utils/types";

type ModelsFilterContextType = {
  filter: BodyTypeOrEmpty;
  setFilter: React.Dispatch<React.SetStateAction<BodyTypeOrEmpty>>;
};

export const ModelsFilterContext = React.createContext<ModelsFilterContextType>(
  { filter: "", setFilter: () => {} }
);

export const ModelsFilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<BodyTypeOrEmpty>("");

  return (
    <ModelsFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </ModelsFilterContext.Provider>
  );
};
