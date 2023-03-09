import Image from "next/image";
import Link from "next/link";

import { Car } from "../utils/types";
import LinkCta from "./LinkCta";

const CarSliderItem = ({ car }: { car: Car }) => {
  return (
    <div>
      <Link href={`/learn/${car.id}`} className="lg:text-sm group">
        <div className="uppercase text-gray-400 group-hover:text-primary font-semibold text-sm">
          {car.bodyType}
        </div>
        <h2 className="sm:inline font-bold sm:mr-2 group-hover:text-primary">
          {car.modelName}
        </h2>
        <span className="font-light text-gray-400 group-hover:text-primary">
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
      </Link>
      <div className="flex space-x-6 justify-center mt-4">
        <LinkCta href={`/learn/${car.id}`}>learn</LinkCta>
        <LinkCta href={`/shop/${car.id}`}>shop</LinkCta>
      </div>
    </div>
  );
};

export default CarSliderItem;
