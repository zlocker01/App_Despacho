const toRegister = (req, res) => {
    const {email, password, administrador } = req.body;
    res.json({msg: 'Registrando Usuario'});
};

const profile =  (req, res) => {
    res.json({msg: 'Mostrando Profile'});
};

export { toRegister, profile };