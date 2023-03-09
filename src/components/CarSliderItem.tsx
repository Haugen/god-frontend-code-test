import Image from "next/image";

import { Car } from "../utils/types";

const CarSliderItem = ({ car }: { car: Car }) => {
  return (
    <div>
      <div className="lg:text-sm group">
        <div className="uppercase text-gray-400 group-hover:text-blue-500 font-semibold text-sm">
          {car.bodyType}
        </div>
        <h2 className="sm:inline font-bold sm:mr-2 group-hover:text-blue-500">
          {car.modelName}
        </h2>
        <span className="font-light text-gray-400 group-hover:text-blue-500">
          {car.modelType}
        </span>
        <div className="mt-4 max-h-full overflow-hidden">
          <Image
            className="group-hover:scale-[1.07] object-cover object-center transition-all duration-300"
            alt={`Beautiful ${car.modelName}`}
            src={car.imageUrl}
            width={390}
            height={300}
          />
        </div>
      </div>
      <div>
        <p>learn</p>
        <p>shop</p>
      </div>
    </div>
  );
};

export default CarSliderItem;
