import { Artist } from "../../Models/Artist";
import { Genre } from "../../Models/Genre";

import { AppDataSource } from "../db";

export const artistSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const artist = new Artist();
    artist.name = "Carl Cox";
    artist.country = "UK";
    artist.genre = new Genre();
    artist.genre.id = 2;
    await artist.save();

    const artist2 = new Artist();
    artist2.name = "Adam Beyer";
    artist2.country = "Sweden";
    artist2.genre = new Genre();
    artist2.genre.id = 2;
    await artist2.save();

    const artist3 = new Artist();
    artist3.name = "David Guetta";
    artist3.country = "France";
    artist3.genre = new Genre();
    artist3.genre.id = 1;
    await artist3.save();

    const artist4 = new Artist();
    artist4.name = "Richie Hawtin";
    artist4.country = "Canada";
    artist4.genre = new Genre();
    artist4.genre.id = 2;
    await artist4.save();

    const artist5 = new Artist();
    artist5.name = "Sven Vath";
    artist5.country = "Germany";
    artist5.genre = new Genre();
    artist5.genre.id = 2;
    await artist5.save();

    const artist6 = new Artist();
    artist6.name = "Paul Kalkbrenner";
    artist6.country = "Germany";
    artist6.genre = new Genre();
    artist6.genre.id = 5;
    await artist6.save();

    const artist7 = new Artist();
    artist7.name = "Paco Osuna";
    artist7.country = "Spain";
    artist7.genre = new Genre();
    artist7.genre.id = 2;
    await artist7.save();

    const artist8 = new Artist();
    artist8.name = "Joseph Capriati";
    artist8.country = "Italy";
    artist8.genre = new Genre();
    artist8.genre.id = 2;
    await artist8.save();

    const artist9 = new Artist();
    artist9.name = "Marco Carola";
    artist9.country = "Italy";
    artist9.genre = new Genre();
    artist9.genre.id = 5;
    await artist9.save();

    const artist10 = new Artist();
    artist10.name = "Charlotte de Witte";
    artist10.country = "Belgium";
    artist10.genre = new Genre();
    artist10.genre.id = 2;
    await artist10.save();

    const artist11 = new Artist();
    artist11.name = "Amelie Lens";
    artist11.country = "Belgium";
    artist11.genre = new Genre();
    artist11.genre.id = 2;

    const artist12 = new Artist();
    artist12.name = "Nina Kraviz";
    artist12.country = "Russia";
    artist12.genre = new Genre();
    artist12.genre.id = 2;
    await artist12.save();

    const artist13 = new Artist();
    artist13.name = "Jeff Mills";
    artist13.country = "USA";
    artist13.genre = new Genre();
    artist13.genre.id = 2;
    await artist13.save();

    const artist14 = new Artist();
    artist14.name = "Ben Klock";
    artist14.country = "Germany";
    artist14.genre = new Genre();
    artist14.genre.id = 2;
    await artist14.save();

    const artist15 = new Artist();
    artist15.name = "Klangkuenstler";
    artist15.country = "Germany";
    artist15.genre = new Genre();
    artist15.genre.id = 3;

    const artist16 = new Artist();
    artist16.name = "Fisher";
    artist16.country = "Australia";
    artist16.genre = new Genre();
    artist16.genre.id = 2;
    await artist16.save();

    const artist17 = new Artist();
    artist17.name = "Camelphat";
    artist17.country = "UK";
    artist17.genre = new Genre();
    artist17.genre.id = 5;
    await artist17.save();

    const artist18 = new Artist();
    artist18.name = "Solomun";
    artist18.country = "Germany";
    artist18.genre = new Genre();
    artist18.genre.id = 2;

    const artist19 = new Artist();
    artist19.name = "Jamie Jones";
    artist19.country = "UK";
    artist19.genre = new Genre();
    artist19.genre.id = 5;

    const artist20 = new Artist();
    artist20.name = "Marco Bailey";
    artist20.country = "Belgium";
    artist20.genre = new Genre();
    artist20.genre.id = 5;
    await artist20.save();
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
