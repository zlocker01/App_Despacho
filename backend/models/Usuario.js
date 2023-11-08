import mongoose from "mongoose";

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
    admin: {
        type: Boolean,
        default: null
    },
    token: {},
    confirmado: {
        type: Boolean,
        default: false
    }
});

//* Registering Schema as a Model to use with Mongoose
export const Usuario = mongoose.model('Usuario', usuarioSchema);