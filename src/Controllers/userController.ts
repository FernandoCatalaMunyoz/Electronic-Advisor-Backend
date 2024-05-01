import { Request, Response } from "express";
import { User } from "../Models/User";

//VER PERFIL DE USUARIO

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.userId;
    const user = await User.findOne({
      where: {
        id: userId,
      },
      relations: {
        role: true,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        country: true,
        email: true,
        role: {
          id: true,
          name: true,
        },
      },
    });
    if (!user) {
      return res.status(404).json({
        succes: true,
        message: "User not found",
        data: user,
      });
    }

    res.status(201).json({
      succes: true,
      message: "User retrieved",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      succes: true,
      message: "User cant be retrieved",
    });
  }
};
