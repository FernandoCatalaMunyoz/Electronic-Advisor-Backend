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

export const updateArtist = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const country = req.body.country;
    const genreId = req.body.genre;
    const artistId = req.params.id;

    const artist = await Artist.findOne({
      where: {
        id: parseInt(artistId),
      },
    });
    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }
    //MODIFICAR ARTISTA
    const artistToUpdated = await Artist.update(
      {
        id: parseInt(artistId),
      },
      {
        name: name,
        country: country,
        genre: genreId,
      }
    );
    const artistUpdated = await Artist.findOne({
      where: {
        id: parseInt(artistId),
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
//BORRAR ARTISTA
export const deleteArtist = async (req: Request, res: Response) => {
  try {
    const artistId = req.params.id;

    const artistToRemove: any = await Artist.findOneBy({
      id: parseInt(artistId),
    });
    if (!artistToRemove) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    await Artist.remove(artistToRemove);
    res.status(201).json({
      success: true,
      message: "Artist deleted successfully",
      data: artistToRemove,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Artist cant be deleted",
    });
  }
};
//TRAER TODOS LOS ARTISTAS
export const getArtists = async (req: Request, res: Response) => {
  try {
    const artists = await Artist.find({
      relations: { genre: true },
    });
    res.status(200).json({
      success: true,
      data: artists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Artists cant be retrieved",
    });
  }
};
//TRER ARTISTA POR ID

export const getArtistById = async (req: Request, res: Response) => {
  try {
    const artistId = req.params.id;
    const artist = await Artist.findOne({
      where: {
        id: parseInt(artistId),
      },
    });
    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Artist retrieved successfully",
      data: artist,
    });
  } catch (error) {}
};

//TRAER ARTISTAS POR GENERO

export const getArtistsByGenre = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit) || 9;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const genreId = req.body.genre;

    const artists = await Artist.find({
      take: limit,
      skip: skip,
      where: {
        genre: { id: genreId },
      },
      relations: { genre: true },
    });
    res.status(200).json({
      success: true,
      message: "Artists retrieved successfully",
      data: artists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Artists cant be retrieved",
    });
  }
};
