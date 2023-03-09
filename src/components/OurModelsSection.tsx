import { ModelsFilterProvider } from "../context/ModelFilterContext";
import CarSlider from "./CarSlider";
import FilterModels from "./FilterModels";

const OurModelsSection = () => {
  return (
    <ModelsFilterProvider>
      <h1 className="text-center text-3xl mb-12">Våra modeller</h1>
      <FilterModels />
      <CarSlider />
    </ModelsFilterProvider>
  );
};

export default OurModelsSection;
