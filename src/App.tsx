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
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import Checkout from "./pages/Checkout";
import Accessibility from "./pages/legal/Accessibility";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import CreateProfile from "./pages/CreateProfile";
import Earnings from "./pages/Earnings";
import FindWork from "./pages/FindWork";
import HowItWorks from "./pages/HowItWorks";
import PostJob from "./pages/PostJob";
import Press from "./pages/Press";
import Resources from "./pages/Resources";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";
import WorkerHub from "./pages/WorkerHub";

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

        {/* Legal routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/accessibility" element={<Accessibility />} />

        <Route path="/workers/:id" element={<WorkerProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/checkout/:id" element={<Checkout />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/press" element={<Press />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/worker-hub" element={<WorkerHub />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Error routes */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
