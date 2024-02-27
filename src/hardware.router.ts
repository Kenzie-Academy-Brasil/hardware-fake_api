import { Request, Response, Router } from "express";
import { hardwares, categories } from "./database";
import { Hardware, Category } from "./interfaces";

const hardwareRouter = Router();

hardwareRouter.get(
  "/hardwares",
  (_: Request, res: Response): Response<Hardware> => {
    const hostname: string = process.env.HOSTNAME!;

    return res.status(200).json(
      hardwares.map((h: Hardware) => ({
        ...h,
        img: `${hostname}/_id${h.id}.jpg`.replaceAll("\n", ""),
      }))
    );
  }
);

hardwareRouter.get(
  "/categories",
  (_: Request, res: Response): Response<Array<Category>> => {
    return res.status(200).json(categories);
  }
);

export default hardwareRouter;
