import { Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import PublicLayout from "./components/PublicLayout";
import Landing from "./pages/Landing";
import BrowseWorkers from "./pages/BrowseWorkers";
import AuthRouter from "./pages/auth/AuthRouter";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/workers" element={<BrowseWorkers />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCenter />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Public routes */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
