import express from "express";
import { toRegister, profile, confirm, authenticate } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

//! I prefer to use the strict export to have no problmes in the future with the way I use my imports into other files
export const userRouter = express.Router();

userRouter.post('/', toRegister);

userRouter.get('/confirm/:token', confirm); //dinamic param for endpoint

userRouter.post('/login', authenticate);

userRouter.get('/profile', authMiddleware, profile);