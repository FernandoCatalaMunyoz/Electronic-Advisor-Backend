import { Request, Response } from "express";
import { User } from "../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { handleError } from "../utils/handleError";

//REGISTER

export const register = async (req: Request, res: Response) => {
  try {
    {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const country = req.body.country;
      const email = req.body.email;
      const password = req.body.password;

      if (!email) {
        throw new Error("Email required");
      }
      const userEmail = await User.findOne({
        where: {
          email: email,
        },
      });

      if (userEmail) {
        throw new Error("Email already in use");
      }
      if (
        firstName.length > 100 ||
        lastName.length > 100 ||
        email.length > 100 ||
        country.length > 100
      ) {
        throw new Error("This field must be under 255 characters");
      }

      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!validEmail.test(email)) {
        throw new Error("format email invalid");
      }

      if (password.length > 10 || password.length < 6) {
        throw new Error("Password has to be between 6 and 10 characters");
      }
      const passwordEncrypted = bcrypt.hashSync(password, 8);

      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        country: country,
        email: email,
        password: passwordEncrypted,
        role: { id: 1 },
      }).save();

      res.status(201).json({
        success: true,
        message: "User registered succesfully",
        data: newUser,
      });
    }
  } catch (error: any) {
    if (error.message === "Email already in use") {
      return handleError(res, error.message, 400);
    }
    if (error.message === "This field must be under 255 characters") {
      return handleError(res, error.message, 400);
    }
    if (error.message === "format email invalid") {
      return handleError(res, error.message, 400);
    }
    if (error.message === "Password has to be between 6 and 10 characters") {
      return handleError(res, error.message, 400);
    }
    if (error.message === "Email required") {
      return handleError(res, error.message, 400);
    }
    handleError(res, "You cant register", 500);
  }
};

//LOGIN

export const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are needed",
      });
    }
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "format email invalid",
      });
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
      relations: {
        role: true,
      },
      select: {
        id: true,
        password: true,
        email: true,
        firstName: true,
        lastName: true,
        role: {
          id: true,
          name: true,
        },
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "email or password invalid",
      });
    }
    const token = jwt.sign(
      {
        userId: user.id,
        roleName: user.role.name,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "520h",
      }
    );
    const decoded = jwt.decode(token);
    console.log(decoded, "token");
    return res.status(201).json({
      success: true,
      message: "User logged succesfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be logged",
      error: error,
    });
  }
};
