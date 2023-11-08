import { Usuario } from "../models/Usuario.js";

const toRegister = async (req, res) => {
    const {email, password, administrador} = req.body;

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
    res.json({msg: 'Mostrando Profile 👁️'});
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
            return res.json({msg: 'Password Correcto 👍'});
        };

    } catch (error) {
        return res.status(500).josn({msg: 'Error En El Servidor'});
    };
};

export { toRegister, profile, confirm, authenticate };