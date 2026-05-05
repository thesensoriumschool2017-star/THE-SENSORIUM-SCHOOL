import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurApproachPage from "./pages/OurApproachPage";
import AreasOfSupportPage from "./pages/AreasOfSupportPage";
import MissionPage from "./pages/MissionPage";
import VisionPage from "./pages/VisionPage";
import JoinUsPage from "./pages/JoinUsPage";
import AutoJoinUsPopup from "./components/AutoJoinUsPopup";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import SiteAnnouncementPopup from "./components/SiteAnnouncementPopup";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <AutoJoinUsPopup />
      <SiteAnnouncementPopup />
    </>
  );
}

export default App;
