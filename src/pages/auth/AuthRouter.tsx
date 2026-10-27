import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgotPassword from "./forgot-password/ForgotPassword";

export default function AuthRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
