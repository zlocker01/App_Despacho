import mongoose from "mongoose";
import { generateToken } from "../helpers/generateToken.js"

const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    administrador: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: generateToken()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

//* Registering Schema as a Model to use with Mongoose
export const Usuario = mongoose.model('Usuario', usuarioSchema);