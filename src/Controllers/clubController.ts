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

//BORRAR CLUB
export const deleteClub = async (req: Request, res: Response) => {
  try {
    const clubId = req.params.id;
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
    await Club.delete({
      id: parseInt(clubId),
    });
    res.status(200).json({
      success: true,
      message: "Club deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Club cant be deleted",
    });
  }
};

//TRAER TODOS LOS CLUBS
export const getClubs = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit) || 9;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const clubs = await Club.find({
      take: limit,
      skip: skip,
    });
    res.status(200).json({
      success: true,
      message: "Clubs retrieved successfully",
      data: clubs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Clubs cant be retrieved",
    });
  }
};
//TRAE UN CLUB POR ID
export const getClubById = async (req: Request, res: Response) => {
  try {
    const clubId = req.params.id;
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
    res.status(200).json({
      success: true,
      message: "Club retrieved successfully",
      data: club,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Club cant be retrieved",
    });
  }
};
