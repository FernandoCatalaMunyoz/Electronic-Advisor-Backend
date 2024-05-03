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
  updateArtist,
} from "./Controllers/artistController";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/healthy", (req, res) => {
  res.status(200).json({
    succes: true,
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
app.get("/api/artist/:id", getArtistById);

export default app;
