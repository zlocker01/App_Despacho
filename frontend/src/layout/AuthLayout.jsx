import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <h1>Desde el layout</h1>

      <Outlet />
    </>
  );
}
