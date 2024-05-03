// CREAR ARTISTA

import { Request, Response } from "express";
import { Artist } from "../Models/Artist";

export const createArtist = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const genreId = req.body.genre;
    const country = req.body.country;

    const newArtist = await Artist.create({
      name: name,
      country: country,
      genre: genreId,
    }).save();

    res.status(201).json({
      success: true,
      message: "Artist created successfully",
      data: newArtist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Artist cant be created",
    });
  }
};
