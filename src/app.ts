import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { login, register } from "./Controllers/authController";

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
export default app;
