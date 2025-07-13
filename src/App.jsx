import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import Navbar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Spotify from "./pages/spotify/Spotify";
import FollowedArtists from "./pages/spotify/FollowedArtists";
import PlayTrack from "./pages/spotify/PlayTrack";
import StopPlayback from "./pages/spotify/StopPlayback";

const App = () => (
  <Router>
    <ToastContainer position="top-right" />
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <ShowcaseSection />
            <LogoShowcase />
            <Experience />
            <TechStack />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/spotify" element={<Spotify />} />
      <Route path="/spotify/followed-artists" element={<FollowedArtists />} />
      <Route path="/spotify/play" element={<PlayTrack />} />
      <Route path="/spotify/stop" element={<StopPlayback />} />
    </Routes>
  </Router>
);

export default App;
