import express from "express";
import { toRegister, profile } from "../controllers/userController.js";

//! I prefer to use the strict export to have no problmes in the future with the way I use my imports into other files
export const userRouter = express.Router();

userRouter.post('/', toRegister);

userRouter.get('/profile', profile);