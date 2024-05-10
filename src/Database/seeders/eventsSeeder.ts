import { Club } from "../../Models/Club";
import { Event } from "../../Models/Event";

import { AppDataSource } from "../db";

export const eventSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const event = new Event();
    event.name = "Tomorrowland";
    event.month = 7;
    event.day = 17;
    event.year = 2024;
    event.club = new Club();
    event.club.id = 1;
    await event.save();

    const event2 = new Event();
    event2.name = "Ultra Music Festival";
    event2.month = 3;
    event2.day = 29;
    event2.year = 2024;
    event2.club = new Club();
    event2.club.id = 2;
    await event2.save();

    const event3 = new Event();
    event3.name = "Awakenings";
    event3.month = 6;
    event3.day = 29;
    event3.year = 2024;
    event3.club = new Club();
    event3.club.id = 3;
    await event3.save();

    const event4 = new Event();
    event4.name = "Time Warp";
    event4.month = 11;
    event4.day = 6;
    event4.year = 2024;
    event4.club = new Club();
    event4.club.id = 4;
    await event4.save();

    const event5 = new Event();
    event5.name = "Sonus Festival";
    event5.month = 8;
    event5.day = 18;
    event5.year = 2024;
    event5.club = new Club();
    event5.club.id = 5;
    await event5.save();

    const event6 = new Event();
    event6.name = "DGTL";
    event6.month = 8;
    event6.day = 19;
    event6.year = 2024;
    event6.club = new Club();
    event6.club.id = 6;
    await event6.save();

    const event7 = new Event();
    event7.name = "Kappa FuturFestival";
    event7.month = 7;
    event7.day = 6;
    event7.year = 2024;
    event7.club = new Club();
    event7.club.id = 7;
    await event7.save();

    const event8 = new Event();
    event8.name = "Melt Festival";
    event8.month = 7;
    event8.day = 19;
    event8.year = 2024;
    event8.club = new Club();
    event8.club.id = 8;
    await event8.save();

    const event9 = new Event();
    event9.name = "Creamfields";
    event9.month = 8;
    event9.day = 22;
    event9.year = 2024;
    event9.club = new Club();
    event9.club.id = 9;
    await event9.save();

    const event10 = new Event();
    event10.name = "Movement";
    event10.month = 5;
    event10.day = 25;
    event10.year = 2024;
    event10.club = new Club();
    event10.club.id = 10;
    await event10.save();

    const event11 = new Event();
    event11.name = "Electric Zoo";
    event11.month = 9;
    event11.day = 6;
    event11.year = 2024;
    event11.club = new Club();
    event11.club.id = 11;
    await event11.save();

    const event12 = new Event();
    event12.name = "Afro Nation";
    event12.month = 7;
    event12.day = 31;
    event12.year = 2024;
    event12.club = new Club();
    event12.club.id = 12;
    await event12.save();

    const event13 = new Event();
    event13.name = "Rock in Rio";
    event13.month = 9;
    event13.day = 27;
    event13.year = 2024;
    event13.club = new Club();
    event13.club.id = 13;
    await event13.save();

    const event14 = new Event();
    event14.name = "Lollapalooza";
    event14.month = 10;
    event14.day = 29;
    event14.year = 2024;
    event14.club = new Club();
    event14.club.id = 1;
    await event14.save();

    const event15 = new Event();
    event15.name = "Coachella";
    event15.month = 9;
    event15.day = 13;
    event15.year = 2024;
    event15.club = new Club();
    event15.club.id = 10;
    await event15.save();

    const event16 = new Event();
    event16.name = "Medusa Festival";
    event16.month = 8;
    event16.day = 19;
    event16.year = 2024;
    event16.club = new Club();
    event16.club.id = 9;
    await event16.save();

    const event17 = new Event();
    event17.name = "A Summer Story";
    event17.month = 6;
    event17.day = 21;
    event17.year = 2024;
    event17.club = new Club();
    event17.club.id = 8;
    await event17.save();

    const event18 = new Event();
    event18.name = "Monegros";
    event18.month = 7;
    event18.day = 6;
    event18.year = 2024;
    event18.club = new Club();
    event18.club.id = 7;
    await event18.save();

    const event19 = new Event();
    event19.name = "Sziget Festival";
    event19.month = 8;
    event19.day = 7;
    event19.year = 2024;
    event19.club = new Club();
    event19.club.id = 4;
    await event19.save();

    const event20 = new Event();
    event20.name = "Sonar";
    event20.month = 6;
    event20.day = 19;
    event20.year = 2024;
    event20.club = new Club();
    event20.club.id = 3;
    await event20.save();
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
