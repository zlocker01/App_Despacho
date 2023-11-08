import express from "express";

//! I prefer to use the strict export to have no problmes in the future with the way I use my imports into other files
export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Desde Usuarios');
});

userRouter.get('/login', (req, res) => {
    res.send('Desde Usuarios Login');
});