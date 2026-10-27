import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Login from "./Login";

export default function AuthRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
