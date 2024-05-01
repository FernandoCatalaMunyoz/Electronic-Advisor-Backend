import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Roles1714464357650 } from "./migrations/1714464357650-roles";
import { Users1714464379320 } from "./migrations/1714464379320-users";
import { Clubs1714465336161 } from "./migrations/1714465336161-clubs";
import { Events1714468693188 } from "./migrations/1714468693188-events";
import { Genres1714470649833 } from "./migrations/1714470649833-genres";
import { Artists1714471089038 } from "./migrations/1714471089038-artists";
import { ArtistEvent1714472684434 } from "./migrations/1714472684434-artist-event";
import { Role } from "../Models/Role";
import { User } from "../Models/User";
import { Club } from "../Models/Club";
import { Artist } from "../Models/Artist";
import { Genre } from "../Models/Genre";
import { Event } from "../Models/Event";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "test",
  entities: [Role, User, Club, Event, Artist, Genre],
  migrations: [
    Roles1714464357650,
    Users1714464379320,
    Clubs1714465336161,
    Events1714468693188,
    Genres1714470649833,
    Artists1714471089038,
    ArtistEvent1714472684434,
  ],
  synchronize: false,
  logging: false,
});
