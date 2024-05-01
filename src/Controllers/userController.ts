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

//MODIFICAR DATOS USUARIO

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const country = req.body.country;
    const userId = req.tokenData.userId;

    const userUpdated = await User.update(
      {
        id: userId,
      },
      {
        firstName: firstName,
        lastName: lastName,
        country: country,
      }
    );

    console.log(userUpdated, "data");

    res.status(201).json({
      success: true,
      message: "User updated",
      data: userUpdated,
    });
    console.log(userUpdated, "usuario actualizado");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be update",
      error: error,
    });
  }
};
//FUNCION PARA TRAER TODOS LOS USUARIOS
export const getUsers = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    if (limit > 100) {
      limit = 10;
    }

    const users = await User.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        country: true,
        createdAt: true,
        updatedAt: true,
      },
      take: limit,
      skip: skip,
    });

    res.status(201).json({
      succes: true,
      message: "Users retrieved succesfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Users cant be retrieved",
      error: error,
    });
  }
};
