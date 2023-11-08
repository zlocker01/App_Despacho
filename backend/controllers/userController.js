const toRegister = (req, res) => {
    res.send('Desde Usuarios');
};

const profile =  (req, res) => {
    res.send('Desde Usuarios profile');
};

export { toRegister, profile };