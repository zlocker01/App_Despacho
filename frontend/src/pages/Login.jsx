import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <form>
        <div>
          <label>Email: </label>
          <input type="text" placeholder="Ingresa tu Email" />
        </div>
        <div>
          <label>Contraseña: </label>
          <input type="text" placeholder="Ingresa tu Contraseña" />
        </div>
        <button>Inicar Sesión</button>
      </form>

      {/* Adding Link to get better performance */}
      <nav>
        <Link to="/register">Registrar Nueva Cuenta</Link>
        <br />
        <Link to="/forgot-password">Olvidé Mi Contraseña</Link>
      </nav>
    </>
  );
}
