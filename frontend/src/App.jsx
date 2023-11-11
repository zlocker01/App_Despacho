import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { ConfirmAccount } from "./pages/ConfirmAccount";
import { ForgottenPassword } from "./pages/ForgottenPassword";
import { Register } from "./pages/Register";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirm" element={<ConfirmAccount />} />
            <Route path="forgot-password" element={<ForgottenPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
