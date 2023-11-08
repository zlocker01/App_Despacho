import express from "express";
import { conectarDB } from "./config/db.js";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use('/api/usuarios', userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Working at ${PORT} port`);
});