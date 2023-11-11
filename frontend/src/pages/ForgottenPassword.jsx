import { Link } from 'react-router-dom'

export const ForgottenPassword = () => {
  return (
    <>
      <h1>¿Olvidaste tu Contraseña?</h1>

      <form>
        <div>
          <label>Email </label>
          <input type="text" placeholder="Escribe tu Email" />
        </div>
        <button>Enviar Instrucciones</button>
      </form>

      <Link to='/'>Inicia Sesión</Link>
      <br/>
      <Link to='/register'>Registrate</Link>
    </>
  );
};
