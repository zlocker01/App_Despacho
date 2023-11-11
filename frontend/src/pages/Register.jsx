import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <h1>Registrate</h1>

      <form>
        <div>
          <label>Email: </label>
          <input type="text" placeholder="Email de Registro" />
        </div>
        <div>
          <label htmlFor="">Contraseña: </label>
          <input type="text" placeholder="Crea tu Contraseña" />
        </div>
        <div>
          <label htmlFor="">Confirmar Contraseña: </label>
          <input type="text" placeholder="Confirma tu Contraseña" />
        </div>
        <button>Crear Cuenta</button>
      </form>

      <Link to="/">¿Ya Tienes una Cuenta? Inicia Sesión</Link>
      <br/>
      <Link to="/forgot-password">Olvidé Mi Contraseña</Link>
    </>
  );
};
