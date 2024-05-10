import { Artist } from "../../Models/Artist";
import { ArtistEvent } from "../../Models/Artist-Event";
import { Event } from "../../Models/Event";

import { AppDataSource } from "../db";

export const artistEventSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const artistEvent = new ArtistEvent();
    artistEvent.artist = new Artist();
    artistEvent.artist.id = 1;
    artistEvent.event = new Event();
    artistEvent.event.id = 1;
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
