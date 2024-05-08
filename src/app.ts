import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { login, register } from "./Controllers/authController";
import { auth } from "./Middlewares/auth";
import {
  deleteProfile,
  deleteUserById,
  getProfile,
  getUsers,
  updateProfile,
} from "./Controllers/userController";
import { isSuperAdmin } from "./Middlewares/isSuperAdmin";
import {
  createArtist,
  deleteArtist,
  getArtistById,
  getArtists,
  getArtistsByGenre,
  updateArtist,
} from "./Controllers/artistController";
import {
  createRole,
  deleteRole,
  updateRole,
} from "./Controllers/roleController";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  updateEvent,
} from "./Controllers/eventController";
import {
  createGenre,
  deleteGenre,
  getGenres,
} from "./Controllers/genreController";
import {
  createClub,
  deleteClub,
  getClubById,
  getClubs,
  updateClub,
} from "./Controllers/clubController";
import { createArtistEvent } from "./Controllers/artistEventController";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

//RUTAS

//Rutas autenticacion

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

//Rutas User

app.get("/api/user/profile", auth, getProfile);
app.put("/api/user/profile", auth, updateProfile);
app.delete("/api/user", auth, deleteProfile);
app.get("/api/user", auth, isSuperAdmin, getUsers);
app.delete("/api/user/:id", auth, isSuperAdmin, deleteUserById);

//RUTAS ARTISTA

app.post("/api/artist", auth, isSuperAdmin, createArtist);
app.put("/api/artist", auth, isSuperAdmin, updateArtist);
app.delete("/api/artist/:id", auth, isSuperAdmin, deleteArtist);
app.get("/api/artist", getArtists);
app.get("/api/artist/genre", getArtistsByGenre);
app.get("/api/artist/:id", getArtistById);

//RUTAS ROLES

app.post("/api/roles", auth, isSuperAdmin, createRole);
app.delete("/api/roles/:id", auth, isSuperAdmin, deleteRole);
app.put("/api/roles/:id", auth, isSuperAdmin, updateRole);

//RUTAS EVENTOS

app.post("/api/events", auth, isSuperAdmin, createEvent);
app.put("/api/events/:id", auth, isSuperAdmin, updateEvent);
app.delete("/api/events/:id", auth, isSuperAdmin, deleteEvent);
app.get("/api/events", getEvents);
app.get("/api/events/:id", getEventById);

//RUTAS GENEROS

app.post("/api/genres", auth, isSuperAdmin, createGenre);
app.delete("/api/genres/:id", auth, isSuperAdmin, deleteGenre);
app.get("/api/genres", getGenres);

//RUTAS CLUBS
app.post("/api/clubs", auth, isSuperAdmin, createClub);
app.put("/api/clubs/:id", auth, isSuperAdmin, updateClub);
app.delete("/api/clubs/:id", auth, isSuperAdmin, deleteClub);
app.get("/api/clubs", getClubs);
app.get("/api/clubs/:id", getClubById);

//RUTAS ARTIST-EVENT
app.post("/api/artist-event", auth, isSuperAdmin, createArtistEvent);
export default app;
