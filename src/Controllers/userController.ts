import { Request, Response } from "express";
import { User } from "../Models/User";
import { handleError } from "../utils/handleError";
import { fi, id_ID } from "@faker-js/faker";

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
        success: true,
        message: "User not found",
        data: user,
      });
    }

    res.status(201).json({
      success: true,
      message: "User retrieved",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
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
    const email = req.body.email;
    const userId = req.tokenData.userId;

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email) {
      if (!validEmail.test(email)) {
        return res.status(400).json({
          success: false,
          message: "format email invalid",
        });
      }
    }
    if (
      firstName.length < 3 ||
      lastName.length < 3 ||
      country.length < 3 ||
      email.length < 3
    ) {
      return res.status(400).json({
        success: false,
        message:
          "firstName, lastName, country, email must have at least 3 characters",
      });
    }
    if (!firstName || !email || !country || !lastName) {
      return res.status(400).json({
        success: false,
        message: "firstName is needed",
      });
    }

    const userEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    const userUpdated = await User.update(
      {
        id: userId,
      },

      {
        firstName: firstName,
        lastName: lastName,
        country: country,
        email: email,
      }
    );
    const userEmailUpdated = await User.findOne({
      where: {
        id: userId,
      },
      relations: { role: true },
    });

    res.status(201).json({
      success: true,
      message: "User updated",
      data: userEmailUpdated,
    });
    console.log(userUpdated, "usuario actualizado");
  } catch (error: any) {
    if (error.message === "Email already in use") {
      return handleError(res, error.message, 404);
    }
    handleError(res, "Cant update users", 500);
  }
};
//FUNCION PARA TRAER TODOS LOS USUARIOS
export const getUsers = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit) || 20;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    if (limit > 100) {
      limit = 10;
    }

    const users = await User.find({
      take: limit,
      skip: skip,
    });

    res.status(201).json({
      success: true,
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

//FUNCION BORRAR USUARIO POR ID

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const userToRemove: any = await User.findOneBy({
      id: parseInt(userId),
    });
    console.log(userToRemove);
    if (userToRemove.roleName === "super_admin") {
      res.status(400).json({
        success: false,
        message: "super_admin cant be deleted",
      });
    }
    if (!userToRemove) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    await User.remove(userToRemove);

    res.status(201).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be deleted",
    });
  }
};
//FUNCION BORRAR PERFIL

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    console.log("delete profile");
    const userId = req.tokenData.userId;
    console.log(userId, "userId");

    const userToRemove: any = await User.findOneBy({
      id: userId,
    });
    console.log(userToRemove);

    if (!userToRemove) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    await User.remove(userToRemove);

    res.status(201).json({
      success: true,
      message: "Profile deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Profile cant be deleted",
    });
  }
};
