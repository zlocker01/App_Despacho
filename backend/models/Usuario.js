import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

// hashing the user password
usuarioSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        next(); //prevent overhashing
    };

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//* Registering Schema as a Model to use with Mongoose
export const Usuario = mongoose.model('Usuario', usuarioSchema);