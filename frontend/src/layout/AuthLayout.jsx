import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <h1>Administrador Despacho Juridico Beristain & De La Mora</h1>

      <Outlet />
    </>
  );
}
