import { Request, Response } from "express";
import { Genre } from "../Models/Genre";

//CREAR GENERO
export const createGenre = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const genre = await Genre.create({
      name: name,
    }).save();
    res.status(201).json({
      success: true,
      message: "Genre created successfully",
      data: genre,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Genre cant be created",
    });
  }
};

//BORRAR GENERO
export const deleteGenre = async (req: Request, res: Response) => {
  try {
    const genreId = req.params.id;
    const genre = await Genre.findOne({
      where: {
        id: parseInt(genreId),
      },
    });
    if (!genre) {
      return res.status(404).json({
        success: false,
        message: "Genre not found",
      });
    }
    await Genre.delete({
      id: parseInt(genreId),
    });
    res.status(200).json({
      success: true,
      message: "Genre deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Genre cant be deleted",
    });
  }
};
