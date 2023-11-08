import jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuario.js";

//? middleweare for autentication and validation of jwt 
export const authMiddleware = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];

            //jwtoken decoded
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // bringing just user without pass, token and confirmation
            req.user = await Usuario.findById(decoded.id).select('-password -token -confirmado');
        } catch (error) {
            res.status(403).json({msg: 'Token Invalido'});
        };
    };

    next();
};