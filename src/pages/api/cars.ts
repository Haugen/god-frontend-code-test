import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

import { BodyTypeOrEmpty, Car } from "../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  try {
    const apiDir = path.join(process.cwd(), "public/api");
    const fileContentStr = await fs.readFile(apiDir + "/cars.json", "utf8");
    let fileContent = JSON.parse(fileContentStr) as Car[];
    res.status(200).json(fileContent);
  } catch (error) {
    res.status(500);
  }
}
