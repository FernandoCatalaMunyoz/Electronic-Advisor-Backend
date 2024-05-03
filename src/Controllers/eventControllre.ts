// CREAR EVENTO

import { Request, Response } from "express";
import { Event } from "../Models/Event";

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
