//CREAR ROLE

import { Request, Response } from "express";
import { Role } from "../Models/Role";

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
