import { Request, Response } from "express";
import { Event } from "../Models/Event";

// CREAR EVENTO
export const createEvent = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const clubId = req.body.clubId;
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
