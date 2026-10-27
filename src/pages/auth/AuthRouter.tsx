import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Login from "./login/Login";
import Register from "./register/Register";

export default function AuthRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
