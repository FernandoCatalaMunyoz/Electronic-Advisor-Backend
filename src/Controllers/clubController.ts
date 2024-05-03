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

//MODIFICAR CLUB
export const updateClub = async (req: Request, res: Response) => {
  try {
    const clubId = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const link = req.body.link;

    const club = await Club.findOne({
      where: {
        id: parseInt(clubId),
      },
    });

    if (!club) {
      return res.status(404).json({
        success: false,
        message: "Club not found",
      });
    }
    const clubToUpdate = await Club.update(
      {
        id: parseInt(clubId),
      },
      {
        name: name,
        address: address,
        link: link,
      }
    );
    const updatedClub = await Club.findOne({
      where: {
        id: parseInt(clubId),
      },
    });
    res.status(200).json({
      success: true,
      message: "Club updated successfully",
      data: updatedClub,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Club cant be updated",
    });
  }
};
