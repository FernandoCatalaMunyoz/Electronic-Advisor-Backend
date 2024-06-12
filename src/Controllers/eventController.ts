import { Request, Response } from "express";
import { Event } from "../Models/Event";
import { tr } from "@faker-js/faker";
import { ArtistEvent } from "../Models/Artist-Event";

// CREAR EVENTO
export const createEvent = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const clubId = req.body.clubId;
    if (!name || !month || !day || !year || !clubId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const newEvent = await Event.create({
      name: name,
      month: month,
      day: day,
      year: year,
      club: clubId,
    }).save();
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: newEvent,
    });
  } catch (error) {}
};

// MODIFICAR EVENTO

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const name = req.body.name;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const clubId = req.body.clubId;

    const event = await Event.findOne({
      where: {
        id: parseInt(eventId),
      },
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    const eventToUpdate = await Event.update(
      {
        id: parseInt(eventId),
      },
      {
        name: name,
        month: month,
        day: day,
        year: year,
        club: clubId,
      }
    );
    const eventUpdated = await Event.findOne({
      where: {
        id: parseInt(eventId),
      },
      relations: { club: true },
    });
    res.status(201).json({
      success: true,
      message: "Event updated successfully",
      data: eventUpdated,
    });
  } catch (error) {}
};

// ELIMINAR EVENTO

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    // const event = await Event.findOne({
    //   where: {
    //     id: parseInt(eventId),
    //   },
    // });
    // if (!event) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Event not found",
    //   });
    // }
    await Event.delete({
      id: parseInt(eventId),
    });
    res.status(201).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Event cant be deleted",
    });
  }
};

// OBTENER EVENTOS

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find({
      relations: { club: true, artistEvents: { artist: true } },
    });

    res.status(200).json({
      success: true,
      message: "Events retrieved successfully",
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Events cant be retrieved",
    });
  }
};

//OBTENER EVENTO POR ID

export const getEventById = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const event = await Event.find({
      where: {
        id: parseInt(eventId),
      },
      relations: { artistEvents: { artist: true } },
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event retrieved successfully",
      data: event,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Event cant be retrieved",
      error: error.message,
    });
  }
};
