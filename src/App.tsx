import { Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import PublicLayout from "./components/PublicLayout";
import Landing from "./pages/Landing";
import BrowseWorkers from "./pages/BrowseWorkers";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/workers" element={<BrowseWorkers />} />
      </Route>

      {/* Public routes */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
