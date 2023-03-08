import { Car } from "../utils/types";

const HelloWorld = ({ car }: { car: Car }) => {
  return <div className="text-red-400">{car.modelName}</div>;
};

export default HelloWorld;
