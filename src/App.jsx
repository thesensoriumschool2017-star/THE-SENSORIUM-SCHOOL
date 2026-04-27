import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurApproachPage from "./pages/OurApproachPage";
import AreasOfSupportPage from "./pages/AreasOfSupportPage";
import MissionPage from "./pages/MissionPage";
import VisionPage from "./pages/VisionPage";
import JoinUsPage from "./pages/JoinUsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/our-services" element={<ServicesPage />} />
      <Route path="/our-approach" element={<OurApproachPage />} />
      <Route path="/areas-of-support" element={<AreasOfSupportPage />} />
      <Route path="/our-mission" element={<MissionPage />} />
      <Route path="/our-vision" element={<VisionPage />} />
      <Route path="/join-us" element={<JoinUsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
