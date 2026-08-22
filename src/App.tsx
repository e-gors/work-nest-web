import { Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import PublicLayout from "./components/PublicLayout";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}></Route>
      {/* Public routes */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
