import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenData } from "../Types/index";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        succes: false,
        message: "UNAUTHORIZE",
      });
    }
    jwt.verify(token, process.env.JWT_SECRET as string);
    const decodedToken = jwt.decode(token);
    req.tokenData = decodedToken as TokenData;
    next();
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "JWT NOT VALID OR MALFORMED",
    });
  }
};
