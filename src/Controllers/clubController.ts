import { Request, Response } from "express";
import { Club } from "../Models/Club";

//CREAR CLUB
export const createClub = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const address = req.body.address;
    const link = req.body.link;
    const newClub = await Club.create({
      name: name,
      address: address,
      link: link,
    }).save();
    res.status(201).json({
      success: true,
      message: "Club created successfully",
      data: newClub,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Club cant be created",
    });
  }
};
