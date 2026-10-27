// import type { LocationState } from "@/types";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  //   const location = useLocation();
  //   const { session, loading } = UserAuth();

  //   const state = location.state as LocationState | null;
  //   const from = state?.from?.pathname ?? "/user/dashboard";

  //   if (!loading && session && !isEmpty(session)) {
  //     return <Navigate to={from} replace />;
  //   }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
