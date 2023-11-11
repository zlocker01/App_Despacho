import bcrypt from 'bcrypt';
import { Usuario } from "../models/Usuario.js";
import { generateJWT } from "../helpers/generateJWT.js";
import { generateToken } from "../helpers/generateToken.js";

const toRegister = async (req, res) => {
    const { email } = req.body;

    //prevent the same email in other user
    const userExist = await Usuario.findOne({ email }); 

    if(userExist){
        const error = new Error('Este Usuario Ya Está Registrado');
        return res.status(400).json({ msg: error.message });
    };

    try {
        // saving new user
        const user = new Usuario(req.body);
        const userSaved = await user.save();  //? mongoose method to creat a register
        res.json(userSaved);
    } catch (error) {
        console.log(error);
    }
};

const profile =  (req, res) => {
    const { user } = req;

    res.json({profile: user});
};

const confirm = async (req, res) => {
    const { token } = req.params;

    const confirmUser =  await Usuario.findOne({ token });

    if(!confirmUser){
        const error = new Error('Token no valido');
        return res.status(404).json({ msg: error.message });
    };

    try {
        confirmUser.token = null;
        confirmUser.confirmado =  true;
        await confirmUser.save();

        res.json({msg: 'Usuario Confirmado Correctamente 👍'});

    } catch (error) {
        console.log(error);
    };
};

//login user
const authenticate =  async (req, res) => {
    const { email, password } = req.body;

    try {
        //find the user with email
        const user = await Usuario.findOne({ email });

        if(!user){
            return res.status(403).json({msg: 'Usuario No Registrado ❌'});
        };

        //user has been confirmed
        if(!user.confirmado){
            return res.status(403).json({msg: 'Tu Cuenta No Ha Sido Confirmada'});
        };

        //cheking password
        const isPasswordCorrect = await user.checkPassword(password);

        if(!isPasswordCorrect){
            return res.status(403).json({msg: 'Password Incorrecto ❌'});
        } else {
            return res.json({ token: generateJWT(user.id) });
        };

    } catch (error) {
        return res.status(500).josn({msg: 'Error En El Servidor'});
    };
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    const existUser = await Usuario.findOne({ email });

    if(!existUser){
        const error = new Error ('El Usuario No Existe');
        res.status(400).json({msg: error.message});
    };

    try {
        existUser.token = generateToken();

        await existUser.save();

        res.json({msg: 'Hemos Enviado Un Email Con Las Instrucciones Para Recuperar Tu Cuenta 📧'})
    } catch (error) {
        return res.status(500).json({msg: 'Error En El Servidor'});
    };
};

const checkToken = async (req, res) => {
    const { token } = req.params;

    const validToken =  await Usuario.findOne({ token });

    if(validToken){
        res.json({msg: 'Token OK'})
    } else {
        const error = new Error('Token Invalido');
        return res.status(400).json({msg: error.message});
    };
};

const newPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    
    const user = await Usuario.findOne({ token });

    if(!user){
        const error = new Error('Hubo Un Error');
        return res.status(400).json({msg: error.message});
    };

    try {
        // deleting the token after using and adding new password
        user.token = null;

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        await user.save();

        res.json({msg: 'Nuevo Password Guardado 👍'});
    } catch (error) {
        console.log(error);
    };
};

export { toRegister, profile, confirm, authenticate, forgotPassword, checkToken, newPassword };