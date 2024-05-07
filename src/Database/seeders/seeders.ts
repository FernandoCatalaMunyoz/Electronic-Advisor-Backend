import { Artist } from "../../Models/Artist";
import { Genre } from "../../Models/Genre";
import { Role } from "../../Models/Role";
import { User } from "../../Models/User";
import { Event } from "../../Models/Event";
import { AppDataSource } from "../db";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { Club } from "../../Models/Club";

const roleSeedDataBase = async () => {
  try {
    await AppDataSource.initialize();
    const roleUser = new Role();
    roleUser.name = "user";
    roleUser.id = 1;
    await roleUser.save();

    const roleSuperAdmin = new Role();
    roleSuperAdmin.name = "super_admin";
    roleSuperAdmin.id = 2;
    await roleSuperAdmin.save();
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};

const userSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    //Creacion usuario User
    const user = new User();
    user.firstName = "user";
    user.lastName = "user";
    user.country = "spain";
    user.email = "user@user.com";
    user.password = bcrypt.hashSync("Aa123456", 5); //Aa123456
    user.role = new Role();
    user.role.id = 1;
    await user.save();

    // Creacion usuario "super_admin"
    const super_admin = new User();
    super_admin.firstName = "super_admin";
    super_admin.lastName = "super_admin";
    super_admin.country = "spain";
    super_admin.email = "super_admin@super_admin.com";
    super_admin.password = bcrypt.hashSync("Aa123456", 8); // 123456
    super_admin.role = new Role();
    super_admin.role.id = 2;
    await super_admin.save();

    //Creacion usuarios falsos
    const generateFakeUser = () => {
      const user = new User();
      user.firstName = faker.person.firstName();
      user.lastName = faker.person.lastName();
      user.country = faker.location.country();
      user.email = faker.internet.email();
      user.password = bcrypt.hashSync("123456", 8); // 123456
      user.role = new Role();
      user.role.id = 1;

      return user;
    };
    const fakeUsers = Array.from({ length: 15 }, generateFakeUser);
    await User.save(fakeUsers);
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};

//Creacion generos

const genresSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const genre = new Genre();
    genre.name = "House";
    await genre.save();

    const genre2 = new Genre();
    genre2.name = "Techno";
    await genre2.save();

    const genre3 = new Genre();
    genre3.name = "HardTechno";
    await genre3.save();

    const genre4 = new Genre();
    genre4.name = "HardStyle";
    await genre4.save();

    const genre5 = new Genre();
    genre5.name = "Tech-House";
    await genre5.save();
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};

//Creacion artistas
const artistSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const generateFakeArtist = () => {
      const artist = new Artist();
      artist.name = faker.person.firstName();
      artist.country = faker.location.country();
      artist.genre = new Genre();
      artist.genre.id = faker.number.int({ min: 1, max: 5 });
      return artist;
    };
    const fakeArtist = Array.from({ length: 15 }, generateFakeArtist);
    await Artist.save(fakeArtist);
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
// Creacion clubs
const clubSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const generateFakeClub = () => {
      const club = new Club();
      club.name = faker.company.name();
      club.address = faker.location.streetAddress();
      club.link = faker.internet.url();
      return club;
    };
    const fakeClub = Array.from({ length: 15 }, generateFakeClub);
    await Club.save(fakeClub);
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
//Creacion eventos

const eventSeedDatabase = async () => {
  await AppDataSource.initialize();
  try {
    const generateFakeEvent = () => {
      const event = new Event();
      event.name = faker.lorem.words();
      event.month = faker.number.int({ min: 1, max: 12 });
      event.day = faker.number.int({ min: 1, max: 28 });
      event.year = faker.number.int({ min: 2024, max: 2025 });
      event.club = new Club();
      event.club.id = faker.number.int({ min: 1, max: 5 });
      return event;
    };
    const fakeEvent = Array.from({ length: 15 }, generateFakeEvent);
    await Event.save(fakeEvent);
  } catch (error) {
  } finally {
    await AppDataSource.destroy();
  }
};
//CREACION SEEDER ARTISTAS-EVENTOS

const startSeeder = async () => {
  await roleSeedDataBase();
  await userSeedDatabase();
  await genresSeedDatabase();
  await artistSeedDatabase();
  await clubSeedDatabase();
  await eventSeedDatabase();
};
startSeeder();
