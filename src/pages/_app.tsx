import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ModelsFilterProvider } from "../context/ModelFilterContext";
import FilterModels from "../components/FilterModels";
import CarSlider from "../components/CarSlider";
import "../styles/globals.css";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <div className="max-w-7xl mt-24 mx-auto">
          <section>
            <ModelsFilterProvider>
              <h1 className="text-center text-3xl mb-12">Våra modeller</h1>
              <FilterModels />
              <CarSlider />
            </ModelsFilterProvider>
          </section>
        </div>
      </React.StrictMode>
    </QueryClientProvider>
  );
}

export default App;
