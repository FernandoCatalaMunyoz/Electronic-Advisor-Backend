// CREAR ARTISTA

import { Request, Response } from "express";
import { Artist } from "../Models/Artist";
import { tr } from "@faker-js/faker";

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

export const updateArtist = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const country = req.body.country;
    const genreId = req.body.genre;
    const artistId = req.body.id;

    const artist = await Artist.findOne({
      where: {
        id: artistId,
      },
    });
    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    const artistToUpdated = await Artist.update(
      {
        id: artistId,
      },
      {
        name: name,
        country: country,
        genre: genreId,
      }
    );
    const artistUpdated = await Artist.findOne({
      where: {
        id: artistId,
      },
      relations: { genre: true },
    });
    res.status(201).json({
      success: true,
      message: "Artist updated successfully",
      data: artistUpdated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Artist cant be updated",
    });
  }
};
