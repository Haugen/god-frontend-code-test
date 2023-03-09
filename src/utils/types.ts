export const bodyTypes = ["suv", "estate", "sedan"] as const;

export type BodyType = typeof bodyTypes[number];
export type BodyTypeOrEmpty = BodyType | "";
export type ModelType = "plug-in hybrid" | "pure electric" | "sedan";

export type Car = {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: string;
};
