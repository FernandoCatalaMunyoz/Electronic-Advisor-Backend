import { Request, Response } from "express";
import { ArtistEvent } from "../Models/Artist-Event";
import { Artist } from "../Models/Artist";
import { Event } from "../Models/Event";

export const createArtistEvent = async (req: Request, res: Response) => {
  try {
    const artistId = req.body.artistId;
    const eventId = req.body.eventId;
    if (!artistId || !eventId) {
      return res.status(400).json({
        success: false,
        message: "Please provide artistId and eventId",
      });
    }
    const artist = await Artist.findOne({
      where: {
        id: artistId,
      },
    });
    const event = await Event.findOne({
      where: {
        id: eventId,
      },
    });

    if (!artist || !event) {
      return res.status(404).json({
        success: false,
        message: "Artist or Event not found",
      });
    }

    const artistEvent = await ArtistEvent.create({
      artist: artistId,
      event: eventId,
    }).save();

    res.status(201).json({
      success: true,
      message: "ArtistEvent created successfully",
      data: artistEvent,
    });
  } catch (error) {
    console.log(error);
  }
};
