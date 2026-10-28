import { Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import PublicLayout from "./components/PublicLayout";
import Landing from "./pages/Landing";
import BrowseWorkers from "./pages/BrowseWorkers";
import AuthRouter from "./pages/auth/AuthRouter";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import WorkerProfile from "./pages/WorkerProfile";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      {/* public URLs */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/workers" element={<BrowseWorkers />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/workers/:id" element={<WorkerProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Error routes */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
