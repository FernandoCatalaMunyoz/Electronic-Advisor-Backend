import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Roles1714464357650 } from "./migrations/1714464357650-roles";
import { Users1714464379320 } from "./migrations/1714464379320-users";
import { Clubs1714465336161 } from "./migrations/1714465336161-clubs";
import { Events1714468693188 } from "./migrations/1714468693188-events";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "test",
  entities: [],
  migrations: [
    Roles1714464357650,
    Users1714464379320,
    Clubs1714465336161,
    Events1714468693188,
  ],
  synchronize: false,
  logging: false,
});
