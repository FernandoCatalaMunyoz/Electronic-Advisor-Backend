//CREAR ROLE

import { Request, Response } from "express";
import { Role } from "../Models/Role";
import exp from "constants";
import { User } from "../Models/User";

export const createRole = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    const newRole = await Role.create({
      name: name,
    }).save();

    res.status(201).json({
      success: true,
      message: "Role created successfully",
      data: newRole,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Role cant be created",
    });
  }
};

//BORRAR ROLE

export const deleteRole = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const role: any = await Role.findOneBy({
      id: parseInt(id),
    });
    console.log(role, "role");
    await Role.remove(role);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Role cant be deleted",
    });
  }
};

//EDITAR ROLE

export const updateRole = async (req: Request, res: Response) => {
  try {
    const roleId = req.params.id;
    const name = req.body.name;

    const roleToUpdate: any = await Role.findOneBy({
      id: parseInt(roleId),
    });

    if (!roleToUpdate) {
      return res.status(404).json({
        success: false,
        message: "Role not found",
      });
    }

    const roleUpdated = await Role.update(
      {
        id: parseInt(roleId),
      },
      {
        name: name,
      }
    );
    const role = await Role.findOneBy({
      id: parseInt(roleId),
    });
    res.status(201).json({
      success: true,
      message: "Role updated successfully",
      data: role,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Role cant be updated",
    });
  }
};
